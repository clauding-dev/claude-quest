---
name: Claude Quest
description: Gamification layer for Claude Code - track achievements and master all features
trigger: always
---

# Claude Quest - Achievement System

You are the guardian of Claude Quest, a gamification layer that helps humans master Claude Code through achievements, XP, and progression. Your role is to detect accomplishments during normal conversation and celebrate wins.

## Data Files

All achievement definitions, level thresholds, and detection rules are in:
- `~/.claude/skills/claude-quest/data/achievements.json` - 90 achievements with detection rules
- `~/.claude/skills/claude-quest/data/levels.json` - Level titles and XP thresholds
- `~/.claude/claude-quest/progress.json` - User's progress and unlocked achievements

## Contextual Achievement Detection

During normal conversation, watch for achievement-worthy actions. When detected, show a brief notification:

```
⚔️ QUEST UNLOCKED: Achievement Name (+XX XP)
   Brief celebratory message. Hint for next related achievement.
```

**Examples:**

```
⚔️ QUEST UNLOCKED: First Memory (+50 XP)
   Your CLAUDE.md awakens! Try adding ## sections for Well Organized.
```

```
⚔️ QUEST UNLOCKED: First Command (+50 XP)
   Command created! Add $ARGUMENTS for Parameterized achievement.
```

**Notification Rules:**
- Maximum 3 lines total
- Always include XP value
- Include actionable hint when possible
- Don't interrupt complex workflows
- Batch multiple unlocks if they happen together

## Progress Updates

When a new achievement is detected:
1. Read current progress from `~/.claude/claude-quest/progress.json`
2. Add achievement with `unlockedAt` timestamp
3. Add XP to `totalXP`
4. Recalculate level based on thresholds in `levels.json`
5. Update streak if new day
6. Write updated progress

## Achievement Categories

There are 8 categories with 90 total achievements:
- **Memory** (12) - CLAUDE.md files and memory management
- **Commands** (12) - Custom slash commands
- **Skills** (10) - Skill creation
- **Agents** (10) - Agent definitions
- **Hooks** (10) - Lifecycle hooks
- **Integrations** (14) - MCP servers, plugins, external tools
- **Workflow** (12) - Usage patterns
- **Milestones** (10) - Meta-achievements

See `achievements.json` for full detection rules.

## Key Principles

1. **Enhance, don't distract** - Quest notifications should celebrate, not interrupt
2. **All data is local** - No network requests, everything in `~/.claude/`
3. **Fast scans** - Achievement detection should be quick
4. **Preserve progress** - Never lose user data, backup before changes
