# Claude Quest X Bot

Daily achievement posts to X (Twitter) featuring Claude Code tips and tutorials.

## Features

- Posts one achievement daily between 9-10 AM PT (random timing)
- No repeats until all 365 achievements have been posted
- Dynamic tweet formats based on achievement type:
  - **Daily Tip** - for technical/config achievements
  - **Did You Know?** - for discovery/secrets
  - **Problem → Solution** - for workflow improvements
  - **Tutorial Thread** - for complex integrations
  - **TIL** - for quick wins/milestones
- Deep links to clauding.dev/quest/achievement/{id}
- Tracks progress in Cloudflare KV

## Setup

### 1. Create Bot X Account

1. Create a new X account for the bot (e.g., @ClaudeQuestBot)
2. Complete the profile with bio, avatar, header

### 2. Get X API Credentials

1. Go to [developer.x.com](https://developer.x.com)
2. Sign up for Free tier (1,500 tweets/month)
3. Create a new Project & App
4. Enable OAuth 1.0a with **Read and Write** permissions
5. Generate Access Token and Secret

### 3. Create KV Namespace

```bash
cd workers/x-bot
wrangler kv:namespace create QUEST_BOT_STATE
```

Copy the ID and update `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "QUEST_BOT_STATE"
id = "YOUR_KV_NAMESPACE_ID"
```

### 4. Set Secrets

```bash
wrangler secret put X_API_KEY
wrangler secret put X_API_SECRET
wrangler secret put X_ACCESS_TOKEN
wrangler secret put X_ACCESS_TOKEN_SECRET
```

### 5. Deploy

```bash
npm run deploy
```

## Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/status` | GET | Bot state and stats |
| `/errors` | GET | Recent error log |
| `/preview` | GET | Preview next post |
| `/trigger` | POST | Manual trigger (requires auth) |

## Development

```bash
npm install
npm run dev    # Start local dev server
npm run deploy # Deploy to Cloudflare
npm run tail   # View live logs
```

## Testing

Preview what would be posted:
```bash
curl https://claude-quest-x-bot.YOUR_SUBDOMAIN.workers.dev/preview
```

Check status:
```bash
curl https://claude-quest-x-bot.YOUR_SUBDOMAIN.workers.dev/status
```

## Architecture

```
src/
├── index.ts           # Main Worker handler (scheduled + HTTP)
├── achievements.ts    # Achievement selection (embeds all 365)
├── tweet-formatter.ts # Dynamic tweet generation
├── x-client.ts        # X API v2 with OAuth 1.0a
└── types.ts           # TypeScript interfaces
```

## Tweet Format Examples

### Daily Tip (memory/commands/hooks)
```
💡 Claude Code Tip

Include code block in memory file

Add content matching the pattern to your CLAUDE.md file...

📝 Memory | +75 XP

clauding.dev/quest/achievement/code_keeper
```

### Problem → Solution (workflow/performance)
```
Wish your Claude Code workflow was smoother? 🤔

Here's a tip: use conditional blocks in claude.md

Add content matching the pattern to your CLAUDE.md file...

🔄 +125 XP
clauding.dev/quest/achievement/conditional_memory
```

### Tutorial Thread (integrations/agents)
```
🔌 MCP Architect

Configure 10+ MCP servers

Here's how to unlock it 🧵
```
→ Step 1: Understand what it does...
→ Step 2: Try it yourself...
→ Want to master all 365 achievements?...
