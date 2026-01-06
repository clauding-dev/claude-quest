var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../skills/claude-quest/data/achievements.json
var achievements_default = {
  version: "2.0.0",
  total_achievements: 365,
  categories: [
    "memory",
    "commands",
    "skills",
    "agents",
    "hooks",
    "integrations",
    "workflow",
    "milestones",
    "automation",
    "collaboration",
    "performance",
    "security",
    "ai-mastery",
    "customization",
    "testing",
    "documentation",
    "secrets"
  ],
  achievements: [
    {
      id: "code_keeper",
      name: "Code Keeper",
      description: "Include code block in memory file",
      category: "memory",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "```"
      }
    },
    {
      id: "conditional_memory",
      name: "Conditional Memory",
      description: "Use conditional blocks (if/when) in CLAUDE.md",
      category: "memory",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "(When|If|Only when|Unless).*:"
      }
    },
    {
      id: "deep_hierarchy",
      name: "Deep Hierarchy",
      description: "Use nested headers (### or deeper) in CLAUDE.md",
      category: "memory",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "^###\\s+"
      }
    },
    {
      id: "dual_wielder",
      name: "Dual Wielder",
      description: "Have both user and project CLAUDE.md files",
      category: "memory",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        require_all: true
      }
    },
    {
      id: "environment_detector",
      name: "Environment Detector",
      description: "Include platform-specific instructions",
      category: "memory",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "(macOS|Linux|Windows|darwin|linux|win32|platform)"
      }
    },
    {
      id: "first_memory",
      name: "First Memory",
      description: "Create any CLAUDE.md file",
      category: "memory",
      xp: 50,
      rarity: "common",
      detection: {
        type: "file_exists",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ]
      }
    },
    {
      id: "forbidden_patterns",
      name: "Forbidden Patterns",
      description: "Document anti-patterns or things to avoid",
      category: "memory",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "(DON'T|NEVER|AVOID|DO NOT|forbidden|prohibited|anti-pattern)"
      }
    },
    {
      id: "importer",
      name: "Importer",
      description: "Use @import syntax in CLAUDE.md",
      category: "memory",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "@import\\s+"
      }
    },
    {
      id: "link_collector",
      name: "Link Collector",
      description: "Reference external docs in memory",
      category: "memory",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "https?://"
      }
    },
    {
      id: "list_builder",
      name: "List Builder",
      description: "Create structured lists with 10+ items in CLAUDE.md",
      category: "memory",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "^\\s*[-*]\\s+",
        min_matches: 10
      }
    },
    {
      id: "memory_archaeologist",
      name: "Memory Archaeologist",
      description: "Reference old conversations in CLAUDE.md",
      category: "memory",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User documents learnings from past sessions"
      }
    },
    {
      id: "memory_curator",
      name: "Memory Curator",
      description: "Update memory based on learnings",
      category: "memory",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "Claude detects user asking to remember something or update CLAUDE.md"
      }
    },
    {
      id: "modular_mind",
      name: "Modular Mind",
      description: "Organize rules into multiple files",
      category: "memory",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/rules",
          "./.claude/rules"
        ],
        pattern: "*.md",
        min_count: 3
      }
    },
    {
      id: "multi_import",
      name: "Multi Import",
      description: "Use @import to include 3+ external files",
      category: "memory",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "@import\\s+",
        min_matches: 3
      }
    },
    {
      id: "personal_scribe",
      name: "Personal Scribe",
      description: "Create user-level ~/.claude/CLAUDE.md",
      category: "memory",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_exists",
        path: "~/.claude/CLAUDE.md"
      }
    },
    {
      id: "preference_keeper",
      name: "Preference Keeper",
      description: "Document personal coding preferences or style guide",
      category: "memory",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "(prefer|always use|style|convention|standard)"
      }
    },
    {
      id: "project_memory",
      name: "Project Memory",
      description: "Create project CLAUDE.md",
      category: "memory",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_exists",
        path: "./CLAUDE.md"
      }
    },
    {
      id: "rule_library",
      name: "Rule Library",
      description: "Create 5+ rule files in .claude/rules/",
      category: "memory",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/rules",
          "./.claude/rules"
        ],
        pattern: "*.md",
        min_count: 5
      }
    },
    {
      id: "rule_maker",
      name: "Rule Maker",
      description: "Create a .claude/rules/*.md file",
      category: "memory",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/rules",
          "./.claude/rules"
        ],
        pattern: "*.md",
        min_count: 1
      }
    },
    {
      id: "template_master",
      name: "Template Master",
      description: "Use template variables like {{variable}} in CLAUDE.md",
      category: "memory",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "\\{\\{[a-zA-Z_][a-zA-Z0-9_]*\\}\\}"
      }
    },
    {
      id: "the_archivist",
      name: "The Archivist",
      description: "Create CLAUDE.md with 5+ sections",
      category: "memory",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "^##\\s+",
        min_matches: 5
      }
    },
    {
      id: "well_organized",
      name: "Well Organized",
      description: "Use markdown headers (##) in CLAUDE.md",
      category: "memory",
      xp: 50,
      rarity: "common",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "^##\\s+"
      }
    },
    {
      id: "bash_integrator",
      name: "Bash Integrator",
      description: "Command that runs shell scripts",
      category: "commands",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "```(bash|sh|shell)"
      }
    },
    {
      id: "command_composer",
      name: "Command Composer",
      description: "Command that calls other slash commands",
      category: "commands",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "(run|call|invoke|execute).*(/[a-z]|slash command)"
      }
    },
    {
      id: "command_importer",
      name: "Command Importer",
      description: "Import community commands",
      category: "commands",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User imports commands from external source"
      }
    },
    {
      id: "command_library",
      name: "Command Library",
      description: "Create 10+ custom commands",
      category: "commands",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/commands",
          "./.claude/commands"
        ],
        pattern: "*.md",
        min_count: 10,
        recursive: true
      }
    },
    {
      id: "conditional_command",
      name: "Conditional Command",
      description: "Command with conditional logic (if/else/when)",
      category: "commands",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "(If\\s|When\\s|Otherwise|Else|depending on)"
      }
    },
    {
      id: "context_injector",
      name: "Context Injector",
      description: "Command that uses $FILE or $SELECTION variables",
      category: "commands",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "\\$(FILE|SELECTION|DIRECTORY|PROJECT)"
      }
    },
    {
      id: "documented",
      name: "Documented",
      description: "Add description frontmatter to command",
      category: "commands",
      xp: 50,
      rarity: "common",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "^---[\\s\\S]*description:"
      }
    },
    {
      id: "error_handler_cmd",
      name: "Error Handler",
      description: "Command that handles error cases explicitly",
      category: "commands",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "(error|fail|exception|if.*not|handle.*error|catch)"
      }
    },
    {
      id: "file_reader",
      name: "File Reader",
      description: "Command that reads context files",
      category: "commands",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "(Read|read|cat).*file"
      }
    },
    {
      id: "first_command",
      name: "First Command",
      description: "Create a custom command",
      category: "commands",
      xp: 50,
      rarity: "common",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/commands",
          "./.claude/commands"
        ],
        pattern: "*.md",
        min_count: 1
      }
    },
    {
      id: "interactive_command",
      name: "Interactive Command",
      description: "Command that asks follow-up questions",
      category: "commands",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "(ask|prompt|clarify|confirm|which|what would you)"
      }
    },
    {
      id: "mcp_command",
      name: "MCP Command",
      description: "Command that uses MCP server tools",
      category: "commands",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "(mcp|MCP|mcp__|use.*server|server tool)"
      }
    },
    {
      id: "model_picker",
      name: "Model Picker",
      description: "Specify model in command",
      category: "commands",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "model:"
      }
    },
    {
      id: "multi_param",
      name: "Multi Param",
      description: "Use $1, $2, $3 placeholders",
      category: "commands",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "\\$[123]"
      }
    },
    {
      id: "namespace_user",
      name: "Namespace User",
      description: "Create command in subdirectory",
      category: "commands",
      xp: 75,
      rarity: "common",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/commands/*",
          "./.claude/commands/*"
        ],
        pattern: "*.md",
        min_count: 1,
        recursive: true
      }
    },
    {
      id: "output_formatter",
      name: "Output Formatter",
      description: "Command that specifies output format",
      category: "commands",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "(output.*format|format.*as|return.*JSON|as a table|markdown format)"
      }
    },
    {
      id: "parameterized",
      name: "Parameterized",
      description: "Use $ARGUMENTS in command",
      category: "commands",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "\\$ARGUMENTS"
      }
    },
    {
      id: "prompt_engineer",
      name: "Prompt Engineer",
      description: "Command with detailed instructions (500+ chars)",
      category: "commands",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        min_length: 500
      }
    },
    {
      id: "team_commands",
      name: "Team Commands",
      description: "Create project-level command",
      category: "commands",
      xp: 75,
      rarity: "common",
      detection: {
        type: "directory_has_files",
        path: "./.claude/commands",
        pattern: "*.md",
        min_count: 1
      }
    },
    {
      id: "tool_restrictor",
      name: "Tool Restrictor",
      description: "Use allowed-tools in command",
      category: "commands",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "allowed-tools:"
      }
    },
    {
      id: "validation_command",
      name: "Validation Command",
      description: "Command that validates input or checks requirements",
      category: "commands",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "(validate|verify|check|ensure|must be|required)"
      }
    },
    {
      id: "workflow_builder",
      name: "Workflow Builder",
      description: "Command with multi-step workflow",
      category: "commands",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "(step|Step)\\s*[123456789]|1\\.|2\\.|3\\."
      }
    },
    {
      id: "data_skill",
      name: "Data Skill",
      description: "Skill with data/ directory for resources",
      category: "skills",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/skills/*/data",
          "./.claude/skills/*/data"
        ],
        pattern: "*",
        min_count: 1
      }
    },
    {
      id: "error_recovery_skill",
      name: "Error Recovery Skill",
      description: "Skill that defines error handling behavior",
      category: "skills",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/skills/*/SKILL.md",
          "./.claude/skills/*/SKILL.md"
        ],
        pattern: "(error|fail|exception|recover|fallback|retry)"
      }
    },
    {
      id: "example_provider",
      name: "Example Provider",
      description: "Create examples.md in skill",
      category: "skills",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_exists",
        paths: [
          "~/.claude/skills/*/examples.md",
          "./.claude/skills/*/examples.md"
        ]
      }
    },
    {
      id: "full_stack_skill",
      name: "Full Stack Skill",
      description: "Skill with reference, scripts, and examples",
      category: "skills",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_exists",
        paths: [
          "~/.claude/skills/*/reference.md",
          "~/.claude/skills/*/scripts/*",
          "~/.claude/skills/*/examples.md"
        ],
        require_all: true
      }
    },
    {
      id: "multi_command_skill",
      name: "Multi-Command Skill",
      description: "Skill that exposes multiple slash commands",
      category: "skills",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/skills/*/commands",
          "./.claude/skills/*/commands"
        ],
        pattern: "*.md",
        min_count: 2
      }
    },
    {
      id: "progressive_loader",
      name: "Progressive Loader",
      description: "Skill with supporting files",
      category: "skills",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/skills/*",
          "./.claude/skills/*"
        ],
        pattern: "*",
        min_count: 3
      }
    },
    {
      id: "published_skill",
      name: "Published Skill",
      description: "Skill with LICENSE file (ready for sharing)",
      category: "skills",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_exists",
        paths: [
          "~/.claude/skills/*/LICENSE",
          "./.claude/skills/*/LICENSE"
        ]
      }
    },
    {
      id: "reference_writer",
      name: "Reference Writer",
      description: "Create reference.md in skill",
      category: "skills",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_exists",
        paths: [
          "~/.claude/skills/*/reference.md",
          "./.claude/skills/*/reference.md"
        ]
      }
    },
    {
      id: "restricted_skill",
      name: "Restricted Skill",
      description: "Use allowed-tools in skill",
      category: "skills",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/skills/*/SKILL.md",
          "./.claude/skills/*/SKILL.md"
        ],
        pattern: "allowed-tools:"
      }
    },
    {
      id: "scripted_skill",
      name: "Scripted Skill",
      description: "Add scripts/ directory to a skill",
      category: "skills",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/skills/*/scripts",
          "./.claude/skills/*/scripts"
        ],
        pattern: "*",
        min_count: 1
      }
    },
    {
      id: "skill_chain",
      name: "Skill Chain",
      description: "Skill that references or calls another skill",
      category: "skills",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/skills/*/SKILL.md",
          "./.claude/skills/*/SKILL.md"
        ],
        pattern: "(/[a-z]+[-a-z]*:|invoke.*skill|use.*skill|chain.*to)"
      }
    },
    {
      id: "skill_documenter",
      name: "Skill Documenter",
      description: "Skill with comprehensive README",
      category: "skills",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "~/.claude/skills/*/README.md",
          "./.claude/skills/*/README.md"
        ]
      }
    },
    {
      id: "skill_forker",
      name: "Skill Forker",
      description: "Fork and modify an existing skill",
      category: "skills",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User forks and customizes a skill"
      }
    },
    {
      id: "skill_installer",
      name: "Skill Installer",
      description: "Install a community skill",
      category: "skills",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User installs third-party skill"
      }
    },
    {
      id: "skill_portfolio",
      name: "Skill Portfolio",
      description: "Create 5+ skills",
      category: "skills",
      xp: 250,
      rarity: "epic",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/skills",
          "./.claude/skills"
        ],
        pattern: "*/SKILL.md",
        min_count: 5
      }
    },
    {
      id: "skill_publisher",
      name: "Skill Publisher",
      description: "Share a skill with the community",
      category: "skills",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User publishes skill to GitHub or registry"
      }
    },
    {
      id: "skill_unlocked",
      name: "Skill Unlocked",
      description: "Create your first skill",
      category: "skills",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/skills/*",
          "./.claude/skills/*"
        ],
        pattern: "SKILL.md",
        min_count: 1
      }
    },
    {
      id: "skill_updater",
      name: "Skill Updater",
      description: "Update a skill to newer version",
      category: "skills",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User updates installed skill"
      }
    },
    {
      id: "team_skill",
      name: "Team Skill",
      description: "Create project-level skill",
      category: "skills",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        path: "./.claude/skills",
        pattern: "*/SKILL.md",
        min_count: 1
      }
    },
    {
      id: "templated_skill",
      name: "Templated Skill",
      description: "Skill with templates/ directory",
      category: "skills",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/skills/*/templates",
          "./.claude/skills/*/templates"
        ],
        pattern: "*",
        min_count: 1
      }
    },
    {
      id: "triggered_skill",
      name: "Triggered Skill",
      description: "Define custom trigger conditions",
      category: "skills",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/skills/*/SKILL.md",
          "./.claude/skills/*/SKILL.md"
        ],
        pattern: "(trigger|Trigger):"
      }
    },
    {
      id: "versioned_skill",
      name: "Versioned Skill",
      description: "Skill with version number in SKILL.md",
      category: "skills",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/skills/*/SKILL.md",
          "./.claude/skills/*/SKILL.md"
        ],
        pattern: "(version|Version):\\s*[0-9]+\\.[0-9]+"
      }
    },
    {
      id: "agent_army",
      name: "Agent Army",
      description: "Create 5+ different agents",
      category: "agents",
      xp: 250,
      rarity: "epic",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/agents",
          "./.claude/agents"
        ],
        pattern: "*.md",
        min_count: 5
      }
    },
    {
      id: "agent_creator",
      name: "Agent Creator",
      description: "Define a custom agent",
      category: "agents",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/agents",
          "./.claude/agents"
        ],
        pattern: "*.md",
        min_count: 1
      }
    },
    {
      id: "agent_delegator",
      name: "Agent Delegator",
      description: "Successfully delegate task to custom agent",
      category: "agents",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User uses Task tool to spawn custom agent"
      }
    },
    {
      id: "agent_documenter",
      name: "Agent Documenter",
      description: "Agent with good description",
      category: "agents",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/agents/*.md",
          "./.claude/agents/*.md"
        ],
        pattern: "description:"
      }
    },
    {
      id: "agent_orchestrator",
      name: "Agent Orchestrator",
      description: "Reference another agent in agent prompt",
      category: "agents",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/agents/*.md",
          "./.claude/agents/*.md"
        ],
        pattern: "@agent|invoke.*agent|call.*agent|delegate"
      }
    },
    {
      id: "agent_reviewer",
      name: "Agent Reviewer",
      description: "Use agent for code review",
      category: "agents",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User spawns agent specifically for code review"
      }
    },
    {
      id: "budget_optimizer",
      name: "Budget Optimizer",
      description: "Create agent using Haiku for cost efficiency",
      category: "agents",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/agents/*.md",
          "./.claude/agents/*.md"
        ],
        pattern: "haiku"
      }
    },
    {
      id: "capability_definer",
      name: "Capability Definer",
      description: "Detail agent capabilities",
      category: "agents",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/agents/*.md",
          "./.claude/agents/*.md"
        ],
        pattern: "(capabilities|Capabilities):"
      }
    },
    {
      id: "color_coder",
      name: "Color Coder",
      description: "Add custom color to agent",
      category: "agents",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/agents/*.md",
          "./.claude/agents/*.md"
        ],
        pattern: "color:"
      }
    },
    {
      id: "docs_agent",
      name: "Docs Agent",
      description: "Create agent for documentation tasks",
      category: "agents",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/agents/*.md",
          "./.claude/agents/*.md"
        ],
        pattern: "(documentation|README|docstring|JSDoc|API docs|wiki)"
      }
    },
    {
      id: "generalist",
      name: "Generalist",
      description: "Agent with broad capabilities",
      category: "agents",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "Claude detects agent with multiple diverse capabilities"
      }
    },
    {
      id: "model_mixer",
      name: "Model Mixer",
      description: "Create agents using different Claude models",
      category: "agents",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "Claude detects multiple agents with different model specifications (e.g., opus, sonnet, haiku)"
      }
    },
    {
      id: "model_override",
      name: "Model Override",
      description: "Specify model in agent",
      category: "agents",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/agents/*.md",
          "./.claude/agents/*.md"
        ],
        pattern: "model:"
      }
    },
    {
      id: "multi_agent_fleet",
      name: "Multi-Agent Fleet",
      description: "Create 3+ different agents",
      category: "agents",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/agents",
          "./.claude/agents"
        ],
        pattern: "*.md",
        min_count: 3
      }
    },
    {
      id: "power_agent",
      name: "Power Agent",
      description: "Create agent using Opus for maximum capability",
      category: "agents",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/agents/*.md",
          "./.claude/agents/*.md"
        ],
        pattern: "opus"
      }
    },
    {
      id: "prompt_crafter",
      name: "Prompt Crafter",
      description: "Agent with rich system prompt (1000+ chars)",
      category: "agents",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/agents/*.md",
          "./.claude/agents/*.md"
        ],
        min_length: 1e3
      }
    },
    {
      id: "sandboxed_agent",
      name: "Sandboxed Agent",
      description: "Create agent with restricted tool access for safety",
      category: "agents",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/agents/*.md",
          "./.claude/agents/*.md"
        ],
        pattern: "allowed-tools:.*\\n.*-\\s*(Read|Glob|Grep)"
      }
    },
    {
      id: "security_agent",
      name: "Security Agent",
      description: "Create agent focused on security tasks",
      category: "agents",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/agents/*.md",
          "./.claude/agents/*.md"
        ],
        pattern: "(security|vulnerabilit|audit|penetration|CVE|OWASP)"
      }
    },
    {
      id: "specialist",
      name: "Specialist",
      description: "Agent with narrow, focused purpose",
      category: "agents",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "Claude detects agent with specific domain focus (security, testing, docs, etc.)"
      }
    },
    {
      id: "team_agent",
      name: "Team Agent",
      description: "Create project-level agent",
      category: "agents",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        path: "./.claude/agents",
        pattern: "*.md",
        min_count: 1
      }
    },
    {
      id: "test_agent",
      name: "Test Agent",
      description: "Create agent specialized for testing",
      category: "agents",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/agents/*.md",
          "./.claude/agents/*.md"
        ],
        pattern: "(test|spec|assert|coverage|TDD|BDD|QA)"
      }
    },
    {
      id: "tool_selector",
      name: "Tool Selector",
      description: "Define agent's allowed tools",
      category: "agents",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/agents/*.md",
          "./.claude/agents/*.md"
        ],
        pattern: "allowed-tools:"
      }
    },
    {
      id: "bash_hook",
      name: "Bash Hook",
      description: "Create hook that watches Bash tool specifically",
      category: "hooks",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: '"matcher".*[Bb]ash'
      }
    },
    {
      id: "conditional_hook",
      name: "Conditional Hook",
      description: "Hook with conditional logic based on environment",
      category: "hooks",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "(if|else|when|condition|\\$\\{|env\\.|ENV)"
      }
    },
    {
      id: "file_guardian",
      name: "File Guardian",
      description: "Hook that protects certain files from modification",
      category: "hooks",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "(protect|guard|deny.*Write|block.*Edit|forbidden)"
      }
    },
    {
      id: "hook_chainer",
      name: "Hook Chainer",
      description: "Multiple hooks on same event",
      category: "hooks",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "Claude detects multiple hooks configured for same event type"
      }
    },
    {
      id: "hook_debugger",
      name: "Hook Debugger",
      description: "Debug a misbehaving hook",
      category: "hooks",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User troubleshoots hook issues"
      }
    },
    {
      id: "hook_optimizer",
      name: "Hook Optimizer",
      description: "Optimize hook for performance",
      category: "hooks",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User improves hook efficiency"
      }
    },
    {
      id: "hook_scripter",
      name: "Hook Scripter",
      description: "Create hook that runs an external script",
      category: "hooks",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: '"command".*\\.(sh|py|js|ts|rb)|\\.sh"|bash\\s+-c'
      }
    },
    {
      id: "hooked",
      name: "Hooked",
      description: "Configure your first hook",
      category: "hooks",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        key: "hooks"
      }
    },
    {
      id: "logging_hook",
      name: "Logging Hook",
      description: "Create hook that logs tool usage",
      category: "hooks",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "(log|logger|logging|audit)"
      }
    },
    {
      id: "metrics_collector",
      name: "Metrics Collector",
      description: "Hook that tracks and stores metrics",
      category: "hooks",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "(metric|stats|counter|duration|timing)"
      }
    },
    {
      id: "notification_hook",
      name: "Notification Hook",
      description: "Custom notification handler",
      category: "hooks",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "Notification"
      }
    },
    {
      id: "notification_system",
      name: "Notification System",
      description: "Hook that sends desktop or external notifications",
      category: "hooks",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "(notify|notification|terminal-notifier|osascript|ntfy|pushover|slack|webhook)"
      }
    },
    {
      id: "permission_hook",
      name: "Permission Hook",
      description: "Set up PermissionRequest hook",
      category: "hooks",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "PermissionRequest"
      }
    },
    {
      id: "post_tool_hook",
      name: "Post-Tool Hook",
      description: "Set up PostToolUse hook",
      category: "hooks",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "PostToolUse"
      }
    },
    {
      id: "pre_commit_hook",
      name: "Pre-Commit Hook",
      description: "Set up hook triggered before commits",
      category: "hooks",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "(pre-commit|git.*commit)"
      }
    },
    {
      id: "pre_tool_hook",
      name: "Pre-Tool Hook",
      description: "Set up PreToolUse hook",
      category: "hooks",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "PreToolUse"
      }
    },
    {
      id: "safety_net",
      name: "Safety Net",
      description: "Hook that prevents dangerous operations",
      category: "hooks",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "(block|deny|prevent|reject)"
      }
    },
    {
      id: "session_hook",
      name: "Session Hook",
      description: "SessionStart or SessionEnd hook",
      category: "hooks",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "Session(Start|End)"
      }
    },
    {
      id: "stop_hook",
      name: "Stop Hook",
      description: "Configure Stop event hook",
      category: "hooks",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: '"Stop"'
      }
    },
    {
      id: "tool_matcher",
      name: "Tool Matcher",
      description: "Hook that targets specific tools",
      category: "hooks",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: '"matcher":'
      }
    },
    {
      id: "transformation_hook",
      name: "Transformation Hook",
      description: "Hook that transforms tool input or output",
      category: "hooks",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "(transform|modify|rewrite|convert)"
      }
    },
    {
      id: "validation_hook",
      name: "Validation Hook",
      description: "Create hook that validates input or output",
      category: "hooks",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "(validat|schema|lint|check|verify)"
      }
    },
    {
      id: "ai_provider",
      name: "AI Provider",
      description: "Configure AI-related MCP server",
      category: "integrations",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: "(openai|anthropic|gemini|ollama|llama|ai-|embedding)"
      }
    },
    {
      id: "aws_architect",
      name: "AWS Architect",
      description: "Work with AWS configurations",
      category: "integrations",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./serverless.yml",
          "./sam.yaml",
          "./.aws/**/*",
          "./cdk.json"
        ]
      }
    },
    {
      id: "browser_automator",
      name: "Browser Automator",
      description: "Configure Playwright or Puppeteer MCP server",
      category: "integrations",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: "(playwright|puppeteer|browser)"
      }
    },
    {
      id: "cloud_connected",
      name: "Cloud Connected",
      description: "Configure AWS, GCP, or Azure MCP server",
      category: "integrations",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: "(aws|amazon|gcp|google-cloud|azure|cloudflare)"
      }
    },
    {
      id: "custom_server",
      name: "Custom Server",
      description: "Build your own MCP server",
      category: "integrations",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "Claude detects user has created custom MCP server code"
      }
    },
    {
      id: "database_connected",
      name: "Database Connected",
      description: "Connect to database MCP server",
      category: "integrations",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: "(postgres|mysql|sqlite|mongodb|redis|database|db)"
      }
    },
    {
      id: "discord_linked",
      name: "Discord Linked",
      description: "Configure Discord MCP server",
      category: "integrations",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: "discord"
      }
    },
    {
      id: "docker_deployed",
      name: "Docker Deployed",
      description: "Configure Docker MCP server",
      category: "integrations",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: "docker"
      }
    },
    {
      id: "docker_developer",
      name: "Docker Developer",
      description: "Use Claude with Docker projects",
      category: "integrations",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./Dockerfile",
          "./docker-compose.yml",
          "./docker-compose.yaml"
        ]
      }
    },
    {
      id: "filesystem_explorer",
      name: "Filesystem Explorer",
      description: "Configure filesystem MCP server",
      category: "integrations",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: "(filesystem|@modelcontextprotocol/server-filesystem)"
      }
    },
    {
      id: "first_server",
      name: "First Server",
      description: "Configure an MCP server",
      category: "integrations",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        key: "mcpServers"
      }
    },
    {
      id: "github_connected",
      name: "GitHub Connected",
      description: "Install GitHub app",
      category: "integrations",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User has GitHub MCP server or mentions GitHub app installation"
      }
    },
    {
      id: "graphql_guru",
      name: "GraphQL Guru",
      description: "Work with GraphQL schemas",
      category: "integrations",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./**/*.graphql",
          "./**/*.gql",
          "./schema.graphql"
        ]
      }
    },
    {
      id: "http_server",
      name: "HTTP Server",
      description: "Configure HTTP/SSE MCP server",
      category: "integrations",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: '"type":\\s*"(http|sse)"|"url":'
      }
    },
    {
      id: "ide_integrated",
      name: "IDE Integrated",
      description: "Use from VS Code or JetBrains",
      category: "integrations",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "Claude detects IDE integration context in session"
      }
    },
    {
      id: "kubernetes_konfigurator",
      name: "Kubernetes Konfigurator",
      description: "Work with Kubernetes configs",
      category: "integrations",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_exists",
        paths: [
          "./k8s/**/*",
          "./**/deployment.yaml",
          "./**/service.yaml"
        ]
      }
    },
    {
      id: "linear_linked",
      name: "Linear Linked",
      description: "Configure Linear MCP server",
      category: "integrations",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: "linear"
      }
    },
    {
      id: "mcp_architect",
      name: "MCP Architect",
      description: "Configure 10+ MCP servers",
      category: "integrations",
      xp: 350,
      rarity: "epic",
      detection: {
        type: "config_count",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        key: "mcpServers",
        min_count: 10
      }
    },
    {
      id: "mcp_collector",
      name: "MCP Collector",
      description: "Configure 5+ MCP servers",
      category: "integrations",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "config_count",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        key: "mcpServers",
        min_count: 5
      }
    },
    {
      id: "notion_networked",
      name: "Notion Networked",
      description: "Configure Notion MCP server",
      category: "integrations",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: "notion"
      }
    },
    {
      id: "oauth_authenticator",
      name: "OAuth Authenticator",
      description: "Use OAuth with MCP server",
      category: "integrations",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: "oauth|OAuth|authorization"
      }
    },
    {
      id: "plugin_pioneer",
      name: "Plugin Pioneer",
      description: "Enable a plugin",
      category: "integrations",
      xp: 50,
      rarity: "common",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "enabledPlugins"
      }
    },
    {
      id: "project_mcp",
      name: "Project MCP",
      description: "Use project-level .mcp.json",
      category: "integrations",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        path: "./.mcp.json"
      }
    },
    {
      id: "prompt_importer",
      name: "Prompt Importer",
      description: "Use MCP-provided prompts",
      category: "integrations",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User invokes a prompt provided by an MCP server"
      }
    },
    {
      id: "resource_user",
      name: "Resource User",
      description: "Reference MCP resource with @",
      category: "integrations",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User references an MCP resource using @ syntax in conversation"
      }
    },
    {
      id: "search_savant",
      name: "Search Savant",
      description: "Configure web search MCP server",
      category: "integrations",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: "(brave|exa|tavily|search)"
      }
    },
    {
      id: "slack_integrated",
      name: "Slack Integrated",
      description: "Configure Slack MCP server",
      category: "integrations",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: "slack"
      }
    },
    {
      id: "status_designer",
      name: "Status Designer",
      description: "Configure custom status line",
      category: "integrations",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "statusLine"
      }
    },
    {
      id: "stdio_server",
      name: "Stdio Server",
      description: "Configure stdio MCP server",
      category: "integrations",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.mcp.json"
        ],
        pattern: '"type":\\s*"stdio"|"command":'
      }
    },
    {
      id: "terraform_tamer",
      name: "Terraform Tamer",
      description: "Use Claude with Terraform/IaC",
      category: "integrations",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_exists",
        paths: [
          "./**/*.tf",
          "./terraform/**/*"
        ]
      }
    },
    {
      id: "background_task",
      name: "Background Task",
      description: "Run command in background",
      category: "workflow",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User runs Claude in background or headless mode"
      }
    },
    {
      id: "bypass_mode",
      name: "Bypass Mode",
      description: "Use bypassPermissions setting",
      category: "workflow",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        key: "bypassPermissions"
      }
    },
    {
      id: "compact_mode",
      name: "Compact Mode",
      description: "Use /compact to summarize context",
      category: "workflow",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User invokes /compact command to summarize conversation"
      }
    },
    {
      id: "context_watcher",
      name: "Context Watcher",
      description: "Use /context command",
      category: "workflow",
      xp: 50,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User invokes /context command"
      }
    },
    {
      id: "cost_tracker",
      name: "Cost Tracker",
      description: "Use /cost command",
      category: "workflow",
      xp: 50,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User invokes /cost command"
      }
    },
    {
      id: "git_ready",
      name: "Git Ready",
      description: "Use Claude in git repo",
      category: "workflow",
      xp: 25,
      rarity: "common",
      detection: {
        type: "directory_exists",
        path: "./.git"
      }
    },
    {
      id: "history_navigator",
      name: "History Navigator",
      description: "Use /history to explore past sessions",
      category: "workflow",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User invokes /history command"
      }
    },
    {
      id: "local_override",
      name: "Local Override",
      description: "Use settings.local.json for personal preferences",
      category: "workflow",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        path: "./.claude/settings.local.json"
      }
    },
    {
      id: "mono_repo_master",
      name: "Mono Repo Master",
      description: "Work with monorepo structure",
      category: "workflow",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./packages/**/*",
          "./apps/**/*",
          "./lerna.json",
          "./pnpm-workspace.yaml"
        ]
      }
    },
    {
      id: "multi_project",
      name: "Multi-Project Master",
      description: "Use Claude across 5+ different projects",
      category: "workflow",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User has sessions in 5+ different directories"
      }
    },
    {
      id: "output_styler",
      name: "Output Styler",
      description: "Change output style",
      category: "workflow",
      xp: 50,
      rarity: "common",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "outputStyle"
      }
    },
    {
      id: "permission_config",
      name: "Permission Config",
      description: "Configure default permissions",
      category: "workflow",
      xp: 75,
      rarity: "common",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        key: "permissions"
      }
    },
    {
      id: "permission_sculptor",
      name: "Permission Sculptor",
      description: "Configure granular tool-specific permissions",
      category: "workflow",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: '"(allow|deny)":\\s*\\[.*mcp__'
      }
    },
    {
      id: "plan_creator",
      name: "Plan Creator",
      description: "Create a plan file",
      category: "workflow",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_exists",
        paths: [
          "./.claude/plans/*.md",
          "./plans/*.md",
          "./*plan*.md"
        ]
      }
    },
    {
      id: "plan_mode",
      name: "Plan Mode",
      description: "Enter plan mode",
      category: "workflow",
      xp: 50,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User invokes plan mode with /plan or shift+tab"
      }
    },
    {
      id: "plan_strategist",
      name: "Plan Strategist",
      description: "Create multiple plan files for different features",
      category: "workflow",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        paths: [
          "./.claude/plans",
          "./plans"
        ],
        pattern: "*.md",
        min_count: 3
      }
    },
    {
      id: "project_hopper",
      name: "Project Hopper",
      description: "Use /cd to switch between projects",
      category: "workflow",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User invokes /cd command to change directories"
      }
    },
    {
      id: "rewinder",
      name: "Rewinder",
      description: "Use /rewind to go back",
      category: "workflow",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User invokes /rewind command"
      }
    },
    {
      id: "session_librarian",
      name: "Session Librarian",
      description: "Resume a previous named session",
      category: "workflow",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User resumes session with --resume or session name"
      }
    },
    {
      id: "session_namer",
      name: "Session Namer",
      description: "Name a session",
      category: "workflow",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User names a session with --name flag or /name command"
      }
    },
    {
      id: "todo_tracker",
      name: "Todo Tracker",
      description: "Use /todo command for task management",
      category: "workflow",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User invokes /todo command"
      }
    },
    {
      id: "vim_mode",
      name: "Vim Mode",
      description: "Enable vim mode",
      category: "workflow",
      xp: 75,
      rarity: "common",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "vimMode"
      }
    },
    {
      id: "workspace_wizard",
      name: "Workspace Wizard",
      description: "Use npm/yarn/pnpm workspaces",
      category: "workflow",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        path: "./package.json",
        pattern: "workspaces"
      }
    },
    {
      id: "adventurer",
      name: "Adventurer",
      description: "Unlock 25 achievements",
      category: "milestones",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "milestone",
        milestone_type: "achievement_count",
        count: 25
      }
    },
    {
      id: "anniversary",
      name: "Anniversary",
      description: "Use Claude Quest for one full year",
      category: "milestones",
      xp: 500,
      rarity: "epic",
      detection: {
        type: "milestone",
        milestone_type: "tenure_days",
        days: 365
      }
    },
    {
      id: "category_master_commands",
      name: "Command Conqueror",
      description: "Unlock all command achievements",
      category: "milestones",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "milestone",
        requirement: {
          category_complete: "commands"
        }
      }
    },
    {
      id: "category_master_memory",
      name: "Memory Master",
      description: "Unlock all memory achievements",
      category: "milestones",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "milestone",
        requirement: {
          category_complete: "memory"
        }
      }
    },
    {
      id: "category_master_security",
      name: "Security Sentinel",
      description: "Unlock all security achievements",
      category: "milestones",
      xp: 250,
      rarity: "epic",
      detection: {
        type: "milestone",
        requirement: {
          category_complete: "security"
        }
      }
    },
    {
      id: "century_club",
      name: "Century Club",
      description: "Unlock 100 achievements",
      category: "milestones",
      xp: 400,
      rarity: "epic",
      detection: {
        type: "milestone",
        milestone_type: "achievement_count",
        count: 100
      }
    },
    {
      id: "completionist",
      name: "Completionist",
      description: "Complete all achievements in any single category",
      category: "milestones",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "milestone",
        milestone_type: "category_complete"
      }
    },
    {
      id: "day_one",
      name: "Day One",
      description: "Complete first quest scan",
      category: "milestones",
      xp: 25,
      rarity: "common",
      detection: {
        type: "milestone",
        milestone_type: "first_scan"
      }
    },
    {
      id: "early_adopter",
      name: "Early Adopter",
      description: "Install Claude Quest in 2025",
      category: "milestones",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "milestone",
        milestone_type: "install_date",
        before: "2026-01-01"
      }
    },
    {
      id: "epic_hoarder",
      name: "Epic Hoarder",
      description: "Unlock 5 epic achievements",
      category: "milestones",
      xp: 300,
      rarity: "epic",
      detection: {
        type: "milestone",
        milestone_type: "rarity_count",
        rarity: "epic",
        count: 5
      }
    },
    {
      id: "evangelist",
      name: "Evangelist",
      description: "Share quest progress",
      category: "milestones",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User shares progress or mentions sharing with others"
      }
    },
    {
      id: "explorer",
      name: "Explorer",
      description: "Unlock 50 achievements",
      category: "milestones",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "milestone",
        milestone_type: "achievement_count",
        count: 50
      }
    },
    {
      id: "getting_started",
      name: "Getting Started",
      description: "Unlock 10 achievements",
      category: "milestones",
      xp: 50,
      rarity: "common",
      detection: {
        type: "milestone",
        milestone_type: "achievement_count",
        count: 10
      }
    },
    {
      id: "hundred_achievements",
      name: "Century Club",
      description: "Unlock 100 achievements",
      category: "milestones",
      xp: 250,
      rarity: "epic",
      detection: {
        type: "milestone",
        requirement: {
          total_unlocked: 100
        }
      }
    },
    {
      id: "monthly_master",
      name: "Monthly Master",
      description: "30-day usage streak",
      category: "milestones",
      xp: 300,
      rarity: "epic",
      detection: {
        type: "milestone",
        milestone_type: "streak",
        days: 30
      }
    },
    {
      id: "quarter_champion",
      name: "Quarter Champion",
      description: "90-day usage streak",
      category: "milestones",
      xp: 400,
      rarity: "epic",
      detection: {
        type: "milestone",
        milestone_type: "streak",
        days: 90
      }
    },
    {
      id: "questmaster",
      name: "Questmaster",
      description: "Unlock ALL achievements",
      category: "milestones",
      xp: 500,
      rarity: "epic",
      detection: {
        type: "milestone",
        milestone_type: "achievement_count",
        count: 90
      }
    },
    {
      id: "rare_collector",
      name: "Rare Collector",
      description: "Unlock 10 rare or higher achievements",
      category: "milestones",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "milestone",
        milestone_type: "rarity_count",
        rarity: "rare",
        count: 10
      }
    },
    {
      id: "three_hundred_achievements",
      name: "Triple Crown",
      description: "Unlock 300 achievements",
      category: "milestones",
      xp: 500,
      rarity: "legendary",
      detection: {
        type: "milestone",
        requirement: {
          total_unlocked: 300
        }
      }
    },
    {
      id: "two_hundred_achievements",
      name: "Double Century",
      description: "Unlock 200 achievements",
      category: "milestones",
      xp: 400,
      rarity: "epic",
      detection: {
        type: "milestone",
        requirement: {
          total_unlocked: 200
        }
      }
    },
    {
      id: "veteran",
      name: "Veteran",
      description: "Unlock 75 achievements",
      category: "milestones",
      xp: 350,
      rarity: "epic",
      detection: {
        type: "milestone",
        milestone_type: "achievement_count",
        count: 75
      }
    },
    {
      id: "week_warrior",
      name: "Week Warrior",
      description: "7-day usage streak",
      category: "milestones",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "milestone",
        milestone_type: "streak",
        days: 7
      }
    },
    {
      id: "well_rounded",
      name: "Well Rounded",
      description: "Unlock at least one achievement from every category",
      category: "milestones",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "milestone",
        milestone_type: "all_categories_touched"
      }
    },
    {
      id: "xp_collector_10k",
      name: "XP Legend",
      description: "Earn 10,000 total XP",
      category: "milestones",
      xp: 350,
      rarity: "epic",
      detection: {
        type: "milestone",
        requirement: {
          total_xp: 1e4
        }
      }
    },
    {
      id: "xp_collector_1k",
      name: "XP Collector",
      description: "Earn 1,000 total XP",
      category: "milestones",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "milestone",
        requirement: {
          total_xp: 1e3
        }
      }
    },
    {
      id: "xp_collector_25k",
      name: "XP Titan",
      description: "Earn 25,000 total XP",
      category: "milestones",
      xp: 500,
      rarity: "legendary",
      detection: {
        type: "milestone",
        requirement: {
          total_xp: 25e3
        }
      }
    },
    {
      id: "xp_collector_5k",
      name: "XP Hoarder",
      description: "Earn 5,000 total XP",
      category: "milestones",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "milestone",
        requirement: {
          total_xp: 5e3
        }
      }
    },
    {
      id: "xp_hunter",
      name: "XP Hunter",
      description: "Accumulate 1000 XP",
      category: "milestones",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "milestone",
        milestone_type: "total_xp",
        xp: 1e3
      }
    },
    {
      id: "xp_legend",
      name: "XP Legend",
      description: "Accumulate 10000 XP",
      category: "milestones",
      xp: 500,
      rarity: "epic",
      detection: {
        type: "milestone",
        milestone_type: "total_xp",
        xp: 1e4
      }
    },
    {
      id: "xp_master",
      name: "XP Master",
      description: "Accumulate 5000 XP",
      category: "milestones",
      xp: 250,
      rarity: "rare",
      detection: {
        type: "milestone",
        milestone_type: "total_xp",
        xp: 5e3
      }
    },
    {
      id: "auto_committer",
      name: "Auto Committer",
      description: "Use Claude to automatically create git commits",
      category: "automation",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User asks Claude to commit changes or uses /commit command"
      }
    },
    {
      id: "batch_processor",
      name: "Batch Processor",
      description: "Use Claude to process multiple files at once",
      category: "automation",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User asks Claude to modify/process multiple files"
      }
    },
    {
      id: "branch_manager",
      name: "Branch Manager",
      description: "Use Claude to manage git branches",
      category: "automation",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User asks Claude to create, switch, or delete branches"
      }
    },
    {
      id: "changelog_generator",
      name: "Changelog Generator",
      description: "Use Claude to generate changelogs",
      category: "automation",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User asks Claude to generate or update CHANGELOG"
      }
    },
    {
      id: "ci_integrator",
      name: "CI Integrator",
      description: "Use Claude in CI/CD pipeline",
      category: "automation",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "file_contains",
        paths: [
          "./.github/workflows/*.yml",
          "./.github/workflows/*.yaml",
          "./.gitlab-ci.yml",
          "./Jenkinsfile"
        ],
        pattern: "claude"
      }
    },
    {
      id: "code_reviewer",
      name: "Code Reviewer",
      description: "Use Claude to review pull requests",
      category: "automation",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User asks Claude to review PR or uses /review-pr command"
      }
    },
    {
      id: "codemod_creator",
      name: "Codemod Creator",
      description: "Create reusable code transformation scripts",
      category: "automation",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User creates codemod/ast-grep/jscodeshift scripts with Claude"
      }
    },
    {
      id: "dependency_updater",
      name: "Dependency Updater",
      description: "Use Claude to update project dependencies",
      category: "automation",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User asks Claude to update npm/pip/cargo dependencies"
      }
    },
    {
      id: "github_action_user",
      name: "GitHub Action User",
      description: "Use Claude Code GitHub Action",
      category: "automation",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "file_contains",
        paths: [
          "./.github/workflows/*.yml",
          "./.github/workflows/*.yaml"
        ],
        pattern: "anthropics/claude|claude-code|claude.*action"
      }
    },
    {
      id: "headless_operator",
      name: "Headless Operator",
      description: "Run Claude Code in non-interactive mode",
      category: "automation",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User runs claude with -p/--print flag or pipes input"
      }
    },
    {
      id: "issue_handler",
      name: "Issue Handler",
      description: "Use Claude to manage GitHub issues",
      category: "automation",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User uses gh issue commands through Claude"
      }
    },
    {
      id: "lint_automator",
      name: "Lint Automator",
      description: "Use Claude to fix linting issues",
      category: "automation",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User asks Claude to fix ESLint, Prettier, or other linting errors"
      }
    },
    {
      id: "migration_assistant",
      name: "Migration Assistant",
      description: "Use Claude for database or code migrations",
      category: "automation",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User asks Claude to create or run migrations"
      }
    },
    {
      id: "pipeline_builder",
      name: "Pipeline Builder",
      description: "Chain Claude output to other commands",
      category: "automation",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User pipes Claude output to another process"
      }
    },
    {
      id: "pr_generator",
      name: "PR Generator",
      description: "Use Claude to create a pull request",
      category: "automation",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User asks Claude to create PR or uses gh pr create"
      }
    },
    {
      id: "refactor_ranger",
      name: "Refactor Ranger",
      description: "Use Claude for large-scale refactoring",
      category: "automation",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User asks Claude to refactor code across multiple files"
      }
    },
    {
      id: "release_automator",
      name: "Release Automator",
      description: "Use Claude to prepare releases",
      category: "automation",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User asks Claude to create release, bump version, or tag"
      }
    },
    {
      id: "scaffold_master",
      name: "Scaffold Master",
      description: "Use Claude to generate boilerplate code",
      category: "automation",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User asks Claude to scaffold/bootstrap/init new components"
      }
    },
    {
      id: "test_fixer",
      name: "Test Fixer",
      description: "Let Claude fix failing tests automatically",
      category: "automation",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User asks Claude to fix failing tests"
      }
    },
    {
      id: "test_runner",
      name: "Test Runner",
      description: "Use Claude to run and interpret test results",
      category: "automation",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User asks Claude to run tests (pytest, jest, etc.)"
      }
    },
    {
      id: "architecture_doc",
      name: "Architecture Documenter",
      description: "Document architecture decisions in project memory",
      category: "collaboration",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        path: "./CLAUDE.md",
        pattern: "(architecture|Architecture|ADR|design.?decision)"
      }
    },
    {
      id: "code_review_giver",
      name: "Code Review Giver",
      description: "Use Claude to review someone else's code",
      category: "collaboration",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User asks Claude to review external code/PR"
      }
    },
    {
      id: "commit_crafter",
      name: "Commit Crafter",
      description: "Create command for standardized commit messages",
      category: "collaboration",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./.claude/commands/commit.md",
          "~/.claude/commands/commit.md"
        ]
      }
    },
    {
      id: "convention_keeper",
      name: "Convention Keeper",
      description: "Define coding standards in CLAUDE.md",
      category: "collaboration",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        path: "./CLAUDE.md",
        pattern: "(convention|Convention|style.?guide|coding.?standard|naming)"
      }
    },
    {
      id: "doc_collaborator",
      name: "Doc Collaborator",
      description: "Create documentation command for team",
      category: "collaboration",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./.claude/commands/docs.md",
          "./.claude/commands/document.md"
        ]
      }
    },
    {
      id: "issue_tracker",
      name: "Issue Tracker",
      description: "Create command for GitHub/Linear issue workflow",
      category: "collaboration",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./.claude/commands/issue.md",
          "./.claude/commands/bug.md"
        ]
      }
    },
    {
      id: "knowledge_sharer",
      name: "Knowledge Sharer",
      description: "Document team patterns in project CLAUDE.md (10+ sections)",
      category: "collaboration",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "file_contains",
        path: "./CLAUDE.md",
        pattern: "^##\\s+",
        min_matches: 10
      }
    },
    {
      id: "mentorship",
      name: "Mentor Mode",
      description: "Ask Claude to explain code for learning",
      category: "collaboration",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User asks Claude to explain code concepts"
      }
    },
    {
      id: "onboarding_guide",
      name: "Onboarding Guide",
      description: "Create onboarding documentation",
      category: "collaboration",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        paths: [
          "./CLAUDE.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "(onboard|Onboard|getting.?started|new.?developer)"
      }
    },
    {
      id: "onboarding_helper",
      name: "Onboarding Helper",
      description: "Use Claude to understand a new codebase",
      category: "collaboration",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User asks Claude to explain project architecture"
      }
    },
    {
      id: "pair_programmer",
      name: "Pair Programmer",
      description: "Share a Claude session with a teammate",
      category: "collaboration",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User shares session or works collaboratively"
      }
    },
    {
      id: "pr_automator",
      name: "PR Automator",
      description: "Create command for pull request workflow",
      category: "collaboration",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./.claude/commands/pr.md",
          "./.claude/commands/pull-request.md",
          "./.claude/commands/review-pr.md"
        ]
      }
    },
    {
      id: "release_manager",
      name: "Release Manager",
      description: "Create command for release notes or changelog",
      category: "collaboration",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_exists",
        paths: [
          "./.claude/commands/release.md",
          "./.claude/commands/changelog.md"
        ]
      }
    },
    {
      id: "retro_generator",
      name: "Retro Generator",
      description: "Create command for retrospective generation",
      category: "collaboration",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_exists",
        paths: [
          "./.claude/commands/retro.md",
          "./.claude/commands/retrospective.md"
        ]
      }
    },
    {
      id: "shared_commands",
      name: "Shared Commands",
      description: "Create 3+ commands in project .claude/commands",
      category: "collaboration",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        path: "./.claude/commands",
        pattern: "*.md",
        min_count: 3
      }
    },
    {
      id: "standup_automator",
      name: "Standup Automator",
      description: "Create command for daily standup summaries",
      category: "collaboration",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_exists",
        paths: [
          "./.claude/commands/standup.md",
          "./.claude/commands/daily.md"
        ]
      }
    },
    {
      id: "standup_writer",
      name: "Standup Writer",
      description: "Generate standup notes with Claude",
      category: "collaboration",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User asks Claude to summarize work for standup"
      }
    },
    {
      id: "team_memory",
      name: "Team Memory",
      description: "Create shared project CLAUDE.md with team conventions",
      category: "collaboration",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        path: "./CLAUDE.md",
        pattern: "(team|Team|contributor|Contributor|collaboration)"
      }
    },
    {
      id: "template_maker",
      name: "Template Maker",
      description: "Create reusable templates in .claude directory",
      category: "collaboration",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        paths: [
          "./.claude/templates",
          "~/.claude/templates"
        ],
        pattern: "*",
        min_count: 1
      }
    },
    {
      id: "batch_optimizer",
      name: "Batch Optimizer",
      description: "Batch multiple operations efficiently",
      category: "performance",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User batches operations for efficiency"
      }
    },
    {
      id: "cache_leverager",
      name: "Cache Leverager",
      description: "Benefit from prompt caching in long sessions",
      category: "performance",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "Session shows cache_read_input_tokens in usage stats"
      }
    },
    {
      id: "cache_master",
      name: "Cache Master",
      description: "Understand and leverage prompt caching",
      category: "performance",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User discusses or optimizes for prompt caching"
      }
    },
    {
      id: "context_conscious",
      name: "Context Conscious",
      description: "Check context usage with /context",
      category: "performance",
      xp: 50,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User invokes /context command to check usage"
      }
    },
    {
      id: "context_optimizer",
      name: "Context Optimizer",
      description: "Use context percentage display in status line",
      category: "performance",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json"
        ],
        pattern: "context_window|context.*pct|ctx"
      }
    },
    {
      id: "env_configurator",
      name: "Env Configurator",
      description: "Configure environment variables in settings",
      category: "performance",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        key: "env"
      }
    },
    {
      id: "haiku_handler",
      name: "Haiku Handler",
      description: "Configure Haiku for lightweight tasks",
      category: "performance",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "haiku|HAIKU"
      }
    },
    {
      id: "headless_hero",
      name: "Headless Hero",
      description: "Run Claude Code in headless/non-interactive mode",
      category: "performance",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User runs Claude with --headless flag or in CI/CD"
      }
    },
    {
      id: "ignore_master",
      name: "Ignore Master",
      description: "Use .claudeignore to optimize context",
      category: "performance",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        path: "./.claudeignore"
      }
    },
    {
      id: "lazy_loader",
      name: "Lazy Loader",
      description: "Use lazy loading for large contexts",
      category: "performance",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User strategically loads context on demand"
      }
    },
    {
      id: "memory_efficient",
      name: "Memory Efficient",
      description: "Keep CLAUDE.md under 2000 tokens",
      category: "performance",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        max_length: 8e3
      }
    },
    {
      id: "model_strategist",
      name: "Model Strategist",
      description: "Configure model preferences in settings",
      category: "performance",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json"
        ],
        pattern: "ANTHROPIC.*MODEL|defaultModel|model"
      }
    },
    {
      id: "opus_orchestrator",
      name: "Opus Orchestrator",
      description: "Configure Opus for complex reasoning",
      category: "performance",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "opus|OPUS"
      }
    },
    {
      id: "parallel_operator",
      name: "Parallel Operator",
      description: "Enable parallel tool execution",
      category: "performance",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "parallelTools|parallel.*true"
      }
    },
    {
      id: "response_streamer",
      name: "Response Streamer",
      description: "Leverage streaming for long outputs",
      category: "performance",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User uses streaming effectively"
      }
    },
    {
      id: "selective_reader",
      name: "Selective Reader",
      description: "Configure file reading limits in settings",
      category: "performance",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "maxFileSize|maxReadLines|fileLimit"
      }
    },
    {
      id: "sonnet_specialist",
      name: "Sonnet Specialist",
      description: "Configure Sonnet as balanced default",
      category: "performance",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: "sonnet|SONNET"
      }
    },
    {
      id: "spinner_silencer",
      name: "Spinner Silencer",
      description: "Disable spinner tips for cleaner output",
      category: "performance",
      xp: 50,
      rarity: "common",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json"
        ],
        pattern: "spinnerTipsEnabled.*false"
      }
    },
    {
      id: "token_economist",
      name: "Token Economist",
      description: "Monitor costs with /cost command",
      category: "performance",
      xp: 50,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User invokes /cost command to track spending"
      }
    },
    {
      id: "audit_logger",
      name: "Audit Trail",
      description: "Enable session logging for security audit",
      category: "security",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "sessionLog"
      }
    },
    {
      id: "auth_implementer",
      name: "Auth Architect",
      description: "Implement authentication with Claude's guidance",
      category: "security",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User implements JWT, OAuth, session auth, or other authentication with Claude"
      }
    },
    {
      id: "cors_configured",
      name: "CORS Conscious",
      description: "Properly configure CORS settings",
      category: "security",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User configures or discusses CORS settings with Claude's help"
      }
    },
    {
      id: "credential_scanner",
      name: "Secret Scanner",
      description: "Ask Claude to scan for exposed credentials in code",
      category: "security",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User asks Claude to scan for secrets, credentials, or API keys in code"
      }
    },
    {
      id: "deny_dangerous",
      name: "Danger Zone Defender",
      description: "Configure deniedTools to block dangerous operations",
      category: "security",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        key: "deniedTools"
      }
    },
    {
      id: "dependency_checker",
      name: "Dependency Guardian",
      description: "Ask Claude to check for vulnerable dependencies",
      category: "security",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User asks Claude to check npm audit, pip-audit, or dependency vulnerabilities"
      }
    },
    {
      id: "gitignore_secrets",
      name: "Hidden Treasures",
      description: "Add .env to .gitignore to prevent secret exposure",
      category: "security",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        path: "./.gitignore",
        pattern: "\\.env"
      }
    },
    {
      id: "injection_aware",
      name: "Injection Defender",
      description: "Ask Claude to review code for injection vulnerabilities",
      category: "security",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User asks Claude to check for SQL injection, XSS, command injection, or similar vulnerabilities"
      }
    },
    {
      id: "input_validator",
      name: "Input Validator",
      description: "Implement input validation with Claude's help",
      category: "security",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User asks Claude to implement or review input validation"
      }
    },
    {
      id: "no_auto_approve",
      name: "Manual Override",
      description: "Disable auto-approve to review all tool calls",
      category: "security",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: '"autoApprove":\\s*false'
      }
    },
    {
      id: "owasp_aware",
      name: "OWASP Guardian",
      description: "Reference OWASP in security discussions",
      category: "security",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User mentions OWASP, OWASP Top 10, or specific OWASP vulnerabilities"
      }
    },
    {
      id: "permission_minimal",
      name: "Least Privilege",
      description: "Configure minimal default permissions",
      category: "security",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        pattern: '"permissions":\\s*\\{[^}]*"default":\\s*"deny"'
      }
    },
    {
      id: "pre_commit_security",
      name: "Commit Guard",
      description: "Set up pre-commit hook for security checks",
      category: "security",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "file_contains",
        path: "./.git/hooks/pre-commit",
        pattern: "(secret|credential|security|gitleaks|trufflehog)"
      }
    },
    {
      id: "rate_limiter",
      name: "Rate Limiter",
      description: "Ask Claude to implement rate limiting",
      category: "security",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User requests rate limiting implementation or review"
      }
    },
    {
      id: "sandbox_user",
      name: "Sandbox Guardian",
      description: "Run Claude Code in sandbox mode for untrusted projects",
      category: "security",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User runs Claude with --sandbox flag or configures sandbox mode"
      }
    },
    {
      id: "secrets_in_env",
      name: "Secrets Keeper",
      description: "Store API keys in .env file instead of code",
      category: "security",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_exists",
        paths: [
          "./.env",
          "./.env.local",
          "./.env.production"
        ]
      }
    },
    {
      id: "security_headers",
      name: "Header Hardener",
      description: "Configure security headers (CSP, HSTS, etc.)",
      category: "security",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User configures Content-Security-Policy, HSTS, X-Frame-Options, or other security headers"
      }
    },
    {
      id: "security_policy",
      name: "Security Policy Author",
      description: "Create SECURITY.md file",
      category: "security",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./SECURITY.md",
          "./.github/SECURITY.md"
        ]
      }
    },
    {
      id: "security_review",
      name: "Security Auditor",
      description: "Request a comprehensive security review",
      category: "security",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User asks for full security audit or comprehensive security review"
      }
    },
    {
      id: "token_rotation",
      name: "Token Rotator",
      description: "Discuss or implement API token rotation",
      category: "security",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User discusses token rotation, key rotation, or credential refresh strategies"
      }
    },
    {
      id: "tool_whitelist",
      name: "Gatekeeper",
      description: "Restrict Claude to specific allowed tools only",
      category: "security",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        key: "allowedTools"
      }
    },
    {
      id: "chain_of_thought",
      name: "Chain of Thought",
      description: "Ask Claude to explain its reasoning step by step",
      category: "ai-mastery",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User asks Claude to think step by step, explain reasoning, or show work"
      }
    },
    {
      id: "constraint_setter",
      name: "Constraint Setter",
      description: "Set explicit constraints for Claude's responses",
      category: "ai-mastery",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "(must|MUST|always|ALWAYS|never|NEVER|don't|do not)"
      }
    },
    {
      id: "context_engineer",
      name: "Context Engineer",
      description: "Strategically manage context for optimal results",
      category: "ai-mastery",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User explicitly manages context, uses /compact, or discusses context window optimization"
      }
    },
    {
      id: "error_recovery",
      name: "Error Recovery Pro",
      description: "Guide Claude through error recovery",
      category: "ai-mastery",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User helps Claude recover from errors, provides corrections, or guides debugging"
      }
    },
    {
      id: "extended_thinking",
      name: "Deep Thinker",
      description: "Trigger Claude's extended thinking for complex problems",
      category: "ai-mastery",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User explicitly requests extended thinking or Claude uses extended thinking for complex reasoning"
      }
    },
    {
      id: "few_shot_master",
      name: "Few-Shot Master",
      description: "Provide examples in prompts for better results",
      category: "ai-mastery",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md",
          "~/.claude/commands/**/*.md"
        ],
        pattern: "(example|Example|EXAMPLE).*\\n.*```"
      }
    },
    {
      id: "hallucination_aware",
      name: "Hallucination Hunter",
      description: "Ask Claude to distinguish facts from uncertainty",
      category: "ai-mastery",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User asks Claude to indicate uncertainty, distinguish facts, or avoid hallucination"
      }
    },
    {
      id: "iterative_refinement",
      name: "Iterative Refiner",
      description: "Refine Claude's output through multiple iterations",
      category: "ai-mastery",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User requests refinements, adjustments, or iterations on Claude's previous output"
      }
    },
    {
      id: "model_selector",
      name: "Model Selector",
      description: "Explicitly choose between Haiku, Sonnet, and Opus",
      category: "ai-mastery",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/settings.json",
          "./.claude/settings.json",
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "(haiku|sonnet|opus)"
      }
    },
    {
      id: "multi_agent_orchestrator",
      name: "Multi-Agent Orchestrator",
      description: "Use multiple specialized agents in workflow",
      category: "ai-mastery",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "directory_has_files",
        paths: [
          "~/.claude/agents",
          "./.claude/agents"
        ],
        pattern: "*.md",
        min_count: 3
      }
    },
    {
      id: "output_parser",
      name: "Output Parser",
      description: "Parse and process Claude's structured outputs",
      category: "ai-mastery",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "User parses Claude's JSON/structured output programmatically or in scripts"
      }
    },
    {
      id: "prompt_template",
      name: "Prompt Template Master",
      description: "Create reusable prompt templates",
      category: "ai-mastery",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/commands/**/*.md",
          "./.claude/commands/**/*.md"
        ],
        pattern: "(\\$ARGUMENTS|\\$1|\\$2|\\{\\{.*\\}\\})"
      }
    },
    {
      id: "role_definer",
      name: "Role Definer",
      description: "Assign Claude a specific role or persona",
      category: "ai-mastery",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md",
          "~/.claude/agents/*.md"
        ],
        pattern: "(You are|Act as|Behave as|Your role is)"
      }
    },
    {
      id: "structured_output",
      name: "Structure Seeker",
      description: "Request structured output format (JSON, YAML, etc.)",
      category: "ai-mastery",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User requests specific output format like JSON, YAML, markdown tables, or structured data"
      }
    },
    {
      id: "system_prompt_crafter",
      name: "System Prompt Crafter",
      description: "Create detailed system prompts in CLAUDE.md",
      category: "ai-mastery",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        min_length: 2e3
      }
    },
    {
      id: "task_decomposer",
      name: "Task Decomposer",
      description: "Break complex tasks into smaller subtasks",
      category: "ai-mastery",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User explicitly decomposes tasks or asks Claude to break down complex problems"
      }
    },
    {
      id: "temperature_tuner",
      name: "Temperature Tuner",
      description: "Adjust response creativity with temperature setting",
      category: "ai-mastery",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        key: "temperature"
      }
    },
    {
      id: "thinking_budget",
      name: "Thinking Budget Master",
      description: "Configure thinking budget for extended reasoning",
      category: "ai-mastery",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        key: "thinkingBudget"
      }
    },
    {
      id: "token_optimizer",
      name: "Token Optimizer",
      description: "Optimize prompts for token efficiency",
      category: "ai-mastery",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User discusses token usage, optimizes prompts for brevity, or uses /compact"
      }
    },
    {
      id: "verification_pattern",
      name: "Verification Master",
      description: "Ask Claude to verify its own outputs",
      category: "ai-mastery",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User asks Claude to verify, double-check, or validate its own work"
      }
    },
    {
      id: "alias_creator",
      name: "Alias Creator",
      description: "Create shell aliases for Claude commands",
      category: "customization",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User creates bash/zsh aliases for claude commands"
      }
    },
    {
      id: "alias_master",
      name: "Alias Master",
      description: "Create a shell alias for Claude Code",
      category: "customization",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_contains",
        paths: [
          "~/.bashrc",
          "~/.zshrc",
          "~/.bash_profile",
          "~/.zprofile"
        ],
        pattern: "alias.*claude"
      }
    },
    {
      id: "auto_pilot",
      name: "Auto Pilot",
      description: "Configure auto-accept settings",
      category: "customization",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json",
          "./.claude/settings.json"
        ],
        key: "autoAccept"
      }
    },
    {
      id: "color_palette",
      name: "Color Palette",
      description: "Define custom color scheme",
      category: "customization",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "colors"
      }
    },
    {
      id: "default_definer",
      name: "Default Definer",
      description: "Set custom default model preference",
      category: "customization",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "defaultModel"
      }
    },
    {
      id: "editor_integrator",
      name: "Editor Integrator",
      description: "Set preferred external editor",
      category: "customization",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "editor"
      }
    },
    {
      id: "history_curator",
      name: "History Curator",
      description: "Configure history retention settings",
      category: "customization",
      xp: 75,
      rarity: "common",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "historyLimit"
      }
    },
    {
      id: "keybind_wizard",
      name: "Keybind Wizard",
      description: "Configure custom keybindings",
      category: "customization",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "keybindings"
      }
    },
    {
      id: "keyboard_master",
      name: "Keyboard Master",
      description: "Configure custom keyboard shortcuts",
      category: "customization",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json"
        ],
        pattern: "keybind|shortcut"
      }
    },
    {
      id: "locale_setter",
      name: "Locale Setter",
      description: "Configure language or locale preferences",
      category: "customization",
      xp: 75,
      rarity: "common",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "locale"
      }
    },
    {
      id: "notification_tuner",
      name: "Notification Tuner",
      description: "Customize notification preferences",
      category: "customization",
      xp: 75,
      rarity: "common",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "notifications"
      }
    },
    {
      id: "persona_builder",
      name: "Persona Builder",
      description: "Create a custom personality section in CLAUDE.md",
      category: "customization",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "(personality|persona|tone|style|voice):"
      }
    },
    {
      id: "prompt_personalizer",
      name: "Prompt Personalizer",
      description: "Customize Claude's response style",
      category: "customization",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "~/.claude/CLAUDE.md",
          "./CLAUDE.md"
        ],
        pattern: "(respond|reply|write|speak).*style"
      }
    },
    {
      id: "prompt_stylist",
      name: "Prompt Stylist",
      description: "Customize the CLI prompt appearance",
      category: "customization",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "promptStyle"
      }
    },
    {
      id: "startup_customizer",
      name: "Startup Customizer",
      description: "Configure custom startup behavior",
      category: "customization",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json"
        ],
        pattern: "startup|onStart"
      }
    },
    {
      id: "status_crafter",
      name: "Status Crafter",
      description: "Design a custom status line with multiple components",
      category: "customization",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json"
        ],
        pattern: "statusLine.*\\{[^}]*,[^}]*\\}"
      }
    },
    {
      id: "terminal_tweaker",
      name: "Terminal Tweaker",
      description: "Customize terminal output settings",
      category: "customization",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json"
        ],
        pattern: "terminal|output"
      }
    },
    {
      id: "theme_customizer",
      name: "Theme Customizer",
      description: "Customize Claude Code colors or theme",
      category: "customization",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_contains",
        files: [
          "~/.claude/settings.json"
        ],
        pattern: "theme|color"
      }
    },
    {
      id: "theme_picker",
      name: "Theme Picker",
      description: "Configure a custom terminal theme",
      category: "customization",
      xp: 50,
      rarity: "common",
      detection: {
        type: "config_has_key",
        files: [
          "~/.claude/settings.json"
        ],
        key: "theme"
      }
    },
    {
      id: "workspace_architect",
      name: "Workspace Architect",
      description: "Configure workspace-specific settings",
      category: "customization",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        path: "./.claude/settings.json"
      }
    },
    {
      id: "coverage_hunter",
      name: "Coverage Hunter",
      description: "Generate or check code coverage report",
      category: "testing",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./coverage/**/*",
          "./htmlcov/**/*",
          "./.nyc_output/**/*",
          "./coverage.xml",
          "./lcov.info"
        ]
      }
    },
    {
      id: "e2e_champion",
      name: "E2E Champion",
      description: "Set up end-to-end testing",
      category: "testing",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_exists",
        paths: [
          "./cypress/**/*",
          "./playwright/**/*",
          "./e2e/**/*",
          "./**/cypress.config.*",
          "./playwright.config.*"
        ]
      }
    },
    {
      id: "first_test",
      name: "First Test",
      description: "Create your first test file",
      category: "testing",
      xp: 50,
      rarity: "common",
      detection: {
        type: "file_exists",
        paths: [
          "./**/*.test.js",
          "./**/*.test.ts",
          "./**/*.spec.js",
          "./**/*.spec.ts",
          "./**/test_*.py",
          "./**/*_test.py",
          "./**/*_test.go",
          "./**/tests/*.py"
        ]
      }
    },
    {
      id: "fixture_factory",
      name: "Fixture Factory",
      description: "Create test fixtures or factories",
      category: "testing",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./**/fixtures/**/*",
          "./**/conftest.py",
          "./**/factories.py",
          "./**/*.factory.*"
        ]
      }
    },
    {
      id: "integration_tester",
      name: "Integration Tester",
      description: "Write integration tests",
      category: "testing",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./**/integration/**/*.test.*",
          "./**/integration/**/*.spec.*"
        ]
      }
    },
    {
      id: "mock_master",
      name: "Mock Master",
      description: "Create test with mocks or stubs",
      category: "testing",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "./**/*.test.*",
          "./**/*.spec.*",
          "./**/test_*.py"
        ],
        pattern: "(mock|Mock|jest\\.fn|patch|MagicMock|stub|sinon|vi\\.fn)"
      }
    },
    {
      id: "parallel_tests",
      name: "Parallel Tester",
      description: "Run tests in parallel",
      category: "testing",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User runs tests with parallel/concurrent flag"
      }
    },
    {
      id: "snapshot_tester",
      name: "Snapshot Tester",
      description: "Use snapshot testing",
      category: "testing",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./**/__snapshots__/*",
          "./**/*.snap"
        ]
      }
    },
    {
      id: "test_coverage_80",
      name: "Coverage Champion",
      description: "Achieve 80%+ test coverage",
      category: "testing",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "manual",
        trigger: "Coverage report shows 80%+ coverage"
      }
    },
    {
      id: "test_debugger",
      name: "Test Debugger",
      description: "Ask Claude to help debug failing tests",
      category: "testing",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User asks Claude to diagnose, debug, or fix failing tests"
      }
    },
    {
      id: "test_driven",
      name: "Test Driven",
      description: "Ask Claude to write tests before implementation",
      category: "testing",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User explicitly asks Claude to write tests first, or follows TDD methodology"
      }
    },
    {
      id: "test_refactorer",
      name: "Test Refactorer",
      description: "Refactor tests for better organization",
      category: "testing",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User asks Claude to refactor, reorganize, or improve test structure"
      }
    },
    {
      id: "test_reporter",
      name: "Test Reporter",
      description: "Generate test report in HTML or JSON",
      category: "testing",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./test-report.html",
          "./test-results.json",
          "./junit.xml"
        ]
      }
    },
    {
      id: "test_suite_architect",
      name: "Test Suite Architect",
      description: "Create comprehensive test suite with 10+ test files",
      category: "testing",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "directory_has_files",
        paths: [
          "./**/tests",
          "./**/__tests__",
          "./test"
        ],
        pattern: "*.{test,spec}.*",
        min_count: 10
      }
    },
    {
      id: "test_watcher",
      name: "Test Watcher",
      description: "Run tests in watch mode",
      category: "testing",
      xp: 75,
      rarity: "common",
      detection: {
        type: "manual",
        trigger: "User runs tests with --watch flag"
      }
    },
    {
      id: "api_documenter",
      name: "API Documenter",
      description: "Create API documentation",
      category: "documentation",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_exists",
        paths: [
          "./docs/api/**/*",
          "./api-docs/**/*",
          "./openapi.yaml",
          "./openapi.json",
          "./swagger.yaml",
          "./swagger.json"
        ]
      }
    },
    {
      id: "architecture_documenter",
      name: "Architecture Documenter",
      description: "Document system architecture",
      category: "documentation",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "file_exists",
        paths: [
          "./docs/architecture.md",
          "./ARCHITECTURE.md",
          "./docs/design.md",
          "./docs/adr/**/*"
        ]
      }
    },
    {
      id: "changelog_keeper",
      name: "Changelog Keeper",
      description: "Maintain a CHANGELOG file",
      category: "documentation",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_exists",
        paths: [
          "./CHANGELOG.md",
          "./CHANGELOG",
          "./HISTORY.md",
          "./CHANGES.md"
        ]
      }
    },
    {
      id: "code_of_conduct",
      name: "Community Builder",
      description: "Add CODE_OF_CONDUCT.md",
      category: "documentation",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_exists",
        paths: [
          "./CODE_OF_CONDUCT.md",
          "./.github/CODE_OF_CONDUCT.md"
        ]
      }
    },
    {
      id: "contributing_guide",
      name: "Contributing Guide",
      description: "Create contribution guidelines",
      category: "documentation",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./CONTRIBUTING.md",
          "./.github/CONTRIBUTING.md"
        ]
      }
    },
    {
      id: "docs_site_builder",
      name: "Docs Site Builder",
      description: "Set up documentation site generator",
      category: "documentation",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "file_exists",
        paths: [
          "./mkdocs.yml",
          "./docusaurus.config.js",
          "./docs/.vitepress/**/*",
          "./_config.yml",
          "./book.toml"
        ]
      }
    },
    {
      id: "docstring_devotee",
      name: "Docstring Devotee",
      description: "Add Python docstrings to functions",
      category: "documentation",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "./**/*.py"
        ],
        pattern: '"""[\\s\\S]*?(Args:|Returns:|Parameters:|Example:)',
        min_matches: 3
      }
    },
    {
      id: "example_crafter",
      name: "Example Crafter",
      description: "Create code examples directory",
      category: "documentation",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "directory_has_files",
        paths: [
          "./examples",
          "./samples",
          "./demo"
        ],
        pattern: "*",
        min_count: 1
      }
    },
    {
      id: "issue_templates",
      name: "Issue Templater",
      description: "Create GitHub issue templates",
      category: "documentation",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./.github/ISSUE_TEMPLATE/**/*",
          "./.github/ISSUE_TEMPLATE.md"
        ]
      }
    },
    {
      id: "jsdoc_master",
      name: "JSDoc Master",
      description: "Document code with JSDoc or TSDoc comments",
      category: "documentation",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "./**/*.js",
          "./**/*.ts"
        ],
        pattern: "/\\*\\*[\\s\\S]*?@(param|returns|description|example)",
        min_matches: 3
      }
    },
    {
      id: "license_adder",
      name: "License Keeper",
      description: "Add LICENSE file to project",
      category: "documentation",
      xp: 50,
      rarity: "common",
      detection: {
        type: "file_exists",
        paths: [
          "./LICENSE",
          "./LICENSE.md",
          "./LICENSE.txt"
        ]
      }
    },
    {
      id: "pr_template",
      name: "PR Templater",
      description: "Create pull request template",
      category: "documentation",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_exists",
        paths: [
          "./.github/PULL_REQUEST_TEMPLATE.md",
          "./.github/pull_request_template.md"
        ]
      }
    },
    {
      id: "readme_completist",
      name: "README Completist",
      description: "Create comprehensive README with 5+ sections",
      category: "documentation",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        path: "./README.md",
        pattern: "^##\\s+",
        min_matches: 5
      }
    },
    {
      id: "readme_writer",
      name: "README Writer",
      description: "Create a project README.md",
      category: "documentation",
      xp: 50,
      rarity: "common",
      detection: {
        type: "file_exists",
        path: "./README.md"
      }
    },
    {
      id: "type_doc",
      name: "Type Documentarian",
      description: "Document TypeScript types with TSDoc",
      category: "documentation",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "./**/*.ts"
        ],
        pattern: "@remarks|@typeParam|@see"
      }
    },
    {
      id: "archaeologist",
      name: "Archaeologist",
      description: "Ancient code holds forgotten wisdom...",
      category: "secrets",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "secret",
        trigger: "file_age",
        condition: "file_older_than_5_years"
      }
    },
    {
      id: "early_bird",
      name: "Early Bird",
      description: "The dawn brings clarity and focus...",
      category: "secrets",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "secret",
        trigger: "session_time",
        condition: "hour >= 5 && hour < 7"
      }
    },
    {
      id: "easter_egg_hunter",
      name: "Easter Egg Hunter",
      description: "Find 3 hidden features",
      category: "secrets",
      xp: 250,
      rarity: "epic",
      detection: {
        type: "secret"
      }
    },
    {
      id: "holiday_hacker",
      name: "Holiday Hacker",
      description: "Use Claude Code on a major holiday",
      category: "secrets",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "secret"
      }
    },
    {
      id: "holiday_spirit",
      name: "Holiday Spirit",
      description: "Even holidays cannot stop a true builder...",
      category: "secrets",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "secret",
        trigger: "calendar_date",
        condition: "major_holiday"
      }
    },
    {
      id: "lucky_seven",
      name: "Lucky Seven",
      description: "Some numbers hold special meaning...",
      category: "secrets",
      xp: 77,
      rarity: "uncommon",
      detection: {
        type: "secret",
        trigger: "session_count",
        condition: "session_number == 7 || session_number == 77 || session_number == 777"
      }
    },
    {
      id: "marathon_runner",
      name: "Marathon Runner",
      description: "Some sessions become legendary...",
      category: "secrets",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "secret",
        trigger: "session_duration",
        condition: "duration_hours >= 4"
      }
    },
    {
      id: "marathon_session",
      name: "Marathon Session",
      description: "Have a 4+ hour coding session",
      category: "secrets",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "secret"
      }
    },
    {
      id: "midnight_coder",
      name: "Midnight Coder",
      description: "Use Claude Code after midnight",
      category: "secrets",
      xp: 75,
      rarity: "common",
      detection: {
        type: "secret"
      }
    },
    {
      id: "minimalist",
      name: "Minimalist",
      description: "Elegance lies in simplicity...",
      category: "secrets",
      xp: 200,
      rarity: "rare",
      detection: {
        type: "secret",
        trigger: "single_command_solution",
        condition: "complex_task_one_command"
      }
    },
    {
      id: "night_owl",
      name: "Night Owl",
      description: "Wisdom flows when the world sleeps...",
      category: "secrets",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "secret",
        trigger: "session_time",
        condition: "hour >= 0 && hour < 5"
      }
    },
    {
      id: "perfectionist",
      name: "Perfectionist",
      description: "Iteration breeds excellence...",
      category: "secrets",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "secret",
        trigger: "revision_count",
        condition: "same_file_edited_10_times"
      }
    },
    {
      id: "polyglot",
      name: "Polyglot",
      description: "Use 5+ programming languages in one project",
      category: "secrets",
      xp: 175,
      rarity: "rare",
      detection: {
        type: "secret"
      }
    },
    {
      id: "rubber_duck",
      name: "Rubber Duck",
      description: "Sometimes explaining is all you need...",
      category: "secrets",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "secret",
        trigger: "conversation_pattern",
        condition: "user_explains_then_solves"
      }
    },
    {
      id: "secret_finder",
      name: "Secret Finder",
      description: "Discover a hidden Claude Code feature",
      category: "secrets",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "secret"
      }
    },
    {
      id: "thousand_lines",
      name: "Thousand Lines",
      description: "Generate 1000+ lines of code in one session",
      category: "secrets",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "secret"
      }
    },
    {
      id: "time_traveler",
      name: "Time Traveler",
      description: "The past is never truly gone...",
      category: "secrets",
      xp: 150,
      rarity: "rare",
      detection: {
        type: "secret",
        trigger: "git_command",
        condition: "revert|reset|checkout HEAD~"
      }
    },
    {
      id: "weekend_warrior",
      name: "Weekend Warrior",
      description: "Code with Claude on a weekend",
      category: "secrets",
      xp: 50,
      rarity: "common",
      detection: {
        type: "secret"
      }
    },
    {
      id: "full_year_365",
      name: "Full Year",
      description: "The ultimate milestone - 365 days worth of achievements",
      category: "milestones",
      xp: 365,
      rarity: "legendary",
      detection: {
        type: "milestone",
        requirement: {
          total_unlocked: 350
        }
      }
    },
    {
      id: "json_master",
      name: "JSON Master",
      description: "Work with JSON configuration files",
      category: "workflow",
      xp: 75,
      rarity: "common",
      detection: {
        type: "file_exists",
        paths: [
          "./.claude/settings.json",
          "./.mcp.json"
        ]
      }
    },
    {
      id: "tool_explorer",
      name: "Tool Explorer",
      description: "Use 10+ different Claude Code tools in one session",
      category: "ai-mastery",
      xp: 125,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "User uses 10+ different tools in single session"
      }
    },
    {
      id: "context_stretcher",
      name: "Context Stretcher",
      description: "Use 90%+ of available context window",
      category: "performance",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "manual",
        trigger: "Session uses 90%+ of context window"
      }
    },
    {
      id: "pattern_recognizer",
      name: "Pattern Recognizer",
      description: "Document code patterns in CLAUDE.md",
      category: "memory",
      xp: 100,
      rarity: "uncommon",
      detection: {
        type: "file_contains",
        paths: [
          "./CLAUDE.md",
          "~/.claude/CLAUDE.md"
        ],
        pattern: "(pattern|Pattern)"
      }
    }
  ]
};

// src/achievements.ts
var data = achievements_default;
var achievements = data.achievements;
var totalAchievements = data.total_achievements;
function selectRandomUnposted(postedIds) {
  const postedSet = new Set(postedIds);
  const unposted = achievements.filter((a) => !postedSet.has(a.id));
  if (unposted.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * unposted.length);
  return unposted[randomIndex];
}
__name(selectRandomUnposted, "selectRandomUnposted");
function getRemainingCount(postedIds) {
  return totalAchievements - postedIds.length;
}
__name(getRemainingCount, "getRemainingCount");

// src/tweet-formatter.ts
var CATEGORY_EMOJI = {
  "memory": "\u{1F4DD}",
  "commands": "\u{1F6E0}\uFE0F",
  "skills": "\u2728",
  "agents": "\u{1F916}",
  "hooks": "\u{1F3A3}",
  "integrations": "\u{1F50C}",
  "workflow": "\u{1F504}",
  "milestones": "\u{1F451}",
  "automation": "\u26A1",
  "collaboration": "\u{1F91D}",
  "performance": "\u{1F680}",
  "security": "\u{1F6E1}\uFE0F",
  "ai-mastery": "\u{1F9E0}",
  "customization": "\u{1F3A8}",
  "testing": "\u{1F9EA}",
  "documentation": "\u{1F4DA}",
  "secrets": "\u{1F52E}"
};
var CATEGORY_NAME = {
  "memory": "Memory",
  "commands": "Commands",
  "skills": "Skills",
  "agents": "Agents",
  "hooks": "Hooks",
  "integrations": "Integrations",
  "workflow": "Workflow",
  "milestones": "Milestones",
  "automation": "Automation",
  "collaboration": "Collaboration",
  "performance": "Performance",
  "security": "Security",
  "ai-mastery": "AI Mastery",
  "customization": "Customization",
  "testing": "Testing",
  "documentation": "Documentation",
  "secrets": "Secrets"
};
var RARITY_EMOJI = {
  "common": "\u26AA",
  "uncommon": "\u{1F7E2}",
  "rare": "\u{1F535}",
  "epic": "\u{1F7E3}",
  "legendary": "\u{1F7E1}"
};
function selectFormat(achievement) {
  const { category, detection } = achievement;
  if (category === "secrets" || detection.type === "secret") {
    return "did_you_know";
  }
  if (category === "milestones") {
    return "til";
  }
  if (category === "integrations" || category === "agents") {
    return "tutorial_thread";
  }
  if (category === "workflow" || category === "performance") {
    return "problem_solution";
  }
  if (["memory", "commands", "hooks", "skills", "automation"].includes(category)) {
    return "daily_tip";
  }
  if (achievement.description.length > 50) {
    return "daily_tip";
  }
  return "til";
}
__name(selectFormat, "selectFormat");
function generateHowTo(detection) {
  switch (detection.type) {
    case "file_contains":
      return `Add content matching the pattern to your CLAUDE.md file. Claude reads this at the start of every conversation!`;
    case "file_exists": {
      const paths = detection.paths || [detection.path];
      const formatted = paths?.map((p) => p?.replace("~/.claude/", "").replace("./", "")).filter(Boolean).join(" or ");
      if (detection.require_all) {
        return `Create both files: ${formatted}. Having separate user and project memories gives Claude the best context.`;
      }
      return `Create the file: ${formatted}`;
    }
    case "directory_exists":
      return `Initialize your project with the required directory structure.`;
    case "directory_has_files": {
      const count = detection.min_count || 1;
      return `Create ${count}+ files in the specified directory. Building a library of reusable components!`;
    }
    case "config_has_key":
      return `Add the "${detection.key}" setting to your Claude Code configuration. Check the docs for available options!`;
    case "config_count": {
      const count = detection.min_count || 1;
      return `Configure ${count}+ items in your settings. The more you customize, the better Claude works for you!`;
    }
    case "milestone":
      return detection.trigger || `Keep using Claude Code consistently. Progress unlocks naturally as you build your skills!`;
    case "manual":
      return detection.trigger || `Complete this action during your workflow. Every interaction teaches Claude something new!`;
    case "secret":
      return `This is a hidden achievement... keep exploring Claude Code to discover it! \u{1F52E}`;
    default:
      return `Check clauding.dev/quest for detailed unlock instructions.`;
  }
}
__name(generateHowTo, "generateHowTo");
function formatDailyTip(achievement, siteUrl) {
  const emoji = CATEGORY_EMOJI[achievement.category];
  const howTo = generateHowTo(achievement.detection);
  const main = `\u{1F4A1} Claude Code Tip

${achievement.description}

${howTo}

${emoji} ${CATEGORY_NAME[achievement.category]} | +${achievement.xp} XP

${siteUrl}/achievement/${achievement.id}`;
  const reply = `Want to track your Claude Code mastery?

Run /quest in Claude Code to install Claude Quest and see all 365 achievements.

${siteUrl}

#ClaudeCode #AI #CodingWithAI`;
  return { main, replies: [reply] };
}
__name(formatDailyTip, "formatDailyTip");
function formatDidYouKnow(achievement, siteUrl) {
  const emoji = CATEGORY_EMOJI[achievement.category];
  const main = `Did you know? \u{1F914}

${achievement.description}

${generateHowTo(achievement.detection)}

${emoji} +${achievement.xp} XP

${siteUrl}/achievement/${achievement.id}`;
  const reply = `Discover more Claude Code secrets at ${siteUrl}

Run /quest in Claude Code to track your progress!

#ClaudeCode #AI`;
  return { main, replies: [reply] };
}
__name(formatDidYouKnow, "formatDidYouKnow");
function formatProblemSolution(achievement, siteUrl) {
  const emoji = CATEGORY_EMOJI[achievement.category];
  const problems = {
    "workflow": "Wish your Claude Code workflow was smoother?",
    "performance": "Want Claude to work faster and smarter?",
    "automation": "Tired of repetitive tasks?",
    "collaboration": "Working with a team on Claude projects?",
    "security": "Concerned about security in your AI workflow?",
    "memory": "Claude forgetting your preferences?",
    "commands": "Want quick access to common actions?",
    "skills": "Need Claude to learn new tricks?",
    "agents": "Want Claude to handle complex tasks autonomously?",
    "hooks": "Need to automate around Claude actions?",
    "integrations": "Want Claude to connect with your tools?",
    "milestones": "Ready to level up?",
    "ai-mastery": "Want to get more from AI?",
    "customization": "Claude not fitting your style?",
    "testing": "Need reliable code from Claude?",
    "documentation": "Documentation getting messy?",
    "secrets": "Looking for hidden features?"
  };
  const problem = problems[achievement.category] || "Want to improve your Claude Code experience?";
  const main = `${problem} \u{1F914}

Here's a tip: ${achievement.description.toLowerCase()}

${generateHowTo(achievement.detection)}

${emoji} +${achievement.xp} XP
${siteUrl}/achievement/${achievement.id}`;
  const reply = `Track your Claude Code mastery: ${siteUrl}

Run /quest to get started!

#ClaudeCode #AI #DevTools`;
  return { main, replies: [reply] };
}
__name(formatProblemSolution, "formatProblemSolution");
function formatTutorialThread(achievement, siteUrl) {
  const emoji = CATEGORY_EMOJI[achievement.category];
  const howTo = generateHowTo(achievement.detection);
  const main = `${emoji} ${achievement.name}

${achievement.description}

Here's how to unlock it \u{1F9F5}`;
  const step1 = `Step 1: Understand what it does

${howTo}

This ${CATEGORY_NAME[achievement.category].toLowerCase()} achievement teaches you a key Claude Code pattern.`;
  const step2 = `Step 2: Try it yourself

The best way to learn is by doing. Open Claude Code and experiment with this feature.

+${achievement.xp} XP when you unlock it!`;
  const cta = `Want to master all 365 achievements?

Run /quest in Claude Code
Browse: ${siteUrl}

${siteUrl}/achievement/${achievement.id}

#ClaudeCode #AI`;
  return { main, replies: [step1, step2, cta] };
}
__name(formatTutorialThread, "formatTutorialThread");
function formatTIL(achievement, siteUrl) {
  const emoji = CATEGORY_EMOJI[achievement.category];
  const rarity = RARITY_EMOJI[achievement.rarity];
  const main = `TIL: ${achievement.description} ${emoji}

${rarity} ${achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)} | +${achievement.xp} XP

${siteUrl}/achievement/${achievement.id}`;
  const reply = `Track your Claude Code journey: ${siteUrl}

#ClaudeCode #AI`;
  return { main, replies: [reply] };
}
__name(formatTIL, "formatTIL");
function generateTweetThread(achievement, siteUrl) {
  const format = selectFormat(achievement);
  switch (format) {
    case "daily_tip":
      return formatDailyTip(achievement, siteUrl);
    case "did_you_know":
      return formatDidYouKnow(achievement, siteUrl);
    case "problem_solution":
      return formatProblemSolution(achievement, siteUrl);
    case "tutorial_thread":
      return formatTutorialThread(achievement, siteUrl);
    case "til":
      return formatTIL(achievement, siteUrl);
    default:
      return formatDailyTip(achievement, siteUrl);
  }
}
__name(generateTweetThread, "generateTweetThread");

// src/x-client.ts
var X_API_BASE = "https://api.twitter.com/2";
async function generateOAuthSignature(method, url, params, consumerSecret, tokenSecret) {
  const sortedParams = Object.keys(params).sort().map((key2) => `${encodeURIComponent(key2)}=${encodeURIComponent(params[key2])}`).join("&");
  const signatureBaseString = [
    method.toUpperCase(),
    encodeURIComponent(url),
    encodeURIComponent(sortedParams)
  ].join("&");
  const signingKey = `${encodeURIComponent(consumerSecret)}&${encodeURIComponent(tokenSecret)}`;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(signingKey),
    { name: "HMAC", hash: "SHA-1" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(signatureBaseString));
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}
__name(generateOAuthSignature, "generateOAuthSignature");
function generateNonce() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
}
__name(generateNonce, "generateNonce");
async function buildOAuthHeader(method, url, env) {
  const timestamp = Math.floor(Date.now() / 1e3).toString();
  const nonce = generateNonce();
  const oauthParams = {
    oauth_consumer_key: env.X_API_KEY,
    oauth_nonce: nonce,
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: timestamp,
    oauth_token: env.X_ACCESS_TOKEN,
    oauth_version: "1.0"
  };
  const signature = await generateOAuthSignature(
    method,
    url,
    oauthParams,
    env.X_API_SECRET,
    env.X_ACCESS_TOKEN_SECRET
  );
  oauthParams.oauth_signature = signature;
  const headerParts = Object.keys(oauthParams).sort().map((key) => `${encodeURIComponent(key)}="${encodeURIComponent(oauthParams[key])}"`).join(", ");
  return `OAuth ${headerParts}`;
}
__name(buildOAuthHeader, "buildOAuthHeader");
async function postTweet(text, env, replyToId) {
  const url = `${X_API_BASE}/tweets`;
  const body = { text };
  if (replyToId) {
    body.reply = { in_reply_to_tweet_id: replyToId };
  }
  const authHeader = await buildOAuthHeader("POST", url, env);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new XAPIError(
      `Failed to post tweet: ${response.status} ${response.statusText}`,
      response.status,
      errorText
    );
  }
  return response.json();
}
__name(postTweet, "postTweet");
async function postThread(thread, env) {
  const mainResponse = await postTweet(thread.main, env);
  let lastTweetId = mainResponse.data.id;
  for (const reply of thread.replies) {
    const replyResponse = await postTweet(reply, env, lastTweetId);
    lastTweetId = replyResponse.data.id;
  }
  return mainResponse.data.id;
}
__name(postThread, "postThread");
var XAPIError = class extends Error {
  static {
    __name(this, "XAPIError");
  }
  status;
  body;
  constructor(message, status, body) {
    super(message);
    this.name = "XAPIError";
    this.status = status;
    this.body = body;
  }
  isRetryable() {
    return this.status === 429 || this.status >= 500;
  }
};
async function withRetry(fn, maxRetries = 3, initialDelayMs = 1e3) {
  let lastError = null;
  let delay = initialDelayMs;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (error instanceof XAPIError && !error.isRetryable()) {
        throw error;
      }
      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
  }
  throw lastError;
}
__name(withRetry, "withRetry");

// src/index.ts
var MAX_RANDOM_DELAY_MS = 60 * 60 * 1e3;
async function getState(kv) {
  const postedIds = await kv.get("posted_ids", "json");
  const cycleCount = parseInt(await kv.get("cycle_count") || "0");
  const lastPostedId = await kv.get("last_posted_id") || void 0;
  const lastPostedAt = await kv.get("last_posted_at") || void 0;
  return {
    postedIds: postedIds || [],
    cycleCount,
    lastPostedId,
    lastPostedAt
  };
}
__name(getState, "getState");
async function savePosted(kv, achievementId, postedIds) {
  const updatedIds = [...postedIds, achievementId];
  await Promise.all([
    kv.put("posted_ids", JSON.stringify(updatedIds)),
    kv.put("last_posted_id", achievementId),
    kv.put("last_posted_at", (/* @__PURE__ */ new Date()).toISOString())
  ]);
}
__name(savePosted, "savePosted");
async function resetCycle(kv, currentCycleCount) {
  await Promise.all([
    kv.put("posted_ids", "[]"),
    kv.put("cycle_count", (currentCycleCount + 1).toString())
  ]);
}
__name(resetCycle, "resetCycle");
async function logError(kv, error) {
  try {
    const existing = await kv.get("error_log", "json") || [];
    const entry = {
      ...error,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    const updated = [...existing.slice(-99), entry];
    await kv.put("error_log", JSON.stringify(updated));
  } catch {
  }
}
__name(logError, "logError");
async function randomDelay() {
  const delay = Math.floor(Math.random() * MAX_RANDOM_DELAY_MS);
  console.log(`Adding random delay of ${Math.round(delay / 1e3 / 60)} minutes`);
  await new Promise((resolve) => setTimeout(resolve, delay));
}
__name(randomDelay, "randomDelay");
async function handleScheduled(env) {
  await randomDelay();
  const state = await getState(env.QUEST_BOT_STATE);
  let achievement = selectRandomUnposted(state.postedIds);
  if (!achievement) {
    console.log(`Cycle ${state.cycleCount + 1} complete! Resetting...`);
    await resetCycle(env.QUEST_BOT_STATE, state.cycleCount);
    achievement = selectRandomUnposted([]);
  }
  if (!achievement) {
    throw new Error("No achievements available - this should never happen");
  }
  console.log(`Selected achievement: ${achievement.id} (${achievement.name})`);
  const thread = generateTweetThread(achievement, env.SITE_URL);
  console.log(`Generated thread with ${thread.replies.length + 1} tweets`);
  try {
    const tweetId = await withRetry(() => postThread(thread, env));
    console.log(`Posted successfully! Tweet ID: ${tweetId}`);
    await savePosted(env.QUEST_BOT_STATE, achievement.id, state.postedIds);
    console.log(`Saved state. Remaining: ${getRemainingCount(state.postedIds) - 1}/${totalAchievements}`);
  } catch (error) {
    const err = error;
    console.error(`Failed to post: ${err.message}`);
    await logError(env.QUEST_BOT_STATE, {
      type: error instanceof XAPIError ? "x_api_error" : "unknown_error",
      message: err.message,
      achievementId: achievement.id
    });
    throw error;
  }
}
__name(handleScheduled, "handleScheduled");
async function handleFetch(request, env) {
  const url = new URL(request.url);
  if (url.pathname === "/status") {
    const state = await getState(env.QUEST_BOT_STATE);
    const remaining = getRemainingCount(state.postedIds);
    return new Response(JSON.stringify({
      totalAchievements,
      posted: state.postedIds.length,
      remaining,
      cycleCount: state.cycleCount,
      lastPostedId: state.lastPostedId,
      lastPostedAt: state.lastPostedAt
    }, null, 2), {
      headers: { "Content-Type": "application/json" }
    });
  }
  if (url.pathname === "/errors") {
    const errors = await env.QUEST_BOT_STATE.get("error_log", "json");
    return new Response(JSON.stringify(errors || [], null, 2), {
      headers: { "Content-Type": "application/json" }
    });
  }
  if (url.pathname === "/trigger" && request.method === "POST") {
    const authHeader = request.headers.get("X-Admin-Secret");
    const adminSecret = await env.QUEST_BOT_STATE.get("admin_secret");
    if (!adminSecret || authHeader !== adminSecret) {
      return new Response("Unauthorized", { status: 401 });
    }
    try {
      await handleScheduled(env);
      return new Response("Triggered successfully");
    } catch (error) {
      return new Response(`Failed: ${error.message}`, { status: 500 });
    }
  }
  if (url.pathname === "/preview") {
    const state = await getState(env.QUEST_BOT_STATE);
    const achievement = selectRandomUnposted(state.postedIds);
    if (!achievement) {
      return new Response("All achievements posted - cycle would reset", {
        headers: { "Content-Type": "text/plain" }
      });
    }
    const thread = generateTweetThread(achievement, env.SITE_URL);
    return new Response(JSON.stringify({
      achievement: {
        id: achievement.id,
        name: achievement.name,
        category: achievement.category,
        rarity: achievement.rarity,
        xp: achievement.xp
      },
      thread: {
        main: thread.main,
        replies: thread.replies,
        mainLength: thread.main.length,
        replyLengths: thread.replies.map((r) => r.length)
      }
    }, null, 2), {
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(`Claude Quest X Bot

Endpoints:
  GET  /status   - Bot state and stats
  GET  /errors   - Recent error log
  GET  /preview  - Preview next post
  POST /trigger  - Manual trigger (requires auth)

Daily posts at ~9-10 AM PT
`, {
    headers: { "Content-Type": "text/plain" }
  });
}
__name(handleFetch, "handleFetch");
var index_default = {
  async scheduled(_controller, env, _ctx) {
    await handleScheduled(env);
  },
  async fetch(request, env, _ctx) {
    return handleFetch(request, env);
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
