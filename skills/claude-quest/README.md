# Claude Quest Skill

This directory contains the Claude Quest skill for Claude Code - a gamified achievement system that turns learning Claude Code customization into an adventure.

## What is Claude Quest?

Claude Quest tracks your progress as you explore Claude Code's powerful customization features. Earn XP, unlock achievements, and level up as you master:

- Memory files (CLAUDE.md)
- Custom commands
- Skills
- Agents
- Hooks
- MCP integrations
- Workflow optimizations

## How It Works

When you run `/quest`, Claude Quest scans your Claude Code configuration to detect which features you've set up. Each discovered feature unlocks an achievement and awards XP toward your next level.

The skill uses:
- **Detection patterns** to automatically find achievements
- **XP and levels** to track your progress (15 levels total)
- **Streaks** to reward consistent usage
- **Categories** to organize achievements by topic

## File Structure

```
skills/claude-quest/
├── SKILL.md              # Main skill definition (not yet created)
├── README.md             # This file
└── data/
    ├── achievements.json     # All 90 achievements with detection rules
    └── progress.schema.json  # JSON schema for progress tracking
```

### achievements.json

Contains the complete achievement database with:
- Achievement metadata (id, name, description, category, rarity)
- XP values
- Detection rules (file paths, patterns, conditions)

### progress.schema.json

Defines the structure for tracking user progress:
- Total XP and current level
- Unlocked achievements with timestamps
- Usage streaks
- Statistics

## Using Claude Quest

Once installed, simply run:
```
/quest
```

Claude will scan your setup and show:
- Your current level and XP
- Recently unlocked achievements
- Suggestions for what to try next
- Your streak status

## Contributing

See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines on proposing new achievements or improving the skill.

## License

MIT License - See [LICENSE](../../LICENSE) for details.
