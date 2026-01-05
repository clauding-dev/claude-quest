#!/usr/bin/env python3
"""Sync achievements.json to web dashboard questData.ts"""

import json
from pathlib import Path

# Paths
PROJECT_ROOT = Path(__file__).parent.parent
ACHIEVEMENTS_PATH = PROJECT_ROOT / "skills/claude-quest/data/achievements.json"
QUEST_DATA_PATH = PROJECT_ROOT / "web/src/data/questData.ts"

# Category metadata (icons, descriptions, colors)
CATEGORY_META = {
    "memory": {
        "name": "Memory Keeper",
        "icon": "📝",
        "description": "Master CLAUDE.md files and project memory systems",
        "color": "#10b981"
    },
    "commands": {
        "name": "Command Crafter",
        "icon": "🛠️",
        "description": "Create powerful custom slash commands",
        "color": "#3b82f6"
    },
    "skills": {
        "name": "Skill Weaver",
        "icon": "✨",
        "description": "Build and deploy reusable skills",
        "color": "#8b5cf6"
    },
    "agents": {
        "name": "Agent Architect",
        "icon": "🤖",
        "description": "Design and configure custom AI agents",
        "color": "#ec4899"
    },
    "hooks": {
        "name": "Hook Master",
        "icon": "🎣",
        "description": "Automate with lifecycle hooks",
        "color": "#f59e0b"
    },
    "integrations": {
        "name": "Integrator",
        "icon": "🔌",
        "description": "Connect MCP servers and external tools",
        "color": "#06b6d4"
    },
    "workflow": {
        "name": "Workflow Wizard",
        "icon": "🔄",
        "description": "Optimize your development workflow",
        "color": "#84cc16"
    },
    "milestones": {
        "name": "Champion",
        "icon": "👑",
        "description": "Legendary meta-achievements",
        "color": "#eab308"
    },
    "automation": {
        "name": "Automator",
        "icon": "⚡",
        "description": "Automate repetitive tasks with Claude",
        "color": "#f472b6"
    },
    "collaboration": {
        "name": "Collaborator",
        "icon": "🤝",
        "description": "Work effectively in teams",
        "color": "#22d3ee"
    },
    "performance": {
        "name": "Optimizer",
        "icon": "🚀",
        "description": "Maximize efficiency and performance",
        "color": "#a78bfa"
    },
    "security": {
        "name": "Guardian",
        "icon": "🛡️",
        "description": "Secure your code and configurations",
        "color": "#ef4444"
    },
    "ai-mastery": {
        "name": "AI Master",
        "icon": "🧠",
        "description": "Master advanced AI interaction techniques",
        "color": "#6366f1"
    },
    "customization": {
        "name": "Customizer",
        "icon": "🎨",
        "description": "Personalize your Claude experience",
        "color": "#f97316"
    },
    "testing": {
        "name": "Test Master",
        "icon": "🧪",
        "description": "Write and maintain quality tests",
        "color": "#14b8a6"
    },
    "documentation": {
        "name": "Documentarian",
        "icon": "📚",
        "description": "Create excellent documentation",
        "color": "#8b5cf6"
    },
    "secrets": {
        "name": "Secret Seeker",
        "icon": "🔮",
        "description": "Discover hidden features and easter eggs",
        "color": "#a855f7"
    }
}

def escape_string(s):
    """Escape string for TypeScript"""
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("'", "\\'")

def generate_quest_data():
    # Load achievements
    with open(ACHIEVEMENTS_PATH) as f:
        data = json.load(f)

    achievements = data["achievements"]
    categories = data["categories"]

    # Build category type union
    category_union = " | ".join(f"'{c}'" for c in categories)

    # Build categories array
    categories_ts = []
    for cat_id in categories:
        meta = CATEGORY_META.get(cat_id, {
            "name": cat_id.title(),
            "icon": "📦",
            "description": f"Achievements for {cat_id}",
            "color": "#6b7280"
        })
        categories_ts.append(f"""  {{
    id: '{cat_id}',
    name: '{meta["name"]}',
    icon: '{meta["icon"]}',
    description: '{escape_string(meta["description"])}',
    color: '{meta["color"]}'
  }}""")

    # Build achievements array
    achievements_ts = []
    for a in achievements:
        hint = a.get("hint", f"Unlock: {a['description']}")
        achievements_ts.append(
            f'  {{ id: "{a["id"]}", name: "{escape_string(a["name"])}", '
            f'description: "{escape_string(a["description"])}", '
            f'category: "{a["category"]}", xp: {a["xp"]}, '
            f'hint: "{escape_string(hint)}" }}'
        )

    # Generate TypeScript file
    ts_content = f'''// Achievement and category data for Claude Quest
// Auto-generated from achievements.json - DO NOT EDIT MANUALLY

export interface Achievement {{
  id: string;
  name: string;
  description: string;
  category: Category;
  xp: number;
  hint?: string; // How to unlock this achievement
}}

export type Category =
  | {category_union};

export interface CategoryInfo {{
  id: Category;
  name: string;
  icon: string;
  description: string;
  color: string;
}}

export const categories: CategoryInfo[] = [
{",\n".join(categories_ts)}
];

export const achievements: Achievement[] = [
{",\n".join(achievements_ts)}
];

// Helper functions
export const getTotalXP = (): number => {{
  return achievements.reduce((sum, a) => sum + a.xp, 0);
}};

export const getAchievementsByCategory = (category: Category): Achievement[] => {{
  return achievements.filter(a => a.category === category);
}};

export const getCategoryInfo = (category: Category): CategoryInfo | undefined => {{
  return categories.find(c => c.id === category);
}};

export const getAchievementById = (id: string): Achievement | undefined => {{
  return achievements.find(a => a.id === id);
}};

export const getAchievementIndex = (id: string): number => {{
  return achievements.findIndex(a => a.id === id) + 1; // 1-indexed for CLI
}};

export const getAchievementByIndex = (index: number): Achievement | undefined => {{
  return achievements[index - 1]; // Convert from 1-indexed
}};

export const getCategoryAchievementCount = (category: Category): number => {{
  return achievements.filter(a => a.category === category).length;
}};

export const getCategoryTotalXP = (category: Category): number => {{
  return achievements.filter(a => a.category === category).reduce((sum, a) => sum + a.xp, 0);
}};

export const GITHUB_URL = 'https://github.com/SeanZoR/claude-quest';
export const WEB_URL = 'https://seanzor.github.io/claude-quest';
export const INSTALL_COMMAND = 'curl -sSL https://raw.githubusercontent.com/SeanZoR/claude-quest/main/install.sh | bash';
'''

    # Write output
    with open(QUEST_DATA_PATH, 'w') as f:
        f.write(ts_content)

    print(f"Generated {QUEST_DATA_PATH}")
    print(f"  Categories: {len(categories)}")
    print(f"  Achievements: {len(achievements)}")
    print(f"  Total XP: {sum(a['xp'] for a in achievements)}")

if __name__ == "__main__":
    generate_quest_data()
