import type { Env, BotState } from './types';
import { selectRandomUnposted, getRemainingCount, totalAchievements } from './achievements';
import { generateTweetThread } from './tweet-formatter';
import { postThread, withRetry, XAPIError } from './x-client';

// Random delay between 0-60 minutes (in ms)
const MAX_RANDOM_DELAY_MS = 60 * 60 * 1000;

/**
 * Get current bot state from KV
 */
async function getState(kv: KVNamespace): Promise<BotState> {
  const postedIds = await kv.get('posted_ids', 'json') as string[] | null;
  const cycleCount = parseInt(await kv.get('cycle_count') || '0');
  const lastPostedId = await kv.get('last_posted_id') || undefined;
  const lastPostedAt = await kv.get('last_posted_at') || undefined;

  return {
    postedIds: postedIds || [],
    cycleCount,
    lastPostedId,
    lastPostedAt,
  };
}

/**
 * Save posted achievement to KV
 */
async function savePosted(kv: KVNamespace, achievementId: string, postedIds: string[]): Promise<void> {
  const updatedIds = [...postedIds, achievementId];

  await Promise.all([
    kv.put('posted_ids', JSON.stringify(updatedIds)),
    kv.put('last_posted_id', achievementId),
    kv.put('last_posted_at', new Date().toISOString()),
  ]);
}

/**
 * Reset cycle when all achievements have been posted
 */
async function resetCycle(kv: KVNamespace, currentCycleCount: number): Promise<void> {
  await Promise.all([
    kv.put('posted_ids', '[]'),
    kv.put('cycle_count', (currentCycleCount + 1).toString()),
  ]);
}

/**
 * Log error to KV for debugging
 */
async function logError(kv: KVNamespace, error: { type: string; message: string; achievementId?: string }): Promise<void> {
  try {
    const existing = await kv.get('error_log', 'json') as Array<unknown> || [];
    const entry = {
      ...error,
      timestamp: new Date().toISOString(),
    };
    // Keep last 100 errors
    const updated = [...existing.slice(-99), entry];
    await kv.put('error_log', JSON.stringify(updated));
  } catch {
    // Ignore errors in error logging
  }
}

/**
 * Add random delay (0-60 minutes) for natural posting times
 */
async function randomDelay(): Promise<void> {
  const delay = Math.floor(Math.random() * MAX_RANDOM_DELAY_MS);
  console.log(`Adding random delay of ${Math.round(delay / 1000 / 60)} minutes`);
  await new Promise(resolve => setTimeout(resolve, delay));
}

/**
 * Main scheduled handler - posts daily achievement
 */
async function handleScheduled(env: Env, skipDelay = false): Promise<void> {
  // Add random 0-60 min delay for natural posting (skip for manual triggers)
  if (!skipDelay) {
    await randomDelay();
  }

  const state = await getState(env.QUEST_BOT_STATE);

  // Select achievement
  let achievement = selectRandomUnposted(state.postedIds);

  // If all posted, reset cycle and pick fresh
  if (!achievement) {
    console.log(`Cycle ${state.cycleCount + 1} complete! Resetting...`);
    await resetCycle(env.QUEST_BOT_STATE, state.cycleCount);
    achievement = selectRandomUnposted([]);
  }

  if (!achievement) {
    throw new Error('No achievements available - this should never happen');
  }

  console.log(`Selected achievement: ${achievement.id} (${achievement.name})`);

  // Generate tweet thread
  const thread = generateTweetThread(achievement, env.SITE_URL);
  console.log(`Generated thread with ${thread.replies.length + 1} tweets`);

  // Post with retry
  try {
    const tweetId = await withRetry(() => postThread(thread, env));
    console.log(`Posted successfully! Tweet ID: ${tweetId}`);

    // Save state
    await savePosted(env.QUEST_BOT_STATE, achievement.id, state.postedIds);
    console.log(`Saved state. Remaining: ${getRemainingCount(state.postedIds) - 1}/${totalAchievements}`);
  } catch (error) {
    const err = error as Error;
    console.error(`Failed to post: ${err.message}`);

    await logError(env.QUEST_BOT_STATE, {
      type: error instanceof XAPIError ? 'x_api_error' : 'unknown_error',
      message: err.message,
      achievementId: achievement.id,
    });

    throw error;
  }
}

/**
 * HTTP handler for status and manual triggers
 */
async function handleFetch(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);

  // Status endpoint
  if (url.pathname === '/status') {
    const state = await getState(env.QUEST_BOT_STATE);
    const remaining = getRemainingCount(state.postedIds);

    return new Response(JSON.stringify({
      totalAchievements,
      posted: state.postedIds.length,
      remaining,
      cycleCount: state.cycleCount,
      lastPostedId: state.lastPostedId,
      lastPostedAt: state.lastPostedAt,
    }, null, 2), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Error log endpoint
  if (url.pathname === '/errors') {
    const errors = await env.QUEST_BOT_STATE.get('error_log', 'json');
    return new Response(JSON.stringify(errors || [], null, 2), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Manual trigger (for testing - requires secret header)
  if (url.pathname === '/trigger' && request.method === 'POST') {
    const authHeader = request.headers.get('X-Admin-Secret');
    const adminSecret = await env.QUEST_BOT_STATE.get('admin_secret');

    if (!adminSecret || authHeader !== adminSecret) {
      return new Response('Unauthorized', { status: 401 });
    }

    try {
      await handleScheduled(env, true); // Skip delay for manual triggers
      return new Response('Triggered successfully');
    } catch (error) {
      return new Response(`Failed: ${(error as Error).message}`, { status: 500 });
    }
  }

  // Preview endpoint - show what would be posted without posting
  if (url.pathname === '/preview') {
    const state = await getState(env.QUEST_BOT_STATE);
    const achievement = selectRandomUnposted(state.postedIds);

    if (!achievement) {
      return new Response('All achievements posted - cycle would reset', {
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    const thread = generateTweetThread(achievement, env.SITE_URL);

    return new Response(JSON.stringify({
      achievement: {
        id: achievement.id,
        name: achievement.name,
        category: achievement.category,
        rarity: achievement.rarity,
        xp: achievement.xp,
      },
      thread: {
        main: thread.main,
        replies: thread.replies,
        mainLength: thread.main.length,
        replyLengths: thread.replies.map(r => r.length),
      },
    }, null, 2), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Default response
  return new Response(`Claude Quest X Bot

Endpoints:
  GET  /status   - Bot state and stats
  GET  /errors   - Recent error log
  GET  /preview  - Preview next post
  POST /trigger  - Manual trigger (requires auth)

Daily posts at ~9-10 AM PT
`, {
    headers: { 'Content-Type': 'text/plain' },
  });
}

export default {
  async scheduled(
    _controller: ScheduledController,
    env: Env,
    _ctx: ExecutionContext
  ): Promise<void> {
    await handleScheduled(env);
  },

  async fetch(
    request: Request,
    env: Env,
    _ctx: ExecutionContext
  ): Promise<Response> {
    return handleFetch(request, env);
  },
};
