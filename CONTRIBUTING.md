# Contributing to Claude Quest

Welcome, fellow adventurer! Whether you're here to report a bug, propose a new achievement, or help improve the quest for others, we're thrilled to have you join our party.

## Ways to Contribute

### Report Bugs
Found something broken? Open an issue using our [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md). The more detail you provide, the faster we can squash it.

### Suggest New Achievements
Have an idea for an achievement that would help others level up their Claude Code skills? We'd love to hear it! Use our [Achievement Idea template](.github/ISSUE_TEMPLATE/achievement_idea.md) to propose it.

### Improve Tutorials
Help make the learning journey smoother for new adventurers. Clarify confusing instructions, add helpful tips, or suggest better examples.

### Fix Typos
Spotted a spelling mistake or grammatical error? Small fixes add up to a better experience for everyone.

### Add Translations
Help us reach adventurers around the world by translating content into other languages.

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/claude-quest.git
   cd claude-quest
   ```

2. **Install the skill locally**
   Copy the `skills/claude-quest` directory to your Claude Code skills folder:
   ```bash
   cp -r skills/claude-quest ~/.claude/skills/
   ```

3. **Test your changes**
   Run `/quest` in Claude Code to verify everything works as expected.

## Pull Request Process

1. **Fork and branch**: Create a feature branch from `main` (e.g., `add-new-achievement` or `fix-detection-bug`)

2. **Make your changes**: Keep commits focused and atomic

3. **Test locally**: Ensure your changes work with Claude Code

4. **Submit PR**: Use our [Pull Request template](.github/PULL_REQUEST_TEMPLATE.md) and fill in all sections

5. **Respond to feedback**: We'll review your PR and may request changes

## Code Style Guidelines

### Markdown Formatting
- Use consistent heading levels (# for title, ## for sections, ### for subsections)
- Add blank lines between sections
- Use fenced code blocks with language identifiers

### JSON Structure (achievements.json)
- Keep consistent indentation (2 spaces)
- Order achievement properties: `id`, `name`, `description`, `category`, `xp`, `rarity`, `detection`
- Use lowercase-with-underscores for IDs: `my_new_achievement`
- Valid categories: `memory`, `commands`, `skills`, `agents`, `hooks`, `integrations`, `workflow`, `milestones`
- Valid rarities: `common`, `uncommon`, `rare`, `epic`

## Achievement Proposal Template

When proposing a new achievement, please include:

```
**Achievement Name**: The display name shown to users

**Category**: memory | commands | skills | agents | hooks | integrations | workflow | milestones

**Description**: Brief description of what triggers this achievement

**Detection Method**: How Claude Quest should detect this achievement
  - Type: file_exists | file_contains | directory_has_files | config_has_key | manual | milestone
  - Details: Paths, patterns, or trigger conditions

**XP Value**: Suggested XP (common: 25-75, uncommon: 75-125, rare: 125-200, epic: 200+)

**Why it teaches something valuable**: Explain what skill or concept this achievement helps users learn
```

## Community Guidelines

- **Be kind**: Everyone is here to learn and contribute
- **Be constructive**: When providing feedback, focus on helping improve the work
- **Be patient**: Maintainers are volunteers with limited time
- **Be welcoming**: Help newcomers feel at home in the community
- **Have fun**: This is a quest, after all!

## Questions?

If you're unsure about anything, feel free to open a discussion or ask in an issue. We're here to help!

---

Thank you for helping make Claude Quest better for everyone. May your contributions be legendary!
