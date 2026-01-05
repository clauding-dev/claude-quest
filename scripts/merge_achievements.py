#!/usr/bin/env python3
"""Merge all generated achievements into the main database."""

import json
from pathlib import Path

# Paths
BASE_DIR = Path("/Users/sean/Documents/Dev/claude-quest")
DATA_DIR = BASE_DIR / "skills/claude-quest/data"
MAIN_FILE = DATA_DIR / "achievements.json"

# Load main database
with open(MAIN_FILE) as f:
    main_db = json.load(f)

existing_achievements = {a["id"]: a for a in main_db["achievements"]}
print(f"Original achievements: {len(existing_achievements)}")

# New categories to add
new_categories = [
    "automation", "collaboration", "performance",
    "security", "ai-mastery", "customization",
    "secrets", "testing", "documentation"
]

# Load all generated achievement files
generated_files = [
    DATA_DIR / "new-achievements-agent2.json",
    BASE_DIR / "agent-output-workflow-performance.json",
    DATA_DIR / "new-achievements-agent5.json",
    DATA_DIR / "new-achievements-final.json",
    DATA_DIR / "new-achievements-365.json",
]

all_new = []
for path in generated_files:
    if path.exists():
        with open(path) as f:
            data = json.load(f)
            achievements = data.get("achievements", data.get("new_achievements", []))
            print(f"Loaded {len(achievements)} from {path.name}")
            all_new.extend(achievements)

# Achievements from Agent 1, 3, 6 (from transcripts) - need to add manually
# These were output in the conversation but not saved to files

# Agent 1: Foundation (26)
agent1_achievements = [
    {"id": "template_master", "name": "Template Master", "description": "Use template variables like {{variable}} in CLAUDE.md", "category": "memory", "xp": 100, "rarity": "uncommon", "detection": {"type": "file_contains", "paths": ["~/.claude/CLAUDE.md", "./CLAUDE.md"], "pattern": "\\{\\{[a-zA-Z_][a-zA-Z0-9_]*\\}\\}"}},
    {"id": "conditional_memory", "name": "Conditional Memory", "description": "Use conditional blocks (if/when) in CLAUDE.md", "category": "memory", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_contains", "paths": ["~/.claude/CLAUDE.md", "./CLAUDE.md"], "pattern": "(When|If|Only when|Unless).*:"}},
    {"id": "multi_import", "name": "Multi Import", "description": "Use @import to include 3+ external files", "category": "memory", "xp": 150, "rarity": "rare", "detection": {"type": "file_contains", "paths": ["~/.claude/CLAUDE.md", "./CLAUDE.md"], "pattern": "@import\\s+", "min_matches": 3}},
    {"id": "environment_detector", "name": "Environment Detector", "description": "Include platform-specific instructions", "category": "memory", "xp": 100, "rarity": "uncommon", "detection": {"type": "file_contains", "paths": ["~/.claude/CLAUDE.md", "./CLAUDE.md"], "pattern": "(macOS|Linux|Windows|darwin|linux|win32|platform)"}},
    {"id": "list_builder", "name": "List Builder", "description": "Create structured lists with 10+ items in CLAUDE.md", "category": "memory", "xp": 75, "rarity": "common", "detection": {"type": "file_contains", "paths": ["~/.claude/CLAUDE.md", "./CLAUDE.md"], "pattern": "^\\s*[-*]\\s+", "min_matches": 10}},
    {"id": "forbidden_patterns", "name": "Forbidden Patterns", "description": "Document anti-patterns or things to avoid", "category": "memory", "xp": 100, "rarity": "uncommon", "detection": {"type": "file_contains", "paths": ["~/.claude/CLAUDE.md", "./CLAUDE.md"], "pattern": "(DON'T|NEVER|AVOID|DO NOT|forbidden|prohibited|anti-pattern)"}},
    {"id": "preference_keeper", "name": "Preference Keeper", "description": "Document personal coding preferences or style guide", "category": "memory", "xp": 75, "rarity": "common", "detection": {"type": "file_contains", "paths": ["~/.claude/CLAUDE.md", "./CLAUDE.md"], "pattern": "(prefer|always use|style|convention|standard)"}},
    {"id": "deep_hierarchy", "name": "Deep Hierarchy", "description": "Use nested headers (### or deeper) in CLAUDE.md", "category": "memory", "xp": 75, "rarity": "common", "detection": {"type": "file_contains", "paths": ["~/.claude/CLAUDE.md", "./CLAUDE.md"], "pattern": "^###\\s+"}},
    {"id": "rule_library", "name": "Rule Library", "description": "Create 5+ rule files in .claude/rules/", "category": "memory", "xp": 175, "rarity": "rare", "detection": {"type": "directory_has_files", "paths": ["~/.claude/rules", "./.claude/rules"], "pattern": "*.md", "min_count": 5}},
    {"id": "error_handler_cmd", "name": "Error Handler", "description": "Command that handles error cases explicitly", "category": "commands", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_contains", "paths": ["~/.claude/commands/**/*.md", "./.claude/commands/**/*.md"], "pattern": "(error|fail|exception|if.*not|handle.*error|catch)"}},
    {"id": "conditional_command", "name": "Conditional Command", "description": "Command with conditional logic (if/else/when)", "category": "commands", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_contains", "paths": ["~/.claude/commands/**/*.md", "./.claude/commands/**/*.md"], "pattern": "(If\\s|When\\s|Otherwise|Else|depending on)"}},
    {"id": "output_formatter", "name": "Output Formatter", "description": "Command that specifies output format", "category": "commands", "xp": 100, "rarity": "uncommon", "detection": {"type": "file_contains", "paths": ["~/.claude/commands/**/*.md", "./.claude/commands/**/*.md"], "pattern": "(output.*format|format.*as|return.*JSON|as a table|markdown format)"}},
    {"id": "validation_command", "name": "Validation Command", "description": "Command that validates input or checks requirements", "category": "commands", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_contains", "paths": ["~/.claude/commands/**/*.md", "./.claude/commands/**/*.md"], "pattern": "(validate|verify|check|ensure|must be|required)"}},
    {"id": "context_injector", "name": "Context Injector", "description": "Command that uses $FILE or $SELECTION variables", "category": "commands", "xp": 100, "rarity": "uncommon", "detection": {"type": "file_contains", "paths": ["~/.claude/commands/**/*.md", "./.claude/commands/**/*.md"], "pattern": "\\$(FILE|SELECTION|DIRECTORY|PROJECT)"}},
    {"id": "command_composer", "name": "Command Composer", "description": "Command that calls other slash commands", "category": "commands", "xp": 150, "rarity": "rare", "detection": {"type": "file_contains", "paths": ["~/.claude/commands/**/*.md", "./.claude/commands/**/*.md"], "pattern": "(run|call|invoke|execute).*(/[a-z]|slash command)"}},
    {"id": "interactive_command", "name": "Interactive Command", "description": "Command that asks follow-up questions", "category": "commands", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_contains", "paths": ["~/.claude/commands/**/*.md", "./.claude/commands/**/*.md"], "pattern": "(ask|prompt|clarify|confirm|which|what would you)"}},
    {"id": "mcp_command", "name": "MCP Command", "description": "Command that uses MCP server tools", "category": "commands", "xp": 150, "rarity": "rare", "detection": {"type": "file_contains", "paths": ["~/.claude/commands/**/*.md", "./.claude/commands/**/*.md"], "pattern": "(mcp|MCP|mcp__|use.*server|server tool)"}},
    {"id": "command_library", "name": "Command Library", "description": "Create 10+ custom commands", "category": "commands", "xp": 200, "rarity": "rare", "detection": {"type": "directory_has_files", "paths": ["~/.claude/commands", "./.claude/commands"], "pattern": "*.md", "min_count": 10, "recursive": True}},
    {"id": "skill_chain", "name": "Skill Chain", "description": "Skill that references or calls another skill", "category": "skills", "xp": 175, "rarity": "rare", "detection": {"type": "file_contains", "paths": ["~/.claude/skills/*/SKILL.md", "./.claude/skills/*/SKILL.md"], "pattern": "(/[a-z]+[-a-z]*:|invoke.*skill|use.*skill|chain.*to)"}},
    {"id": "data_skill", "name": "Data Skill", "description": "Skill with data/ directory for resources", "category": "skills", "xp": 125, "rarity": "uncommon", "detection": {"type": "directory_has_files", "paths": ["~/.claude/skills/*/data", "./.claude/skills/*/data"], "pattern": "*", "min_count": 1}},
    {"id": "versioned_skill", "name": "Versioned Skill", "description": "Skill with version number in SKILL.md", "category": "skills", "xp": 100, "rarity": "uncommon", "detection": {"type": "file_contains", "paths": ["~/.claude/skills/*/SKILL.md", "./.claude/skills/*/SKILL.md"], "pattern": "(version|Version):\\s*[0-9]+\\.[0-9]+"}},
    {"id": "error_recovery_skill", "name": "Error Recovery Skill", "description": "Skill that defines error handling behavior", "category": "skills", "xp": 150, "rarity": "rare", "detection": {"type": "file_contains", "paths": ["~/.claude/skills/*/SKILL.md", "./.claude/skills/*/SKILL.md"], "pattern": "(error|fail|exception|recover|fallback|retry)"}},
    {"id": "multi_command_skill", "name": "Multi-Command Skill", "description": "Skill that exposes multiple slash commands", "category": "skills", "xp": 175, "rarity": "rare", "detection": {"type": "directory_has_files", "paths": ["~/.claude/skills/*/commands", "./.claude/skills/*/commands"], "pattern": "*.md", "min_count": 2}},
    {"id": "templated_skill", "name": "Templated Skill", "description": "Skill with templates/ directory", "category": "skills", "xp": 125, "rarity": "uncommon", "detection": {"type": "directory_has_files", "paths": ["~/.claude/skills/*/templates", "./.claude/skills/*/templates"], "pattern": "*", "min_count": 1}},
    {"id": "skill_portfolio", "name": "Skill Portfolio", "description": "Create 5+ skills", "category": "skills", "xp": 250, "rarity": "epic", "detection": {"type": "directory_has_files", "paths": ["~/.claude/skills", "./.claude/skills"], "pattern": "*/SKILL.md", "min_count": 5}},
    {"id": "published_skill", "name": "Published Skill", "description": "Skill with LICENSE file (ready for sharing)", "category": "skills", "xp": 150, "rarity": "rare", "detection": {"type": "file_exists", "paths": ["~/.claude/skills/*/LICENSE", "./.claude/skills/*/LICENSE"]}},
]

# Agent 3: Integrations & Collaboration (26)
agent3_achievements = [
    {"id": "browser_automator", "name": "Browser Automator", "description": "Configure Playwright or Puppeteer MCP server", "category": "integrations", "xp": 150, "rarity": "rare", "detection": {"type": "file_contains", "files": ["~/.claude/settings.json", "./.mcp.json"], "pattern": "(playwright|puppeteer|browser)"}},
    {"id": "cloud_connected", "name": "Cloud Connected", "description": "Configure AWS, GCP, or Azure MCP server", "category": "integrations", "xp": 150, "rarity": "rare", "detection": {"type": "file_contains", "files": ["~/.claude/settings.json", "./.mcp.json"], "pattern": "(aws|amazon|gcp|google-cloud|azure|cloudflare)"}},
    {"id": "slack_integrated", "name": "Slack Integrated", "description": "Configure Slack MCP server", "category": "integrations", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_contains", "files": ["~/.claude/settings.json", "./.mcp.json"], "pattern": "slack"}},
    {"id": "discord_linked", "name": "Discord Linked", "description": "Configure Discord MCP server", "category": "integrations", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_contains", "files": ["~/.claude/settings.json", "./.mcp.json"], "pattern": "discord"}},
    {"id": "filesystem_explorer", "name": "Filesystem Explorer", "description": "Configure filesystem MCP server", "category": "integrations", "xp": 100, "rarity": "uncommon", "detection": {"type": "file_contains", "files": ["~/.claude/settings.json", "./.mcp.json"], "pattern": "(filesystem|@modelcontextprotocol/server-filesystem)"}},
    {"id": "linear_linked", "name": "Linear Linked", "description": "Configure Linear MCP server", "category": "integrations", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_contains", "files": ["~/.claude/settings.json", "./.mcp.json"], "pattern": "linear"}},
    {"id": "notion_networked", "name": "Notion Networked", "description": "Configure Notion MCP server", "category": "integrations", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_contains", "files": ["~/.claude/settings.json", "./.mcp.json"], "pattern": "notion"}},
    {"id": "docker_deployed", "name": "Docker Deployed", "description": "Configure Docker MCP server", "category": "integrations", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_contains", "files": ["~/.claude/settings.json", "./.mcp.json"], "pattern": "docker"}},
    {"id": "search_savant", "name": "Search Savant", "description": "Configure web search MCP server", "category": "integrations", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_contains", "files": ["~/.claude/settings.json", "./.mcp.json"], "pattern": "(brave|exa|tavily|search)"}},
    {"id": "mcp_collector", "name": "MCP Collector", "description": "Configure 5+ MCP servers", "category": "integrations", "xp": 200, "rarity": "rare", "detection": {"type": "config_count", "files": ["~/.claude/settings.json", "./.mcp.json"], "key": "mcpServers", "min_count": 5}},
    {"id": "mcp_architect", "name": "MCP Architect", "description": "Configure 10+ MCP servers", "category": "integrations", "xp": 350, "rarity": "epic", "detection": {"type": "config_count", "files": ["~/.claude/settings.json", "./.mcp.json"], "key": "mcpServers", "min_count": 10}},
    {"id": "team_memory", "name": "Team Memory", "description": "Create shared project CLAUDE.md with team conventions", "category": "collaboration", "xp": 100, "rarity": "uncommon", "detection": {"type": "file_contains", "path": "./CLAUDE.md", "pattern": "(team|Team|contributor|Contributor|collaboration)"}},
    {"id": "shared_commands", "name": "Shared Commands", "description": "Create 3+ commands in project .claude/commands", "category": "collaboration", "xp": 125, "rarity": "uncommon", "detection": {"type": "directory_has_files", "path": "./.claude/commands", "pattern": "*.md", "min_count": 3}},
    {"id": "pr_automator", "name": "PR Automator", "description": "Create command for pull request workflow", "category": "collaboration", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_exists", "paths": ["./.claude/commands/pr.md", "./.claude/commands/pull-request.md", "./.claude/commands/review-pr.md"]}},
    {"id": "onboarding_guide", "name": "Onboarding Guide", "description": "Create onboarding documentation", "category": "collaboration", "xp": 150, "rarity": "rare", "detection": {"type": "file_contains", "paths": ["./CLAUDE.md", "./.claude/commands/**/*.md"], "pattern": "(onboard|Onboard|getting.?started|new.?developer)"}},
    {"id": "commit_crafter", "name": "Commit Crafter", "description": "Create command for standardized commit messages", "category": "collaboration", "xp": 100, "rarity": "uncommon", "detection": {"type": "file_exists", "paths": ["./.claude/commands/commit.md", "~/.claude/commands/commit.md"]}},
    {"id": "standup_automator", "name": "Standup Automator", "description": "Create command for daily standup summaries", "category": "collaboration", "xp": 150, "rarity": "rare", "detection": {"type": "file_exists", "paths": ["./.claude/commands/standup.md", "./.claude/commands/daily.md"]}},
    {"id": "retro_generator", "name": "Retro Generator", "description": "Create command for retrospective generation", "category": "collaboration", "xp": 150, "rarity": "rare", "detection": {"type": "file_exists", "paths": ["./.claude/commands/retro.md", "./.claude/commands/retrospective.md"]}},
    {"id": "doc_collaborator", "name": "Doc Collaborator", "description": "Create documentation command for team", "category": "collaboration", "xp": 100, "rarity": "uncommon", "detection": {"type": "file_exists", "paths": ["./.claude/commands/docs.md", "./.claude/commands/document.md"]}},
    {"id": "knowledge_sharer", "name": "Knowledge Sharer", "description": "Document team patterns in project CLAUDE.md (10+ sections)", "category": "collaboration", "xp": 175, "rarity": "rare", "detection": {"type": "file_contains", "path": "./CLAUDE.md", "pattern": "^##\\s+", "min_matches": 10}},
    {"id": "template_maker", "name": "Template Maker", "description": "Create reusable templates in .claude directory", "category": "collaboration", "xp": 125, "rarity": "uncommon", "detection": {"type": "directory_has_files", "paths": ["./.claude/templates", "~/.claude/templates"], "pattern": "*", "min_count": 1}},
    {"id": "convention_keeper", "name": "Convention Keeper", "description": "Define coding standards in CLAUDE.md", "category": "collaboration", "xp": 100, "rarity": "uncommon", "detection": {"type": "file_contains", "path": "./CLAUDE.md", "pattern": "(convention|Convention|style.?guide|coding.?standard|naming)"}},
    {"id": "architecture_doc", "name": "Architecture Documenter", "description": "Document architecture decisions in project memory", "category": "collaboration", "xp": 150, "rarity": "rare", "detection": {"type": "file_contains", "path": "./CLAUDE.md", "pattern": "(architecture|Architecture|ADR|design.?decision)"}},
    {"id": "issue_tracker", "name": "Issue Tracker", "description": "Create command for GitHub/Linear issue workflow", "category": "collaboration", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_exists", "paths": ["./.claude/commands/issue.md", "./.claude/commands/bug.md"]}},
    {"id": "release_manager", "name": "Release Manager", "description": "Create command for release notes or changelog", "category": "collaboration", "xp": 150, "rarity": "rare", "detection": {"type": "file_exists", "paths": ["./.claude/commands/release.md", "./.claude/commands/changelog.md"]}},
]

# Agent 6: Customization, Milestones, Secrets (35)
agent6_achievements = [
    {"id": "theme_picker", "name": "Theme Picker", "description": "Configure a custom terminal theme", "category": "customization", "xp": 50, "rarity": "common", "detection": {"type": "config_has_key", "files": ["~/.claude/settings.json"], "key": "theme"}},
    {"id": "alias_master", "name": "Alias Master", "description": "Create a shell alias for Claude Code", "category": "customization", "xp": 75, "rarity": "common", "detection": {"type": "file_contains", "paths": ["~/.bashrc", "~/.zshrc", "~/.bash_profile", "~/.zprofile"], "pattern": "alias.*claude"}},
    {"id": "keybind_wizard", "name": "Keybind Wizard", "description": "Configure custom keybindings", "category": "customization", "xp": 100, "rarity": "uncommon", "detection": {"type": "config_has_key", "files": ["~/.claude/settings.json"], "key": "keybindings"}},
    {"id": "notification_tuner", "name": "Notification Tuner", "description": "Customize notification preferences", "category": "customization", "xp": 75, "rarity": "common", "detection": {"type": "config_has_key", "files": ["~/.claude/settings.json"], "key": "notifications"}},
    {"id": "status_crafter", "name": "Status Crafter", "description": "Design a custom status line with multiple components", "category": "customization", "xp": 150, "rarity": "rare", "detection": {"type": "file_contains", "files": ["~/.claude/settings.json"], "pattern": "statusLine.*\\{[^}]*,[^}]*\\}"}},
    {"id": "prompt_stylist", "name": "Prompt Stylist", "description": "Customize the CLI prompt appearance", "category": "customization", "xp": 100, "rarity": "uncommon", "detection": {"type": "config_has_key", "files": ["~/.claude/settings.json"], "key": "promptStyle"}},
    {"id": "color_palette", "name": "Color Palette", "description": "Define custom color scheme", "category": "customization", "xp": 100, "rarity": "uncommon", "detection": {"type": "config_has_key", "files": ["~/.claude/settings.json"], "key": "colors"}},
    {"id": "workspace_architect", "name": "Workspace Architect", "description": "Configure workspace-specific settings", "category": "customization", "xp": 125, "rarity": "uncommon", "detection": {"type": "file_exists", "path": "./.claude/settings.json"}},
    {"id": "default_definer", "name": "Default Definer", "description": "Set custom default model preference", "category": "customization", "xp": 100, "rarity": "uncommon", "detection": {"type": "config_has_key", "files": ["~/.claude/settings.json"], "key": "defaultModel"}},
    {"id": "history_curator", "name": "History Curator", "description": "Configure history retention settings", "category": "customization", "xp": 75, "rarity": "common", "detection": {"type": "config_has_key", "files": ["~/.claude/settings.json"], "key": "historyLimit"}},
    {"id": "editor_integrator", "name": "Editor Integrator", "description": "Set preferred external editor", "category": "customization", "xp": 100, "rarity": "uncommon", "detection": {"type": "config_has_key", "files": ["~/.claude/settings.json"], "key": "editor"}},
    {"id": "locale_setter", "name": "Locale Setter", "description": "Configure language or locale preferences", "category": "customization", "xp": 75, "rarity": "common", "detection": {"type": "config_has_key", "files": ["~/.claude/settings.json"], "key": "locale"}},
    {"id": "auto_pilot", "name": "Auto Pilot", "description": "Configure auto-accept settings", "category": "customization", "xp": 125, "rarity": "uncommon", "detection": {"type": "config_has_key", "files": ["~/.claude/settings.json", "./.claude/settings.json"], "key": "autoAccept"}},
    {"id": "persona_builder", "name": "Persona Builder", "description": "Create a custom personality section in CLAUDE.md", "category": "customization", "xp": 150, "rarity": "rare", "detection": {"type": "file_contains", "paths": ["~/.claude/CLAUDE.md", "./CLAUDE.md"], "pattern": "(personality|persona|tone|style|voice):"}},
    {"id": "century_club", "name": "Century Club", "description": "Unlock 100 achievements", "category": "milestones", "xp": 400, "rarity": "epic", "detection": {"type": "milestone", "milestone_type": "achievement_count", "count": 100}},
    {"id": "completionist", "name": "Completionist", "description": "Complete all achievements in any single category", "category": "milestones", "xp": 200, "rarity": "rare", "detection": {"type": "milestone", "milestone_type": "category_complete"}},
    {"id": "well_rounded", "name": "Well Rounded", "description": "Unlock at least one achievement from every category", "category": "milestones", "xp": 150, "rarity": "rare", "detection": {"type": "milestone", "milestone_type": "all_categories_touched"}},
    {"id": "quarter_champion", "name": "Quarter Champion", "description": "90-day usage streak", "category": "milestones", "xp": 400, "rarity": "epic", "detection": {"type": "milestone", "milestone_type": "streak", "days": 90}},
    {"id": "xp_hunter", "name": "XP Hunter", "description": "Accumulate 1000 XP", "category": "milestones", "xp": 100, "rarity": "uncommon", "detection": {"type": "milestone", "milestone_type": "total_xp", "xp": 1000}},
    {"id": "xp_master", "name": "XP Master", "description": "Accumulate 5000 XP", "category": "milestones", "xp": 250, "rarity": "rare", "detection": {"type": "milestone", "milestone_type": "total_xp", "xp": 5000}},
    {"id": "xp_legend", "name": "XP Legend", "description": "Accumulate 10000 XP", "category": "milestones", "xp": 500, "rarity": "epic", "detection": {"type": "milestone", "milestone_type": "total_xp", "xp": 10000}},
    {"id": "anniversary", "name": "Anniversary", "description": "Use Claude Quest for one full year", "category": "milestones", "xp": 500, "rarity": "epic", "detection": {"type": "milestone", "milestone_type": "tenure_days", "days": 365}},
    {"id": "rare_collector", "name": "Rare Collector", "description": "Unlock 10 rare or higher achievements", "category": "milestones", "xp": 200, "rarity": "rare", "detection": {"type": "milestone", "milestone_type": "rarity_count", "rarity": "rare", "count": 10}},
    {"id": "epic_hoarder", "name": "Epic Hoarder", "description": "Unlock 5 epic achievements", "category": "milestones", "xp": 300, "rarity": "epic", "detection": {"type": "milestone", "milestone_type": "rarity_count", "rarity": "epic", "count": 5}},
    {"id": "night_owl", "name": "Night Owl", "description": "Wisdom flows when the world sleeps...", "category": "secrets", "xp": 100, "rarity": "uncommon", "detection": {"type": "secret", "trigger": "session_time", "condition": "hour >= 0 && hour < 5"}},
    {"id": "early_bird", "name": "Early Bird", "description": "The dawn brings clarity and focus...", "category": "secrets", "xp": 100, "rarity": "uncommon", "detection": {"type": "secret", "trigger": "session_time", "condition": "hour >= 5 && hour < 7"}},
    {"id": "marathon_runner", "name": "Marathon Runner", "description": "Some sessions become legendary...", "category": "secrets", "xp": 150, "rarity": "rare", "detection": {"type": "secret", "trigger": "session_duration", "condition": "duration_hours >= 4"}},
    {"id": "time_traveler", "name": "Time Traveler", "description": "The past is never truly gone...", "category": "secrets", "xp": 150, "rarity": "rare", "detection": {"type": "secret", "trigger": "git_command", "condition": "revert|reset|checkout HEAD~"}},
    {"id": "archaeologist", "name": "Archaeologist", "description": "Ancient code holds forgotten wisdom...", "category": "secrets", "xp": 150, "rarity": "rare", "detection": {"type": "secret", "trigger": "file_age", "condition": "file_older_than_5_years"}},
    {"id": "rubber_duck", "name": "Rubber Duck", "description": "Sometimes explaining is all you need...", "category": "secrets", "xp": 100, "rarity": "uncommon", "detection": {"type": "secret", "trigger": "conversation_pattern", "condition": "user_explains_then_solves"}},
    {"id": "minimalist", "name": "Minimalist", "description": "Elegance lies in simplicity...", "category": "secrets", "xp": 200, "rarity": "rare", "detection": {"type": "secret", "trigger": "single_command_solution", "condition": "complex_task_one_command"}},
    {"id": "perfectionist", "name": "Perfectionist", "description": "Iteration breeds excellence...", "category": "secrets", "xp": 150, "rarity": "rare", "detection": {"type": "secret", "trigger": "revision_count", "condition": "same_file_edited_10_times"}},
    {"id": "holiday_spirit", "name": "Holiday Spirit", "description": "Even holidays cannot stop a true builder...", "category": "secrets", "xp": 200, "rarity": "rare", "detection": {"type": "secret", "trigger": "calendar_date", "condition": "major_holiday"}},
    {"id": "lucky_seven", "name": "Lucky Seven", "description": "Some numbers hold special meaning...", "category": "secrets", "xp": 77, "rarity": "uncommon", "detection": {"type": "secret", "trigger": "session_count", "condition": "session_number == 7 || session_number == 77 || session_number == 777"}},
]

# Add manual achievements
all_new.extend(agent1_achievements)
all_new.extend(agent3_achievements)
all_new.extend(agent6_achievements)

print(f"Total new achievements to add: {len(all_new)}")

# Merge - avoid duplicates
added = 0
duplicates = []
for achievement in all_new:
    aid = achievement["id"]
    if aid not in existing_achievements:
        existing_achievements[aid] = achievement
        added += 1
    else:
        duplicates.append(aid)

print(f"Added: {added}")
print(f"Duplicates skipped: {len(duplicates)}")
if duplicates:
    print(f"  Duplicate IDs: {duplicates[:10]}...")

# Update categories
all_categories = set(main_db["categories"])
for cat in new_categories:
    all_categories.add(cat)

# Sort categories
category_order = [
    "memory", "commands", "skills", "agents", "hooks",
    "integrations", "workflow", "milestones",
    "automation", "collaboration", "performance",
    "security", "ai-mastery", "customization",
    "testing", "documentation", "secrets"
]
sorted_categories = [c for c in category_order if c in all_categories]

# Create merged database
merged_db = {
    "version": "2.0.0",
    "total_achievements": len(existing_achievements),
    "categories": sorted_categories,
    "achievements": list(existing_achievements.values())
}

# Sort achievements by category then id
merged_db["achievements"].sort(key=lambda a: (sorted_categories.index(a["category"]) if a["category"] in sorted_categories else 99, a["id"]))

# Write merged file
output_path = DATA_DIR / "achievements.json"
with open(output_path, "w") as f:
    json.dump(merged_db, f, indent=2)

print(f"\nFinal database: {merged_db['total_achievements']} achievements")
print(f"Categories: {len(sorted_categories)}")
print(f"Written to: {output_path}")

# Category breakdown
from collections import Counter
cat_counts = Counter(a["category"] for a in merged_db["achievements"])
print("\nCategory breakdown:")
for cat in sorted_categories:
    print(f"  {cat}: {cat_counts.get(cat, 0)}")
