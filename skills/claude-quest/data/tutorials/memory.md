# Memory Keeper Tutorials

Master the art of persistent memory in Claude Code. Learn to create CLAUDE.md files, organize with rules, and reference external documentation.

---

## 1. Creating Your First CLAUDE.md

CLAUDE.md files give Claude context about you or your project. There are two levels:

### User-Level Memory (Global)

Create `~/.claude/CLAUDE.md` for instructions that apply to ALL your projects:

```markdown
# My Claude Instructions

## About Me
- I prefer Python 3.12 with type hints
- I use pytest for testing
- I like concise explanations

## Coding Style
- Use descriptive variable names
- Always add docstrings to functions
- Prefer composition over inheritance

## Communication
- Be direct, skip unnecessary caveats
- Show code examples when explaining
- Use bullet points for lists
```

### Project-Level Memory

Create `CLAUDE.md` in your project root for project-specific context:

```markdown
# Project: My Web App

## Tech Stack
- FastAPI backend
- React frontend
- PostgreSQL database

## Key Commands
- `make dev` - Start development server
- `make test` - Run test suite
- `make deploy` - Deploy to staging

## Architecture Notes
- Auth handled by /auth module
- All API routes in /api/v1/
- Shared types in /common/types.py
```

---

## 2. Organizing with Markdown Headers

Use headers to create logical sections Claude can reference:

```markdown
# Project Name

## Getting Started
Quick setup instructions here.

## Architecture
### Backend
Python FastAPI service structure.

### Frontend
React component organization.

### Database
Schema and migration info.

## Common Tasks
### Adding a New Endpoint
1. Create route in /api/routes/
2. Add schema in /api/schemas/
3. Register in /api/main.py

### Running Tests
```bash
pytest tests/ -v
```

## Gotchas
- Always restart server after env changes
- Database migrations must be reversible
```

---

## 3. Including Code Blocks

Add code examples Claude can reference and reuse:

```markdown
## Code Patterns

### Standard API Response
```python
from typing import TypeVar, Generic
from pydantic import BaseModel

T = TypeVar('T')

class APIResponse(BaseModel, Generic[T]):
    success: bool
    data: T | None = None
    error: str | None = None
```

### Database Connection
```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

### React Component Template
```tsx
interface Props {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: Props) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```
```

---

## 4. Creating Rules Files

For complex projects, split instructions into `.claude/rules/*.md` files:

### Directory Structure
```
.claude/
  rules/
    testing.md
    security.md
    database.md
    api-design.md
```

### Example: .claude/rules/testing.md
```markdown
# Testing Rules

## Test Organization
- Unit tests go in `tests/unit/`
- Integration tests go in `tests/integration/`
- E2E tests go in `tests/e2e/`

## Naming Convention
- Test files: `test_<module_name>.py`
- Test functions: `test_<action>_<condition>_<expected>`

## Required Fixtures
Always use these shared fixtures:
- `db_session` - Fresh database session
- `test_user` - Authenticated user
- `api_client` - TestClient instance

## Coverage Requirements
- Minimum 80% coverage for new code
- All public functions must have tests
```

### Example: .claude/rules/security.md
```markdown
# Security Rules

## Input Validation
- Always validate user input with Pydantic
- Never trust client-side validation alone
- Sanitize all string inputs

## Authentication
- Use JWT tokens with short expiry (1 hour)
- Refresh tokens stored in httpOnly cookies
- Always hash passwords with bcrypt

## Sensitive Data
- Never log passwords or tokens
- Use environment variables for secrets
- Encrypt PII at rest
```

---

## 5. Using @import Syntax

Import external files or documentation into your CLAUDE.md:

```markdown
# Project Context

## API Documentation
@import ./docs/api-reference.md

## Database Schema
@import ./database/schema.sql

## Configuration
@import ./config/settings.py
```

### Importing Specific Sections
```markdown
## Testing Guide
@import ./docs/testing.md#unit-tests

## Deployment Steps
@import ./docs/deployment.md#staging-deploy
```

---

## 6. Referencing External Documentation

Point Claude to external resources:

```markdown
# External References

## Official Docs
- FastAPI: https://fastapi.tiangolo.com/
- SQLAlchemy: https://docs.sqlalchemy.org/
- React: https://react.dev/

## Internal Wiki
- Architecture Decision Records: ./docs/adr/
- API Changelog: ./docs/api-changelog.md
- Runbook: ./docs/runbook.md

## Style Guides
Follow these external standards:
- Python: PEP 8 with Black formatting
- TypeScript: Airbnb style guide
- Git commits: Conventional Commits spec
```

---

## Quick Reference

| File Location | Scope | Purpose |
|--------------|-------|---------|
| `~/.claude/CLAUDE.md` | Global | Your personal preferences |
| `./CLAUDE.md` | Project | Project-specific context |
| `./.claude/rules/*.md` | Project | Organized rule sets |

### Best Practices

1. **Keep it current** - Update CLAUDE.md as your project evolves
2. **Be specific** - Concrete examples work better than vague guidelines
3. **Prioritize** - Put most important info at the top
4. **Test it** - Ask Claude questions to verify it's using your context
5. **Version control** - Commit your CLAUDE.md with your project
