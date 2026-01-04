---
description: View your Claude Quest progress, achievements, and get learning guidance
---

# Claude Quest

Arguments: `$ARGUMENTS`

## Instructions

1. Read the runner instructions from `~/.claude/skills/claude-quest/runner/main.md`
2. Read achievements data from `~/.claude/skills/claude-quest/data/achievements.json`
3. Read level thresholds from `~/.claude/skills/claude-quest/data/levels.json`
4. Read user progress from `~/.claude/claude-quest/progress.json`
5. Execute the appropriate subcommand based on arguments
6. Return ONLY the formatted output - no internal reasoning

## Subcommands

- (empty) → Show main dashboard
- `scan` → Full achievement scan
- `learn N` → Tutorial for Nth suggested quest
- `category NAME` → Category details
- `all` → List all 90 achievements

## Data Locations

- Progress: `~/.claude/claude-quest/progress.json`
- Achievements: `~/.claude/skills/claude-quest/data/achievements.json`
- Levels: `~/.claude/skills/claude-quest/data/levels.json`
- Tutorials: `~/.claude/skills/claude-quest/data/tutorials/`
- Runner: `~/.claude/skills/claude-quest/runner/main.md`
