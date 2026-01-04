# Integration Explorer Tutorials

Connect Claude Code to external tools, services, and IDEs using MCP servers and integrations.

## MCP Server Configuration

MCP (Model Context Protocol) servers extend Claude's capabilities with custom tools and resources.

### Configuration Locations

```bash
# Project-level (recommended) - takes precedence
.mcp.json

# User-level
~/.claude/settings.json
```

### Basic .mcp.json Structure

```json
{
  "mcpServers": {
    "server-name": {
      "command": "executable",
      "args": ["arg1", "arg2"],
      "env": {
        "API_KEY": "your-key"
      }
    }
  }
}
```

---

## Stdio vs HTTP/SSE Servers

### Stdio Servers (Most Common)

Run as local processes, communicate via stdin/stdout:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    }
  }
}
```

### HTTP/SSE Servers

Connect to remote HTTP endpoints:

```json
{
  "mcpServers": {
    "remote-api": {
      "url": "https://api.example.com/mcp",
      "transport": "sse"
    }
  }
}
```

---

## Common MCP Server Configurations

### Filesystem Access

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."]
    }
  }
}
```

### GitHub Integration

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxx"
      }
    }
  }
}
```

### PostgreSQL Database

```json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://user:pass@localhost:5432/mydb"
      }
    }
  }
}
```

### SQLite Database

```json
{
  "mcpServers": {
    "sqlite": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sqlite", "./data.db"]
    }
  }
}
```

### Brave Search

```json
{
  "mcpServers": {
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your-key"
      }
    }
  }
}
```

### Memory/Notes

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

### Slack Integration

```json
{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-xxxx",
        "SLACK_TEAM_ID": "T12345"
      }
    }
  }
}
```

---

## Using MCP Resources with @ Syntax

Reference MCP resources directly in your prompts:

```bash
# Reference a file resource
@filesystem://path/to/file.txt

# Reference a database schema
@postgres://schema/users

# Reference a GitHub issue
@github://issues/123
```

---

## Enabling Plugins

Plugins add pre-built integrations. Enable in settings:

```json
{
  "enabledPlugins": [
    "plugin-name"
  ]
}
```

Or enable interactively:

```bash
# In Claude Code
/plugins
```

---

## Custom Status Line

Configure what appears in Claude's status bar:

```json
{
  "statusLine": {
    "show": true,
    "components": ["git", "cost", "tokens"]
  }
}
```

---

## IDE Integrations

### VS Code Extension

1. Install "Claude Code" from VS Code marketplace
2. Open command palette: `Cmd+Shift+P`
3. Run: "Claude: Start Claude Code"

Features:
- Inline code suggestions
- Chat panel integration
- File context awareness

### JetBrains Plugin

1. Go to Settings > Plugins > Marketplace
2. Search "Claude Code"
3. Install and restart IDE

Access via:
- Tool window: View > Tool Windows > Claude
- Keyboard shortcut: `Cmd+Shift+C`

---

## GitHub App Connection

Connect Claude to GitHub for enhanced repository access:

```bash
# Authenticate with GitHub
gh auth login

# Claude automatically uses your GitHub CLI credentials
```

For organization repos, ensure the Claude GitHub App is installed:
1. Go to github.com/settings/installations
2. Configure Claude Code app
3. Grant repository access

---

## OAuth with MCP Servers

Some MCP servers support OAuth authentication:

```json
{
  "mcpServers": {
    "oauth-service": {
      "command": "npx",
      "args": ["-y", "mcp-server-oauth"],
      "oauth": {
        "clientId": "your-client-id",
        "authUrl": "https://service.com/oauth/authorize",
        "tokenUrl": "https://service.com/oauth/token",
        "scopes": ["read", "write"]
      }
    }
  }
}
```

Claude will prompt for OAuth login on first use.

---

## Connecting to Database MCPs

### Read-Only Mode (Recommended)

```json
{
  "mcpServers": {
    "prod-db": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://readonly:pass@prod.db.com/main",
        "READ_ONLY": "true"
      }
    }
  }
}
```

### Query Timeout Protection

```json
{
  "mcpServers": {
    "analytics-db": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://user:pass@localhost/analytics",
        "QUERY_TIMEOUT_MS": "30000"
      }
    }
  }
}
```

---

## Building Your Own MCP Server

### Quick Start with TypeScript

```bash
# Create project
mkdir my-mcp-server && cd my-mcp-server
npm init -y
npm install @modelcontextprotocol/sdk

# Create server
touch index.ts
```

### Minimal Server Template

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server({
  name: "my-server",
  version: "1.0.0"
}, {
  capabilities: {
    tools: {}
  }
});

// Register a tool
server.setRequestHandler("tools/list", async () => ({
  tools: [{
    name: "hello",
    description: "Say hello",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string" }
      }
    }
  }]
}));

server.setRequestHandler("tools/call", async (request) => {
  if (request.params.name === "hello") {
    return {
      content: [{ type: "text", text: `Hello, ${request.params.arguments.name}!` }]
    };
  }
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
```

### Register Your Server

```json
{
  "mcpServers": {
    "my-server": {
      "command": "npx",
      "args": ["ts-node", "/path/to/my-mcp-server/index.ts"]
    }
  }
}
```

---

## Troubleshooting

### MCP Server Not Connecting

1. Check server is installed: `npx -y @modelcontextprotocol/server-name --help`
2. Verify .mcp.json syntax is valid JSON
3. Restart Claude Code after config changes (`/exit` and reopen)

### Environment Variables Not Loading

Ensure variables are in the `env` block:

```json
{
  "mcpServers": {
    "server": {
      "command": "...",
      "env": {
        "VAR_NAME": "value"
      }
    }
  }
}
```

### Permission Errors

Check file permissions and paths are absolute or valid relative to project root.

---

## Tips

- Start with project-level `.mcp.json` for portability
- Use environment variables for secrets, never hardcode
- Restart Claude Code after .mcp.json changes
- Test MCP servers standalone before integrating
- Use read-only database connections for safety
