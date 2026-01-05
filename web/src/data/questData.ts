// Achievement and category data for Claude Quest

export interface Achievement {
  id: string;
  name: string;
  description: string;
  category: Category;
  xp: number;
  hint?: string; // How to unlock this achievement
}

export type Category =
  | 'memory'
  | 'commands'
  | 'skills'
  | 'agents'
  | 'hooks'
  | 'integrations'
  | 'workflow'
  | 'milestones';

export interface CategoryInfo {
  id: Category;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'memory',
    name: 'Memory Keeper',
    icon: '📝',
    description: 'Master CLAUDE.md files and project memory systems',
    color: '#10b981'
  },
  {
    id: 'commands',
    name: 'Command Crafter',
    icon: '🛠️',
    description: 'Create powerful custom slash commands',
    color: '#3b82f6'
  },
  {
    id: 'skills',
    name: 'Skill Weaver',
    icon: '✨',
    description: 'Build and deploy reusable skills',
    color: '#8b5cf6'
  },
  {
    id: 'agents',
    name: 'Agent Architect',
    icon: '🤖',
    description: 'Design and configure custom AI agents',
    color: '#ec4899'
  },
  {
    id: 'hooks',
    name: 'Hook Master',
    icon: '🎣',
    description: 'Automate with lifecycle hooks',
    color: '#f59e0b'
  },
  {
    id: 'integrations',
    name: 'Integrator',
    icon: '🔌',
    description: 'Connect MCP servers and external tools',
    color: '#06b6d4'
  },
  {
    id: 'workflow',
    name: 'Workflow Wizard',
    icon: '🔄',
    description: 'Optimize your development workflow',
    color: '#84cc16'
  },
  {
    id: 'milestones',
    name: 'Champion',
    icon: '👑',
    description: 'Legendary meta-achievements',
    color: '#eab308'
  }
];

export const achievements: Achievement[] = [
  // Memory achievements (1-12)
  { id: "first_memory", name: "First Memory", description: "Create any CLAUDE.md file", category: "memory", xp: 50, hint: "Create a CLAUDE.md file in your project or ~/.claude/" },
  { id: "personal_scribe", name: "Personal Scribe", description: "Create user-level ~/.claude/CLAUDE.md", category: "memory", xp: 75, hint: "Create ~/.claude/CLAUDE.md for global preferences" },
  { id: "project_memory", name: "Project Memory", description: "Create project CLAUDE.md", category: "memory", xp: 75, hint: "Add CLAUDE.md to your project root" },
  { id: "dual_wielder", name: "Dual Wielder", description: "Have both user and project CLAUDE.md files", category: "memory", xp: 100, hint: "Combine global and project-specific memory" },
  { id: "well_organized", name: "Well Organized", description: "Use markdown headers (##) in CLAUDE.md", category: "memory", xp: 50, hint: "Structure your CLAUDE.md with ## sections" },
  { id: "the_archivist", name: "The Archivist", description: "Create CLAUDE.md with 5+ sections", category: "memory", xp: 100, hint: "Add 5 or more ## sections to organize your instructions" },
  { id: "code_keeper", name: "Code Keeper", description: "Include code block in memory file", category: "memory", xp: 75, hint: "Add a code example with ``` in CLAUDE.md" },
  { id: "rule_maker", name: "Rule Maker", description: "Create a .claude/rules/*.md file", category: "memory", xp: 100, hint: "Create modular rules in .claude/rules/ directory" },
  { id: "modular_mind", name: "Modular Mind", description: "Organize rules into multiple files", category: "memory", xp: 125, hint: "Create 3+ rule files for better organization" },
  { id: "importer", name: "Importer", description: "Use @import syntax in CLAUDE.md", category: "memory", xp: 125, hint: "Import other files with @import directive" },
  { id: "link_collector", name: "Link Collector", description: "Reference external docs in memory", category: "memory", xp: 75, hint: "Add URLs to external documentation" },
  { id: "memory_curator", name: "Memory Curator", description: "Update memory based on learnings", category: "memory", xp: 100, hint: "Ask Claude to remember something for next time" },

  // Commands achievements (13-24)
  { id: "first_command", name: "First Command", description: "Create a custom command", category: "commands", xp: 50, hint: "Create a .md file in ~/.claude/commands/" },
  { id: "namespace_user", name: "Namespace User", description: "Create command in subdirectory", category: "commands", xp: 75, hint: "Organize commands in subdirectories like commands/git/" },
  { id: "parameterized", name: "Parameterized", description: "Use $ARGUMENTS in command", category: "commands", xp: 100, hint: "Add $ARGUMENTS to accept user input" },
  { id: "multi_param", name: "Multi Param", description: "Use $1, $2, $3 placeholders", category: "commands", xp: 100, hint: "Use numbered placeholders for multiple arguments" },
  { id: "documented", name: "Documented", description: "Add description frontmatter to command", category: "commands", xp: 50, hint: "Add description: in YAML frontmatter" },
  { id: "tool_restrictor", name: "Tool Restrictor", description: "Use allowed-tools in command", category: "commands", xp: 100, hint: "Limit which tools a command can use" },
  { id: "model_picker", name: "Model Picker", description: "Specify model in command", category: "commands", xp: 100, hint: "Add model: to specify which Claude model to use" },
  { id: "team_commands", name: "Team Commands", description: "Create project-level command", category: "commands", xp: 75, hint: "Add commands to .claude/commands/ in your project" },
  { id: "prompt_engineer", name: "Prompt Engineer", description: "Command with detailed instructions (500+ chars)", category: "commands", xp: 100, hint: "Write a comprehensive command prompt" },
  { id: "bash_integrator", name: "Bash Integrator", description: "Command that runs shell scripts", category: "commands", xp: 100, hint: "Include bash code blocks in your command" },
  { id: "file_reader", name: "File Reader", description: "Command that reads context files", category: "commands", xp: 75, hint: "Have your command read specific files for context" },
  { id: "workflow_builder", name: "Workflow Builder", description: "Command with multi-step workflow", category: "commands", xp: 125, hint: "Create a command with numbered steps" },

  // Skills achievements (25-34)
  { id: "skill_unlocked", name: "Skill Unlocked", description: "Create your first skill", category: "skills", xp: 100, hint: "Create SKILL.md in ~/.claude/skills/your-skill/" },
  { id: "progressive_loader", name: "Progressive Loader", description: "Skill with supporting files", category: "skills", xp: 100, hint: "Add additional files alongside SKILL.md" },
  { id: "reference_writer", name: "Reference Writer", description: "Create reference.md in skill", category: "skills", xp: 75, hint: "Add reference.md for detailed documentation" },
  { id: "example_provider", name: "Example Provider", description: "Create examples.md in skill", category: "skills", xp: 75, hint: "Add examples.md with usage examples" },
  { id: "scripted_skill", name: "Scripted Skill", description: "Add scripts/ directory to a skill", category: "skills", xp: 125, hint: "Add helper scripts in scripts/ subdirectory" },
  { id: "restricted_skill", name: "Restricted Skill", description: "Use allowed-tools in skill", category: "skills", xp: 100, hint: "Limit which tools the skill can use" },
  { id: "triggered_skill", name: "Triggered Skill", description: "Define custom trigger conditions", category: "skills", xp: 100, hint: "Add trigger conditions to auto-activate skill" },
  { id: "team_skill", name: "Team Skill", description: "Create project-level skill", category: "skills", xp: 100, hint: "Add skills to .claude/skills/ in your project" },
  { id: "full_stack_skill", name: "Full Stack Skill", description: "Skill with reference, scripts, and examples", category: "skills", xp: 150, hint: "Create a complete skill with all supporting files" },
  { id: "skill_documenter", name: "Skill Documenter", description: "Skill with comprehensive README", category: "skills", xp: 100, hint: "Add README.md to document your skill" },

  // Agents achievements (35-44)
  { id: "agent_creator", name: "Agent Creator", description: "Define a custom agent", category: "agents", xp: 100, hint: "Create a .md file in ~/.claude/agents/" },
  { id: "model_override", name: "Model Override", description: "Specify model in agent", category: "agents", xp: 100, hint: "Add model: to specify the agent's model" },
  { id: "color_coder", name: "Color Coder", description: "Add custom color to agent", category: "agents", xp: 75, hint: "Add color: to customize agent appearance" },
  { id: "capability_definer", name: "Capability Definer", description: "Detail agent capabilities", category: "agents", xp: 100, hint: "Add capabilities: to describe what agent can do" },
  { id: "tool_selector", name: "Tool Selector", description: "Define agent's allowed tools", category: "agents", xp: 100, hint: "Limit which tools the agent can use" },
  { id: "team_agent", name: "Team Agent", description: "Create project-level agent", category: "agents", xp: 100, hint: "Add agents to .claude/agents/ in your project" },
  { id: "specialist", name: "Specialist", description: "Agent with narrow, focused purpose", category: "agents", xp: 100, hint: "Create an agent for a specific domain" },
  { id: "generalist", name: "Generalist", description: "Agent with broad capabilities", category: "agents", xp: 100, hint: "Create a versatile multi-purpose agent" },
  { id: "prompt_crafter", name: "Prompt Crafter", description: "Agent with rich system prompt (1000+ chars)", category: "agents", xp: 100, hint: "Write a detailed agent system prompt" },
  { id: "agent_documenter", name: "Agent Documenter", description: "Agent with good description", category: "agents", xp: 75, hint: "Add description: to explain the agent" },

  // Hooks achievements (45-54)
  { id: "hooked", name: "Hooked", description: "Configure your first hook", category: "hooks", xp: 100, hint: "Add hooks: to settings.json" },
  { id: "pre_tool_hook", name: "Pre-Tool Hook", description: "Set up PreToolUse hook", category: "hooks", xp: 100, hint: "Run code before tool execution" },
  { id: "post_tool_hook", name: "Post-Tool Hook", description: "Set up PostToolUse hook", category: "hooks", xp: 100, hint: "Run code after tool execution" },
  { id: "permission_hook", name: "Permission Hook", description: "Set up PermissionRequest hook", category: "hooks", xp: 100, hint: "Handle permission requests programmatically" },
  { id: "notification_hook", name: "Notification Hook", description: "Custom notification handler", category: "hooks", xp: 100, hint: "Customize how notifications are handled" },
  { id: "session_hook", name: "Session Hook", description: "SessionStart or SessionEnd hook", category: "hooks", xp: 100, hint: "Run code when sessions start or end" },
  { id: "stop_hook", name: "Stop Hook", description: "Configure Stop event hook", category: "hooks", xp: 100, hint: "Handle stop events" },
  { id: "tool_matcher", name: "Tool Matcher", description: "Hook that targets specific tools", category: "hooks", xp: 100, hint: "Use matcher to target specific tools" },
  { id: "safety_net", name: "Safety Net", description: "Hook that prevents dangerous operations", category: "hooks", xp: 125, hint: "Create a hook that blocks risky operations" },
  { id: "hook_chainer", name: "Hook Chainer", description: "Multiple hooks on same event", category: "hooks", xp: 100, hint: "Configure multiple hooks for one event type" },

  // Integrations achievements (55-68)
  { id: "first_server", name: "First Server", description: "Configure an MCP server", category: "integrations", xp: 100, hint: "Add mcpServers to settings.json or .mcp.json" },
  { id: "project_mcp", name: "Project MCP", description: "Use project-level .mcp.json", category: "integrations", xp: 100, hint: "Create .mcp.json in your project root" },
  { id: "plugin_pioneer", name: "Plugin Pioneer", description: "Enable a plugin", category: "integrations", xp: 50, hint: "Enable a plugin in enabledPlugins" },
  { id: "resource_user", name: "Resource User", description: "Reference MCP resource with @", category: "integrations", xp: 100, hint: "Use @ to reference MCP resources" },
  { id: "prompt_importer", name: "Prompt Importer", description: "Use MCP-provided prompts", category: "integrations", xp: 100, hint: "Use prompts provided by MCP servers" },
  { id: "status_designer", name: "Status Designer", description: "Configure custom status line", category: "integrations", xp: 125, hint: "Add statusLine to settings.json" },
  { id: "ide_integrated", name: "IDE Integrated", description: "Use from VS Code or JetBrains", category: "integrations", xp: 100, hint: "Use Claude Code from your IDE" },
  { id: "github_connected", name: "GitHub Connected", description: "Install GitHub app", category: "integrations", xp: 125, hint: "Connect the GitHub integration" },
  { id: "oauth_authenticator", name: "OAuth Authenticator", description: "Use OAuth with MCP server", category: "integrations", xp: 125, hint: "Configure OAuth for an MCP server" },
  { id: "stdio_server", name: "Stdio Server", description: "Configure stdio MCP server", category: "integrations", xp: 100, hint: "Add a stdio-based MCP server" },
  { id: "http_server", name: "HTTP Server", description: "Configure HTTP/SSE MCP server", category: "integrations", xp: 100, hint: "Add an HTTP or SSE MCP server" },
  { id: "database_connected", name: "Database Connected", description: "Connect to database MCP server", category: "integrations", xp: 125, hint: "Connect to a database via MCP" },
  { id: "ai_provider", name: "AI Provider", description: "Configure AI-related MCP server", category: "integrations", xp: 125, hint: "Add an AI provider MCP server" },
  { id: "custom_server", name: "Custom Server", description: "Build your own MCP server", category: "integrations", xp: 200, hint: "Create your own MCP server implementation" },

  // Workflow achievements (69-80)
  { id: "git_ready", name: "Git Ready", description: "Use Claude in git repo", category: "workflow", xp: 25, hint: "Run Claude Code in a git repository" },
  { id: "plan_mode", name: "Plan Mode", description: "Enter plan mode", category: "workflow", xp: 50, hint: "Use Shift+Tab or /plan to enter plan mode" },
  { id: "plan_creator", name: "Plan Creator", description: "Create a plan file", category: "workflow", xp: 75, hint: "Create a plan file during planning" },
  { id: "permission_config", name: "Permission Config", description: "Configure default permissions", category: "workflow", xp: 75, hint: "Add permissions to settings.json" },
  { id: "bypass_mode", name: "Bypass Mode", description: "Use bypassPermissions setting", category: "workflow", xp: 100, hint: "Enable bypassPermissions for faster workflow" },
  { id: "vim_mode", name: "Vim Mode", description: "Enable vim mode", category: "workflow", xp: 75, hint: "Set vimMode: true in settings" },
  { id: "output_styler", name: "Output Styler", description: "Change output style", category: "workflow", xp: 50, hint: "Customize outputStyle in settings" },
  { id: "context_watcher", name: "Context Watcher", description: "Use /context command", category: "workflow", xp: 50, hint: "Run /context to see context usage" },
  { id: "cost_tracker", name: "Cost Tracker", description: "Use /cost command", category: "workflow", xp: 50, hint: "Run /cost to see session costs" },
  { id: "session_namer", name: "Session Namer", description: "Name a session", category: "workflow", xp: 75, hint: "Use --name flag or /name command" },
  { id: "rewinder", name: "Rewinder", description: "Use /rewind to go back", category: "workflow", xp: 100, hint: "Use /rewind to undo changes" },
  { id: "background_task", name: "Background Task", description: "Run command in background", category: "workflow", xp: 100, hint: "Run Claude in background or headless mode" },

  // Milestones achievements (81-90)
  { id: "day_one", name: "Day One", description: "Complete first quest scan", category: "milestones", xp: 25, hint: "Run /quest scan for the first time" },
  { id: "getting_started", name: "Getting Started", description: "Unlock 10 achievements", category: "milestones", xp: 50, hint: "Unlock any 10 achievements" },
  { id: "adventurer", name: "Adventurer", description: "Unlock 25 achievements", category: "milestones", xp: 100, hint: "Keep exploring Claude Code features" },
  { id: "explorer", name: "Explorer", description: "Unlock 50 achievements", category: "milestones", xp: 200, hint: "You're halfway to mastery!" },
  { id: "veteran", name: "Veteran", description: "Unlock 75 achievements", category: "milestones", xp: 350, hint: "Almost a complete master" },
  { id: "questmaster", name: "Questmaster", description: "Unlock ALL achievements", category: "milestones", xp: 500, hint: "Unlock all 90 achievements" },
  { id: "week_warrior", name: "Week Warrior", description: "7-day usage streak", category: "milestones", xp: 150, hint: "Use Claude Code for 7 consecutive days" },
  { id: "monthly_master", name: "Monthly Master", description: "30-day usage streak", category: "milestones", xp: 300, hint: "Use Claude Code for 30 consecutive days" },
  { id: "early_adopter", name: "Early Adopter", description: "Install Claude Quest in 2025", category: "milestones", xp: 100, hint: "Install before 2026" },
  { id: "evangelist", name: "Evangelist", description: "Share quest progress", category: "milestones", xp: 100, hint: "Share your progress with others" }
];

// Helper functions
export const getTotalXP = (): number => {
  return achievements.reduce((sum, a) => sum + a.xp, 0);
};

export const getAchievementsByCategory = (category: Category): Achievement[] => {
  return achievements.filter(a => a.category === category);
};

export const getCategoryInfo = (category: Category): CategoryInfo | undefined => {
  return categories.find(c => c.id === category);
};

export const getAchievementById = (id: string): Achievement | undefined => {
  return achievements.find(a => a.id === id);
};

export const getAchievementIndex = (id: string): number => {
  return achievements.findIndex(a => a.id === id) + 1; // 1-indexed for CLI
};

export const getAchievementByIndex = (index: number): Achievement | undefined => {
  return achievements[index - 1]; // Convert from 1-indexed
};

export const getCategoryAchievementCount = (category: Category): number => {
  return achievements.filter(a => a.category === category).length;
};

export const getCategoryTotalXP = (category: Category): number => {
  return achievements.filter(a => a.category === category).reduce((sum, a) => sum + a.xp, 0);
};

export const GITHUB_URL = 'https://github.com/SeanZoR/claude-quest';
export const WEB_URL = 'https://seanzor.github.io/claude-quest';
export const INSTALL_COMMAND = 'curl -sSL https://raw.githubusercontent.com/SeanZoR/claude-quest/main/install.sh | bash';
