# Claude Quest Runner Instructions

You are executing the Claude Quest command. Follow these instructions precisely.

## Parsing Arguments

Parse the arguments to determine the subcommand:
- Empty or whitespace only → Show main dashboard
- `scan` → Force rescan all achievements
- `learn <n>` → Show tutorial for nth suggested quest (n is a number)
- `category <name>` → Show achievements in named category
- `all` → List all 90 achievements

## File Locations

- **Progress file**: `~/.claude/claude-quest/progress.json`
- **Achievements definition**: `~/.claude/skills/claude-quest/data/achievements.json`
- **Levels**: `~/.claude/skills/claude-quest/data/levels.json`
- **Tutorials**: `~/.claude/skills/claude-quest/data/tutorials/` directory

## Categories

The 8 achievement categories are:
1. **Memory** (12 achievements) - CLAUDE.md files and memory management
2. **Commands** (12 achievements) - Custom slash commands
3. **Skills** (10 achievements) - Advanced skill creation
4. **Agents** (10 achievements) - Multi-agent workflows
5. **Hooks** (10 achievements) - Lifecycle hooks
6. **Integrations** (14 achievements) - MCP, Git, external tools
7. **Workflow** (12 achievements) - Daily usage patterns
8. **Milestones** (10 achievements) - Meta-achievements and totals

---

## Subcommand: Main Dashboard (default)

When arguments are empty, display the main dashboard.

### Steps:

1. **Read progress file** from `~/.claude/claude-quest/progress.json`
   - If it doesn't exist, initialize with default values and scan

2. **Perform a quick scan** of the user's Claude Code setup to detect achievements:
   - Check `~/.claude/CLAUDE.md` and project CLAUDE.md files
   - Check `~/.claude/commands/` for custom commands
   - Check `~/.claude/settings.json` for MCP servers, hooks, plugins
   - Check project `.claude/` directories
   - Check for agents in `~/.claude/agents/`

3. **Calculate progress** for each category

4. **Identify next quests** - 3 achievable unlocks based on current progress

5. **Display the dashboard** using this exact format:

```
╔══════════════════════════════════════════════════╗
║              ⚔️  CLAUDE QUEST  ⚔️                 ║
╠══════════════════════════════════════════════════╣
║  Level X: [Title]           ████████░░ XX%      ║
║  XP: X,XXX / X,XXX                              ║
╚══════════════════════════════════════════════════╝

━━━ Recent Discoveries ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🌱 [Achievement Name]       [RARITY]      +XX XP
  🌱 [Achievement Name]       [RARITY]      +XX XP
  (Show last 3-5 unlocks, or "No recent discoveries" if none)

━━━ Quest Progress ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Memory:       ████░░░░░░  X/12
  Commands:     ██░░░░░░░░  X/12
  Skills:       ░░░░░░░░░░  X/10
  Agents:       ░░░░░░░░░░  X/10
  Hooks:        ░░░░░░░░░░  X/10
  Integrations: ██░░░░░░░░  X/14
  Workflow:     █░░░░░░░░░  X/12
  Milestones:   █░░░░░░░░░  X/10

━━━ Next Quests ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  [1] 🎯 [Achievement Name] (+XX XP)
      [Short description of what to do]

  [2] 🎯 [Achievement Name] (+XX XP)
      [Short description]

  [3] 🎯 [Achievement Name] (+XX XP)
      [Short description]

  💡 Type "/quest learn 1" to see how!

══════════════════════════════════════════════════
  X/90 Achievements | 🔥 X-day streak
══════════════════════════════════════════════════
```

### Progress Bar Rendering

For the level progress bar (10 characters):
- Calculate percentage toward next level
- Use `█` for filled portions, `░` for empty
- Example: 60% = `██████░░░░`

For category progress bars (10 characters):
- Calculate: (unlocked / total) * 10
- Round to nearest whole number

---

## Subcommand: Scan (`/quest scan`)

When arguments are `scan`:

1. **Announce the scan**:
```
⚔️ CLAUDE QUEST - Full Achievement Scan
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

2. **Scan all locations thoroughly**:

   **Memory category scans:**
   - `~/.claude/CLAUDE.md` - Check exists, size, sections
   - Project `CLAUDE.md` files
   - `.claude/CLAUDE.md` in projects
   - Check for specific patterns (headings, code blocks, links)

   **Commands category scans:**
   - `~/.claude/commands/*.md` - Count and analyze
   - Project `.claude/commands/*.md`
   - Check for arguments, frontmatter, complexity

   **Skills category scans:**
   - `~/.claude/skills/*/SKILL.md`
   - Project `.claude/skills/*/SKILL.md`
   - Check for data files, templates

   **Hooks category scans:**
   - Check `~/.claude/settings.json` for hooks key
   - Check for PreToolUse, PostToolUse, Notification hooks
   - Look for hook scripts

   **Integration category scans:**
   - MCP servers in settings.json and .mcp.json
   - Git integration patterns
   - Plugins in enabledPlugins

   **Workflow category scans:**
   - Check progress.json for streak data
   - Session patterns
   - Usage statistics

3. **Compare against achievements.json** to determine unlocks

4. **Report new discoveries**:
```
🔍 Scanning Memory achievements...
   ✅ First Words - CLAUDE.md exists
   ✅ Scribe - 500+ words in CLAUDE.md
   ⬜ Librarian - No project CLAUDE.md found

🔍 Scanning Commands achievements...
   ✅ Commander - First command created
   ⬜ Arsenal - Need 5 commands (have 2)
   ...

━━━ Scan Complete ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  New achievements: X
  Total unlocked: XX/90
  XP gained: +XXX
```

5. **Update progress.json** with new unlocks and timestamps

6. **Show the main dashboard** after scan

---

## Subcommand: Learn (`/quest learn <n>`)

When arguments match `learn <number>`:

1. **Parse the number** (1, 2, or 3 typically)

2. **Look up the nth next quest** from the suggestions

3. **Load tutorial content** from `~/.claude/skills/claude-quest/data/tutorials/`
   - Tutorial files are named by category: `{category}.md`
   - If no tutorial exists, generate guidance based on achievement

4. **Display the learning guide**:

```
╔══════════════════════════════════════════════════╗
║  ⚔️ QUEST GUIDE: [Achievement Name]              ║
╠══════════════════════════════════════════════════╣
║  Category: [Category]        Rarity: [RARITY]    ║
║  Reward: +XX XP                                  ║
╚══════════════════════════════════════════════════╝

📜 DESCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Full description of what this achievement represents]

📋 STEPS TO COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. [First step with clear instructions]

2. [Second step]
   ```
   [Code or config example if applicable]
   ```

3. [Third step]

💡 TIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- [Helpful tip]
- [Common pitfall to avoid]

🔗 RELATED ACHIEVEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  → [Related Achievement 1] (+XX XP)
  → [Related Achievement 2] (+XX XP)

══════════════════════════════════════════════════
  Ready? Complete the steps and run /quest scan!
══════════════════════════════════════════════════
```

5. If the number is invalid (e.g., `/quest learn 5` when only 3 suggestions), show:
```
⚠️ Invalid quest number. Use 1-3 based on the Next Quests list.
   Run /quest to see available quests.
```

---

## Subcommand: Category (`/quest category <name>`)

When arguments match `category <name>`:

1. **Parse the category name** (case-insensitive)
   - Valid: memory, commands, skills, agents, hooks, integrations, workflow, milestones

2. **Load achievements for that category** from achievements.json

3. **Display category view**:

```
╔══════════════════════════════════════════════════╗
║  ⚔️ [CATEGORY NAME] ACHIEVEMENTS                 ║
╠══════════════════════════════════════════════════╣
║  Progress: ██████░░░░  X/XX  |  XXX XP earned   ║
╚══════════════════════════════════════════════════╝

✅ UNLOCKED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✅ [Achievement Name]                    [RARITY]
     [Description]
     Unlocked: [Date]

  ✅ [Achievement Name]                    [RARITY]
     [Description]
     Unlocked: [Date]

⬜ LOCKED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⬜ [Achievement Name]                    [RARITY]
     [Description]
     Hint: [How to unlock]

  ⬜ [Achievement Name]                    [RARITY]
     [Description]
     Hint: [How to unlock]

══════════════════════════════════════════════════
  💡 Run /quest learn to get detailed guides
══════════════════════════════════════════════════
```

4. If invalid category name:
```
⚠️ Unknown category: [name]

Available categories:
  • memory      (12 achievements)
  • commands    (12 achievements)
  • skills      (10 achievements)
  • agents      (10 achievements)
  • hooks       (10 achievements)
  • integrations (14 achievements)
  • workflow    (12 achievements)
  • milestones  (10 achievements)
```

---

## Subcommand: All (`/quest all`)

When arguments are `all`:

Display a compact list of all 90 achievements:

```
╔══════════════════════════════════════════════════╗
║         ⚔️ ALL CLAUDE QUEST ACHIEVEMENTS ⚔️       ║
╠══════════════════════════════════════════════════╣
║  Total: XX/90 Unlocked  |  X,XXX XP Earned      ║
╚══════════════════════════════════════════════════╝

━━━ MEMORY (X/12) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✅ First Memory             COMMON       50 XP
  ✅ Personal Scribe          COMMON       75 XP
  ⬜ Project Memory           COMMON       75 XP
  ...

━━━ COMMANDS (X/12) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✅ First Command            COMMON       50 XP
  ⬜ Namespace User           COMMON       75 XP
  ...

━━━ SKILLS (X/10) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⬜ Skill Unlocked           UNCOMMON    100 XP
  ...

━━━ AGENTS (X/10) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⬜ Agent Creator            UNCOMMON    100 XP
  ...

━━━ HOOKS (X/10) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⬜ Hooked                   UNCOMMON    100 XP
  ...

━━━ INTEGRATIONS (X/14) ━━━━━━━━━━━━━━━━━━━━━━━━━
  ✅ Plugin Pioneer           COMMON       50 XP
  ...

━━━ WORKFLOW (X/12) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✅ Git Ready                COMMON       25 XP
  ...

━━━ MILESTONES (X/10) ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✅ Day One                  COMMON       25 XP
  ⬜ Getting Started          COMMON       50 XP
  ...

══════════════════════════════════════════════════
  Use /quest category <name> for details
══════════════════════════════════════════════════
```

---

## Progress File Management

### Initialize Progress (if file doesn't exist)

Create `~/.claude/claude-quest/progress.json`:
```json
{
  "version": "1.0.0",
  "installedAt": "[current ISO datetime]",
  "lastScan": "[current ISO datetime]",
  "totalXP": 0,
  "level": 1,
  "streak": {
    "current": 0,
    "lastActiveDate": "[today YYYY-MM-DD]",
    "longest": 0
  },
  "achievements": {},
  "stats": {
    "totalScans": 0,
    "achievementsUnlocked": 0
  }
}
```

### Update Progress After Scan

When new achievements are detected:
1. Add to `achievements` object with `unlockedAt` timestamp
2. Calculate XP and update `totalXP`
3. Recalculate `level` based on XP thresholds from levels.json
4. Update `lastScan` timestamp
5. Update streak if new day
6. Increment stats counters

### Streak Logic

```
today = current_date()
last_active = progress.streak.lastActiveDate

if last_active is None:
    # First activity
    streak.current = 1
elif today == last_active:
    # Same day, no change
    pass
elif today == last_active + 1 day:
    # Consecutive day
    streak.current += 1
    streak.longest = max(streak.longest, streak.current)
else:
    # Streak broken
    streak.current = 1

streak.lastActiveDate = today
```

---

## Error Handling

- If progress.json is corrupted, back it up and reinitialize
- If achievements.json is missing, report error
- If directories don't exist, create them
- Always provide helpful error messages with recovery steps

---

## Output Rules

1. **Always show the ⚔️ branding** in headers
2. **Use box drawing characters** for visual appeal
3. **Be encouraging** - celebrate unlocks and progress
4. **Suggest next steps** - always guide the user forward
5. **Keep scans fast** - don't scan unnecessarily deep
6. **Preserve data** - never lose progress, always backup before changes
7. **Return ONLY the formatted output** - no internal reasoning or debug info
