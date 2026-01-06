import type { Env, TweetThread } from './types';

const X_API_BASE = 'https://api.twitter.com/2';

interface TweetResponse {
  data: {
    id: string;
    text: string;
  };
}

/**
 * Generate OAuth 1.0a signature for X API requests
 */
async function generateOAuthSignature(
  method: string,
  url: string,
  params: Record<string, string>,
  consumerSecret: string,
  tokenSecret: string
): Promise<string> {
  // Sort parameters alphabetically
  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

  // Create signature base string
  const signatureBaseString = [
    method.toUpperCase(),
    encodeURIComponent(url),
    encodeURIComponent(sortedParams),
  ].join('&');

  // Create signing key
  const signingKey = `${encodeURIComponent(consumerSecret)}&${encodeURIComponent(tokenSecret)}`;

  // Generate HMAC-SHA1 signature
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(signingKey),
    { name: 'HMAC', hash: 'SHA-1' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(signatureBaseString));

  // Convert to base64
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

/**
 * Generate a random nonce for OAuth
 */
function generateNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Build OAuth Authorization header
 */
async function buildOAuthHeader(
  method: string,
  url: string,
  env: Env
): Promise<string> {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = generateNonce();

  const oauthParams: Record<string, string> = {
    oauth_consumer_key: env.X_API_KEY,
    oauth_nonce: nonce,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: timestamp,
    oauth_token: env.X_ACCESS_TOKEN,
    oauth_version: '1.0',
  };

  // Generate signature
  const signature = await generateOAuthSignature(
    method,
    url,
    oauthParams,
    env.X_API_SECRET,
    env.X_ACCESS_TOKEN_SECRET
  );

  oauthParams.oauth_signature = signature;

  // Build header string
  const headerParts = Object.keys(oauthParams)
    .sort()
    .map(key => `${encodeURIComponent(key)}="${encodeURIComponent(oauthParams[key])}"`)
    .join(', ');

  return `OAuth ${headerParts}`;
}

/**
 * Post a single tweet
 */
async function postTweet(
  text: string,
  env: Env,
  replyToId?: string
): Promise<TweetResponse> {
  const url = `${X_API_BASE}/tweets`;

  const body: Record<string, unknown> = { text };
  if (replyToId) {
    body.reply = { in_reply_to_tweet_id: replyToId };
  }

  const authHeader = await buildOAuthHeader('POST', url, env);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new XAPIError(
      `Failed to post tweet: ${response.status} ${response.statusText}`,
      response.status,
      errorText
    );
  }

  return response.json() as Promise<TweetResponse>;
}

/**
 * Post a thread (main tweet + replies)
 */
export async function postThread(thread: TweetThread, env: Env): Promise<string> {
  // Post main tweet
  const mainResponse = await postTweet(thread.main, env);
  let lastTweetId = mainResponse.data.id;

  // Post replies in sequence
  for (const reply of thread.replies) {
    const replyResponse = await postTweet(reply, env, lastTweetId);
    lastTweetId = replyResponse.data.id;
  }

  return mainResponse.data.id;
}

/**
 * Custom error class for X API errors
 */
export class XAPIError extends Error {
  status: number;
  body: string;

  constructor(message: string, status: number, body: string) {
    super(message);
    this.name = 'XAPIError';
    this.status = status;
    this.body = body;
  }

  isRetryable(): boolean {
    // Rate limited or server error - can retry
    return this.status === 429 || this.status >= 500;
  }
}

/**
 * Retry wrapper with exponential backoff
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  initialDelayMs = 1000
): Promise<T> {
  let lastError: Error | null = null;
  let delay = initialDelayMs;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;

      // Don't retry on non-retryable errors
      if (error instanceof XAPIError && !error.isRetryable()) {
        throw error;
      }

      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
      }
    }
  }

  throw lastError;
}
