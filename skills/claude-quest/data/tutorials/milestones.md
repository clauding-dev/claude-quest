# Quest Milestones

Track your progress, earn XP, and level up as you master Claude Code.

## How XP and Leveling Works

Experience Points (XP) are earned by:

- **Completing achievements** - Each achievement awards XP
- **Daily usage** - Maintain streaks for bonus XP
- **Exploring features** - First-time use of features earns XP
- **Sharing progress** - Help others, earn rewards

### XP Sources

| Activity | XP Earned |
|----------|-----------|
| First achievement | 50 XP |
| Standard achievement | 100 XP |
| Advanced achievement | 200 XP |
| Expert achievement | 500 XP |
| Daily streak bonus | 10 XP/day |
| Weekly streak bonus | 100 XP |

---

## Level Progression Table

| Level | Title | XP Required | Cumulative XP |
|-------|-------|-------------|---------------|
| 1 | Newcomer | 0 | 0 |
| 2 | Apprentice | 100 | 100 |
| 3 | Explorer | 200 | 300 |
| 4 | Learner | 300 | 600 |
| 5 | Practitioner | 400 | 1,000 |
| 6 | Developer | 500 | 1,500 |
| 7 | Skilled | 600 | 2,100 |
| 8 | Proficient | 700 | 2,800 |
| 9 | Advanced | 800 | 3,600 |
| 10 | Expert | 900 | 4,500 |
| 11 | Master | 1,000 | 5,500 |
| 12 | Veteran | 1,100 | 6,600 |
| 13 | Elite | 1,200 | 7,800 |
| 14 | Legend | 1,400 | 9,200 |
| 15 | Claude Champion | - | 9,200+ |

---

## Streak System

### Daily Streak

Use Claude Code each day to build your streak:

```
Day 1: 10 XP
Day 2: 10 XP
Day 3: 10 XP
...
Day 7: 10 XP + 100 XP (weekly bonus) = 110 XP
```

### Streak Tracking

Your streak is tracked automatically:

```json
{
  "streak": {
    "current": 7,
    "longest": 14,
    "lastActive": "2025-01-04"
  }
}
```

### Streak Benefits

| Streak | Bonus |
|--------|-------|
| 7 days | 100 XP weekly bonus |
| 14 days | "Consistent" badge |
| 30 days | "Dedicated" badge + 500 XP |
| 100 days | "Unstoppable" badge + 1000 XP |

### Recovering Streaks

Miss a day? Streaks have a grace period:

- 1 day grace if streak > 7 days
- Use streak freeze item (earned at Level 5)

---

## Achievement Milestone Rewards

### Beginner Achievements (50-100 XP each)

| Achievement | Description | XP |
|-------------|-------------|-----|
| First Steps | Complete your first Claude session | 50 |
| Explorer | Use 3 different tools | 75 |
| Reader | Read your first file with Claude | 50 |
| Writer | Create your first file | 75 |
| Searcher | Use Grep or Glob | 50 |
| Git Starter | Run your first git command | 75 |
| Helper | Ask Claude a question | 50 |

### Intermediate Achievements (100-200 XP each)

| Achievement | Description | XP |
|-------------|-------------|-----|
| Tool Master | Use all 5 core tools | 150 |
| Context King | Fill 50% of context window | 100 |
| Session Pro | Name 3 sessions | 100 |
| Plan Mode | Use plan mode 5 times | 150 |
| Integrator | Configure an MCP server | 200 |
| Hook Handler | Set up your first hook | 200 |
| Workflow Pro | Use /rewind successfully | 100 |

### Advanced Achievements (200-500 XP each)

| Achievement | Description | XP |
|-------------|-------------|-----|
| Power User | 100 tool uses in one session | 300 |
| MCP Expert | Configure 5 MCP servers | 400 |
| Hook Master | Chain 3+ hooks | 400 |
| Efficiency Expert | Complete task under budget | 250 |
| Multi-tasker | Use background tasks 10 times | 300 |
| Code Reviewer | Use Claude for PR review | 350 |
| Automation Pro | Set up CI/CD with Claude | 500 |

### Expert Achievements (500+ XP each)

| Achievement | Description | XP |
|-------------|-------------|-----|
| Champion | Reach Level 15 | 1000 |
| Marathon | 100-day streak | 1000 |
| Builder | Create custom MCP server | 750 |
| Teacher | Help 5 other users | 500 |
| Contributor | Contribute to Claude tools | 1000 |

---

## Early Adopter Achievement

**Special limited-time achievement!**

### Requirements

Install Claude Code before January 1, 2026:

```bash
# Check your install date
ls -la ~/.claude/

# If installed in 2025, you qualify!
```

### Rewards

| Reward | Description |
|--------|-------------|
| Badge | "Early Adopter 2025" exclusive badge |
| XP | 500 bonus XP |
| Title | "Pioneer" title option |
| Flair | Special profile flair |

### Verification

The achievement checks your installation timestamp:

```json
{
  "achievements": {
    "earlyAdopter": {
      "earned": true,
      "date": "2025-03-15",
      "year": 2025
    }
  }
}
```

---

## Sharing Progress (Evangelist Achievement)

### How to Share

```bash
# Generate shareable progress card
/quest share

# Export achievements
/quest export
```

### Evangelist Achievement Requirements

Help others discover Claude Code:

1. Share your progress publicly (Twitter, LinkedIn, etc.)
2. Help a new user get started
3. Write about your Claude Code experience
4. Contribute to community discussions

### Verification Methods

| Method | How to Verify |
|--------|---------------|
| Social share | Include #ClaudeCode hashtag |
| Help others | Screenshot of assistance |
| Blog post | Link to published article |
| Community | Forum/Discord participation |

### Evangelist Tiers

| Tier | Requirement | Reward |
|------|-------------|--------|
| Bronze | 1 share | 100 XP + badge |
| Silver | 5 shares | 300 XP + badge |
| Gold | 10 shares + mentoring | 500 XP + badge |
| Platinum | Community contribution | 1000 XP + badge |

---

## Viewing Your Progress

### In Claude Code

```bash
# Full quest status
/quest

# Specific sections
/quest achievements
/quest streak
/quest level
```

### Progress File Location

```bash
~/.claude/quest/progress.json
```

### Sample Progress Structure

```json
{
  "level": 8,
  "xp": 2950,
  "xpToNext": 650,
  "streak": {
    "current": 12,
    "longest": 14
  },
  "achievements": {
    "earned": ["firstSteps", "explorer", "reader", "earlyAdopter"],
    "inProgress": {
      "toolMaster": { "progress": 4, "required": 5 }
    }
  },
  "stats": {
    "totalSessions": 45,
    "totalTokens": 2340000,
    "toolUses": 892
  }
}
```

---

## Tips for Leveling Up

1. **Daily Usage** - Even brief sessions count for streaks
2. **Explore Features** - Try new tools and commands
3. **Configure Integrations** - MCP servers give significant XP
4. **Use Plan Mode** - Strategic planning earns achievements
5. **Share Progress** - Evangelist achievements are high-value
6. **Help Others** - Community participation rewards well
7. **Stay Consistent** - Streaks compound over time

---

## Milestone Celebrations

Reaching certain milestones triggers celebrations:

| Milestone | Celebration |
|-----------|-------------|
| First achievement | Welcome message |
| Level 5 | "Rising Star" notification |
| Level 10 | "Expert" recognition |
| 30-day streak | "Dedication" banner |
| Level 15 | "Claude Champion" ceremony |
| 100 achievements | "Completionist" badge |

---

## Frequently Asked Questions

**Q: Do XP ever expire?**
A: No, earned XP is permanent.

**Q: Can I lose levels?**
A: No, once reached, levels are permanent.

**Q: What happens after Level 15?**
A: You continue earning XP and achievements. Prestige system coming soon!

**Q: Can I transfer progress between machines?**
A: Yes, sync your `~/.claude/quest/` directory.

**Q: Are achievements retroactive?**
A: Some are! Install date and usage stats are checked historically.
