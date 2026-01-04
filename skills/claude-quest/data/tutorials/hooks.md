# Hook Handler Tutorials

Hooks let you intercept Claude Code events and run custom logic before, during, or after operations.

## Hook Configuration Location

Hooks are configured in your Claude settings file:

```bash
# User-level settings
~/.claude/settings.json

# Project-level settings (takes precedence)
.claude/settings.json
```

## Hook Structure

Every hook has this structure:

```json
{
  "hooks": {
    "<event_type>": [
      {
        "matcher": "<optional_pattern>",
        "command": "<shell_command_to_run>"
      }
    ]
  }
}
```

---

## PreToolUse Hooks

Run before a tool executes. Return non-zero to block the operation.

### Block Dangerous File Deletions

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "command": "if echo \"$TOOL_INPUT\" | grep -q 'rm -rf /'; then echo 'BLOCKED: Dangerous delete'; exit 1; fi"
      }
    ]
  }
}
```

### Log All Tool Usage

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "command": "echo \"$(date): Using $TOOL_NAME\" >> ~/.claude/tool.log"
      }
    ]
  }
}
```

### Prevent Writes to Production Config

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write",
        "command": "if echo \"$TOOL_INPUT\" | grep -qE 'production\\.json|prod\\.env'; then echo 'Cannot modify production files'; exit 1; fi"
      }
    ]
  }
}
```

---

## PostToolUse Hooks

Run after a tool completes successfully.

### Notify on Git Commits

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Bash",
        "command": "if echo \"$TOOL_INPUT\" | grep -q 'git commit'; then osascript -e 'display notification \"Commit created\" with title \"Claude Code\"'; fi"
      }
    ]
  }
}
```

### Auto-Format After File Writes

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "command": "if echo \"$TOOL_INPUT\" | grep -qE '\\.py$'; then black \"$(echo $TOOL_INPUT | jq -r .file_path)\"; fi"
      }
    ]
  }
}
```

---

## PermissionRequest Hooks

Intercept permission prompts before they reach the user.

### Auto-Approve Specific Directories

```json
{
  "hooks": {
    "PermissionRequest": [
      {
        "command": "if echo \"$PERMISSION_PATH\" | grep -q '/tmp/scratch'; then echo 'approve'; fi"
      }
    ]
  }
}
```

---

## SessionStart and SessionEnd Hooks

Run when Claude Code sessions begin or end.

### Session Startup

```json
{
  "hooks": {
    "SessionStart": [
      {
        "command": "echo \"Session started: $(date)\" >> ~/.claude/sessions.log"
      },
      {
        "command": "git fetch --quiet 2>/dev/null || true"
      }
    ]
  }
}
```

### Session Cleanup

```json
{
  "hooks": {
    "SessionEnd": [
      {
        "command": "echo \"Session ended: $(date)\" >> ~/.claude/sessions.log"
      }
    ]
  }
}
```

---

## Stop Event Hooks

Run when Claude stops generating (interrupted or completed).

```json
{
  "hooks": {
    "Stop": [
      {
        "command": "echo \"Claude stopped at $(date)\" >> ~/.claude/activity.log"
      }
    ]
  }
}
```

---

## Targeting Specific Tools with Matchers

The `matcher` field filters which tool triggers the hook:

| Matcher Value | Tools Matched |
|---------------|---------------|
| `"Bash"` | Only Bash commands |
| `"Write"` | Only file writes |
| `"Edit"` | Only file edits |
| `"Read"` | Only file reads |
| `"Glob"` | Only glob searches |
| `"Grep"` | Only grep searches |
| `"WebFetch"` | Only web fetches |
| (omitted) | All tools |

### Multiple Matchers

Use separate hook entries for different tools:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write",
        "command": "echo 'Writing file...' >> ~/.claude/writes.log"
      },
      {
        "matcher": "Bash",
        "command": "echo 'Running command...' >> ~/.claude/bash.log"
      }
    ]
  }
}
```

---

## Chaining Multiple Hooks

Hooks run in array order. All hooks execute unless one exits non-zero.

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "command": "echo 'Hook 1: Logging'"
      },
      {
        "command": "echo 'Hook 2: Validating'"
      },
      {
        "command": "echo 'Hook 3: Final check'"
      }
    ]
  }
}
```

---

## Safety Hooks Examples

### Prevent Force Push to Main

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "command": "if echo \"$TOOL_INPUT\" | grep -qE 'git push.*(--force|-f).*(main|master)'; then echo 'BLOCKED: Force push to main'; exit 1; fi"
      }
    ]
  }
}
```

### Block Secret File Access

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Read",
        "command": "if echo \"$TOOL_INPUT\" | grep -qE '\\.env|secrets|credentials|password'; then echo 'BLOCKED: Cannot read secret files'; exit 1; fi"
      }
    ]
  }
}
```

### Require Confirmation for Destructive Operations

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "command": "if echo \"$TOOL_INPUT\" | grep -qE 'drop|delete|truncate|destroy'; then echo 'WARNING: Destructive operation detected'; fi"
      }
    ]
  }
}
```

---

## Environment Variables in Hooks

Hooks receive context via environment variables:

| Variable | Description |
|----------|-------------|
| `TOOL_NAME` | Name of the tool being used |
| `TOOL_INPUT` | JSON input to the tool |
| `SESSION_ID` | Current session identifier |
| `PERMISSION_PATH` | Path being accessed (PermissionRequest) |

---

## Complete Example Configuration

```json
{
  "hooks": {
    "SessionStart": [
      {
        "command": "git fetch --quiet 2>/dev/null || true"
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "command": "if echo \"$TOOL_INPUT\" | grep -qE 'rm -rf|drop database'; then exit 1; fi"
      },
      {
        "command": "echo \"$(date) $TOOL_NAME\" >> ~/.claude/audit.log"
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write",
        "command": "echo \"Wrote: $TOOL_INPUT\" >> ~/.claude/writes.log"
      }
    ],
    "SessionEnd": [
      {
        "command": "echo 'Session complete' >> ~/.claude/sessions.log"
      }
    ]
  }
}
```

---

## Tips

- Test hooks with simple `echo` commands first
- Use `exit 1` to block operations in PreToolUse
- Keep hooks fast - they run synchronously
- Log to files for debugging complex hook chains
- Combine with Claude's built-in permissions for defense in depth
