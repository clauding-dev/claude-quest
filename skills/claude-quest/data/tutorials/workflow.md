# Workflow Warrior Tutorials

Master Claude Code's workflow features to code faster and smarter.

## Working in Git Repositories

Claude understands git context automatically when you're in a repository.

### Check Repository Status

```bash
# Claude can see git status
> "What's the current git status?"

# Claude reads branch info
> "What branch am I on?"
```

### Common Git Workflows

```bash
# Create a feature branch
> "Create a new branch called feature/user-auth"

# Stage and commit changes
> "Commit these changes with a descriptive message"

# Create a pull request
> "Create a PR for this branch"
```

### Git Best Practices with Claude

```bash
# Start from develop (per project conventions)
git checkout develop
git pull

# Then ask Claude to create your feature branch
> "Create branch feature/new-feature from here"
```

---

## Plan Mode

Enter plan mode for complex tasks requiring strategic thinking.

### Entering Plan Mode

```bash
# Use the command
/plan

# Or use Shift+Tab to toggle
```

### What Plan Mode Does

- Claude outlines steps before executing
- No tools are used automatically
- You review and approve the plan
- Better for complex refactoring

### Example Plan Session

```bash
/plan
> "Refactor the authentication system to use JWT"

# Claude responds with:
# 1. Review current auth implementation
# 2. Identify files needing changes
# 3. Create JWT utility functions
# 4. Update auth middleware
# 5. Modify user routes
# 6. Update tests

# You can then say:
> "Execute the plan"
# or
> "Modify step 3 to also include refresh tokens"
```

---

## Creating Plan Files

Save plans as markdown for documentation or later execution.

### Manual Plan File

Create `.claude/plans/feature-name.md`:

```markdown
# Feature: User Authentication

## Goals
- Add JWT-based authentication
- Support refresh tokens
- Add session management

## Steps
1. Install dependencies: jsonwebtoken, bcrypt
2. Create /lib/auth.js with JWT helpers
3. Add /middleware/authenticate.js
4. Update user routes for login/logout
5. Add tests for auth flows

## Files to Modify
- package.json
- lib/auth.js (new)
- middleware/authenticate.js (new)
- routes/users.js
- tests/auth.test.js (new)
```

### Reference Plans in Prompts

```bash
> "Execute the plan in .claude/plans/feature-name.md"
```

---

## Configuring Default Permissions

Set permissions in `.claude/settings.json`:

```json
{
  "permissions": {
    "allow": [
      "Read",
      "Glob",
      "Grep"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Write(.env)"
    ],
    "askFirst": [
      "Bash",
      "Write"
    ]
  }
}
```

### Permission Levels

| Level | Behavior |
|-------|----------|
| `allow` | Always permitted, no prompts |
| `askFirst` | Prompt once per session |
| `deny` | Always blocked |

### Dangerously Skip Permissions (Not Recommended)

```bash
# For trusted automation only
claude --dangerously-skip-permissions
```

---

## Enabling Vim Mode

For vim-style keybindings in the input:

### Enable in Settings

```json
{
  "inputMode": "vim"
}
```

### Vim Mode Features

- `i` - Insert mode
- `Esc` - Normal mode
- `dd` - Delete line
- `yy` - Yank line
- `p` - Paste
- `/` - Search
- `:w` - Submit input

---

## Changing Output Style

Configure how Claude formats responses:

### Set Output Format

```json
{
  "outputStyle": "markdown"
}
```

### Available Styles

| Style | Description |
|-------|-------------|
| `markdown` | Rich formatting (default) |
| `plain` | Plain text, no formatting |
| `json` | JSON structured output |
| `minimal` | Condensed responses |

### Per-Session Override

```bash
# Start with specific format
claude --output-format json
```

---

## Using /context Command

Monitor your context window usage:

```bash
/context
```

Output:
```
Context Usage:
  Tokens used: 45,231 / 200,000 (22.6%)
  Files in context: 12
  Conversation turns: 34

Largest items:
  1. src/api/handlers.js (8,432 tokens)
  2. README.md (3,211 tokens)
  3. package.json (892 tokens)
```

### Context Tips

- Large files consume more context
- Use `/compact` to summarize conversation
- Start new sessions for unrelated tasks

---

## Using /cost Command

Track spending and token usage:

```bash
/cost
```

Output:
```
Session Cost:
  Input tokens:  45,231 ($0.068)
  Output tokens: 12,456 ($0.187)
  Total: $0.255

Daily Usage:
  Today: $2.34
  This week: $15.67
```

---

## Naming Sessions

Name sessions for easy reference and history:

### Name Current Session

```bash
/session name "auth-refactor"
```

### Start Named Session

```bash
claude --session "feature-work"
```

### List Sessions

```bash
/sessions
```

Output:
```
Recent Sessions:
  1. auth-refactor (2 hours ago)
  2. bug-fix-123 (yesterday)
  3. docs-update (3 days ago)
```

### Resume Named Session

```bash
claude --resume "auth-refactor"
```

---

## Using /rewind

Go back to earlier points in the conversation:

```bash
/rewind
```

### Rewind Options

```bash
# Rewind to specific turn
/rewind 5

# Rewind by number of turns
/rewind -3

# Show rewind points
/rewind --list
```

Output:
```
Rewind Points:
  Turn 1: Initial request about API structure
  Turn 3: Added error handling
  Turn 5: Refactored to use async/await
  Turn 7: Added tests (current)
```

### When to Use Rewind

- Claude went in wrong direction
- Want to try alternative approach
- Made a mistake in earlier instructions

---

## Running Commands in Background

Use `&` to run long-running tasks in background:

```bash
> "Run the test suite in background &"
```

### Background Task Features

- Claude continues conversation
- Task output captured
- Notification when complete

### Check Background Tasks

```bash
/tasks
```

Output:
```
Background Tasks:
  1. npm test (running, 45s)
  2. docker build (completed, exit 0)
```

### Practical Examples

```bash
# Long build in background
> "Build the Docker image in background &"

# Continue working
> "While that builds, let's update the README"

# Check on build
> "How's the Docker build going?"
```

---

## Workflow Cheatsheet

| Command | Action |
|---------|--------|
| `/plan` | Enter plan mode |
| `Shift+Tab` | Toggle plan mode |
| `/context` | Show context usage |
| `/cost` | Show session costs |
| `/session name "x"` | Name current session |
| `/sessions` | List recent sessions |
| `/rewind` | Go back in conversation |
| `/compact` | Summarize context |
| `/clear` | Clear conversation |
| `&` | Run in background |
| `/tasks` | Check background tasks |

---

## Tips

- Use plan mode for complex refactoring
- Name sessions for features you'll revisit
- Monitor context with `/context` on long sessions
- Background long tasks to stay productive
- Rewind early when Claude goes off track
- Set default permissions for faster workflows
