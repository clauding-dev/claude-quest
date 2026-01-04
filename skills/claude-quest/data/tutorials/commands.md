# Command Crafter Tutorials

Build powerful custom slash commands to automate your workflows. Learn placeholders, frontmatter configuration, and multi-step commands.

---

## 1. Creating Your First Command

Commands are markdown files that become slash commands in Claude Code.

### Command Locations

- **User commands**: `~/.claude/commands/` (available everywhere)
- **Project commands**: `.claude/commands/` (project-specific)

### Basic Command Structure

Create `~/.claude/commands/hello.md`:

```markdown
Say hello to the user and tell them something interesting about Claude Code.
```

Now you can use `/hello` in any Claude Code session!

### With Frontmatter

Create `.claude/commands/explain.md`:

```markdown
---
description: Explain a piece of code in detail
---

Explain the following code in detail. Cover:
1. What it does
2. How it works
3. Any potential issues or improvements

$ARGUMENTS
```

---

## 2. Using Argument Placeholders

Pass dynamic values to your commands:

### $ARGUMENTS - All Arguments

```markdown
---
description: Search codebase for a pattern
---

Search the entire codebase for: $ARGUMENTS

Show me:
- All matching files
- Context around each match
- Suggestions for refactoring if it's a common pattern
```

Usage: `/search TODO comments`

### Numbered Arguments: $1, $2, $3

```markdown
---
description: Create a new component
allowed-tools: Write, Read, Glob
---

Create a new React component:
- Name: $1
- Type: $2 (either "page" or "component")
- Location: src/$2s/$1/

Include:
- Main component file
- Types file
- Test file
- Index export
```

Usage: `/component UserProfile page`

### Mixed Arguments

```markdown
---
description: Generate API endpoint
---

Create a new API endpoint:
- Resource name: $1
- HTTP method: $2
- Additional requirements: $ARGUMENTS

Follow our standard patterns in src/api/routes/
```

Usage: `/endpoint users POST with pagination and filtering`

---

## 3. Frontmatter Configuration

Control command behavior with frontmatter options:

### Full Frontmatter Example

```markdown
---
description: Deploy to staging environment
allowed-tools: Bash, Read, Grep
model: claude-sonnet-4-20250514
---

Deploy the current branch to staging:

1. Run tests first
2. Build the application
3. Deploy to staging server
4. Verify deployment health

$ARGUMENTS
```

### Available Frontmatter Options

| Option | Description | Example |
|--------|-------------|---------|
| `description` | Shows in command list | `description: Run test suite` |
| `allowed-tools` | Restrict available tools | `allowed-tools: Bash, Read` |
| `model` | Override default model | `model: claude-sonnet-4-20250514` |

---

## 4. Namespace Directories

Organize related commands in directories:

### Directory Structure

```
.claude/commands/
  db/
    migrate.md
    seed.md
    reset.md
  test/
    unit.md
    integration.md
    coverage.md
  deploy/
    staging.md
    production.md
    rollback.md
```

### Namespaced Commands

Create `.claude/commands/db/migrate.md`:

```markdown
---
description: Run database migrations
allowed-tools: Bash
---

Run database migrations:
- Check for pending migrations
- Apply them in order
- Report any issues

If $ARGUMENTS is provided, migrate to that specific version.
```

Usage: `/db/migrate` or `/db/migrate 2024_01_15`

Create `.claude/commands/test/coverage.md`:

```markdown
---
description: Run tests with coverage report
allowed-tools: Bash, Read
---

Run the test suite with coverage:

1. Execute: pytest --cov=src --cov-report=html
2. Show coverage summary
3. Identify files below 80% coverage
4. Suggest tests for uncovered code in: $ARGUMENTS
```

Usage: `/test/coverage src/api/`

---

## 5. Multi-Step Workflow Commands

Create complex workflows that guide Claude through multiple steps:

### Code Review Command

Create `.claude/commands/review.md`:

```markdown
---
description: Comprehensive code review
allowed-tools: Read, Grep, Glob, Bash
---

Perform a comprehensive code review:

## Step 1: Understand Changes
- Identify all modified files
- Summarize what changed and why

## Step 2: Code Quality
Check for:
- Code style consistency
- Proper error handling
- Performance concerns
- Security issues

## Step 3: Testing
- Verify test coverage for changes
- Suggest additional test cases

## Step 4: Documentation
- Check if docs need updates
- Verify comments are accurate

## Step 5: Summary
Provide:
- Overall assessment (approve/request changes)
- Prioritized list of issues
- Specific suggestions with code examples

Focus on: $ARGUMENTS
```

### Feature Development Command

Create `.claude/commands/feature.md`:

```markdown
---
description: Guided feature development
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

Help me build a new feature: $1

## Phase 1: Planning
- Understand the requirement
- Identify affected files
- Propose implementation approach
- Wait for my approval

## Phase 2: Implementation
- Create/modify necessary files
- Follow existing patterns in codebase
- Add proper types and validation

## Phase 3: Testing
- Write unit tests
- Write integration tests if needed
- Verify all tests pass

## Phase 4: Documentation
- Update relevant docs
- Add inline comments for complex logic

## Phase 5: Review
- Show summary of all changes
- Highlight any concerns
- Suggest follow-up tasks

Additional context: $ARGUMENTS
```

### Deploy Pipeline Command

Create `.claude/commands/deploy/full.md`:

```markdown
---
description: Full deployment pipeline
allowed-tools: Bash, Read
---

Execute full deployment pipeline to $1:

## Pre-flight Checks
1. Verify clean git status
2. Ensure on correct branch
3. Run linter
4. Run test suite

## Build
1. Install dependencies
2. Build application
3. Verify build artifacts

## Deploy
1. Push to $1 environment
2. Wait for deployment to complete
3. Run smoke tests

## Post-Deploy
1. Verify health endpoints
2. Check error rates
3. Report deployment status

Abort if any step fails. Additional options: $ARGUMENTS
```

---

## Quick Reference

### Command File Template

```markdown
---
description: What this command does
allowed-tools: Tool1, Tool2
---

Your prompt here.

Use $ARGUMENTS for all args.
Use $1, $2, $3 for specific args.
```

### Common Patterns

| Pattern | Use Case |
|---------|----------|
| Single file in root | Simple, standalone commands |
| Namespaced directories | Related command groups |
| Multi-step workflows | Complex, guided processes |
| Restricted tools | Safety-critical operations |

### Tips

1. **Restart required** - New commands need a session restart to appear
2. **Test incrementally** - Build commands step by step
3. **Be explicit** - Clear instructions produce better results
4. **Use allowed-tools** - Restrict tools for safer, faster commands
5. **Document usage** - Good descriptions help you remember commands
