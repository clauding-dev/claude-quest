# Skill Builder Tutorials

Create powerful skills that extend Claude's capabilities with specialized knowledge and tools. Learn to build complete skill packages with supporting files and scripts.

---

## 1. Understanding Skills

Skills are specialized capability packages that Claude can invoke. Unlike commands (which you run), skills are triggered contextually or explicitly.

### Skill Locations

- **User skills**: `~/.claude/skills/<skill-name>/SKILL.md`
- **Project skills**: `.claude/skills/<skill-name>/SKILL.md`

### Basic Skill Structure

```
~/.claude/skills/
  code-reviewer/
    SKILL.md           # Main skill definition (required)
    reference.md       # Supporting documentation
    examples.md        # Example patterns
    scripts/
      analyze.py       # Helper scripts
```

---

## 2. Creating Your First Skill

Create a simple documentation skill:

### Directory Setup

```bash
mkdir -p ~/.claude/skills/doc-writer
```

### SKILL.md

Create `~/.claude/skills/doc-writer/SKILL.md`:

```markdown
---
description: Generate comprehensive documentation for code
triggers:
  - document this
  - write docs for
  - create documentation
allowed-tools: Read, Write, Glob
---

# Documentation Writer Skill

You are a technical documentation specialist. When invoked, generate clear, comprehensive documentation.

## Documentation Standards

### For Functions/Methods
- Purpose and behavior
- Parameters with types and descriptions
- Return value description
- Usage examples
- Edge cases and errors

### For Classes
- Class purpose and responsibility
- Constructor parameters
- Public methods summary
- Usage example
- Inheritance notes

### For Modules
- Module overview
- Key exports
- Dependencies
- Configuration options
- Quick start example

## Output Format
Generate documentation in markdown format suitable for:
- README files
- API documentation
- Inline docstrings
```

---

## 3. Adding Supporting Files

Enhance skills with reference materials and examples:

### reference.md

Create `~/.claude/skills/doc-writer/reference.md`:

```markdown
# Documentation Reference

## Markdown Conventions

### Code Blocks
Use language identifiers:
```python
def example():
    pass
```

### Admonitions
> **Note**: Important information
> **Warning**: Potential issues
> **Tip**: Helpful suggestions

## JSDoc Style
```javascript
/**
 * Calculates the sum of two numbers.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 * @example
 * add(2, 3) // returns 5
 */
```

## Python Docstrings
```python
def function(param1: str, param2: int) -> bool:
    """Short description.

    Longer description if needed.

    Args:
        param1: Description of param1.
        param2: Description of param2.

    Returns:
        Description of return value.

    Raises:
        ValueError: When param1 is empty.
    """
```
```

### examples.md

Create `~/.claude/skills/doc-writer/examples.md`:

```markdown
# Documentation Examples

## Example 1: Simple Function

### Input
```python
def calculate_discount(price, percentage):
    return price * (1 - percentage / 100)
```

### Output
```python
def calculate_discount(price: float, percentage: float) -> float:
    """Calculate discounted price.

    Args:
        price: Original price in dollars.
        percentage: Discount percentage (0-100).

    Returns:
        The price after applying the discount.

    Example:
        >>> calculate_discount(100, 20)
        80.0
    """
    return price * (1 - percentage / 100)
```

## Example 2: Class Documentation

### Input
```python
class UserService:
    def __init__(self, db):
        self.db = db

    def get_user(self, user_id):
        return self.db.query(User).get(user_id)
```

### Output
```python
class UserService:
    """Service for user-related operations.

    Provides methods for querying and managing user data
    through the database connection.

    Attributes:
        db: Database session for queries.

    Example:
        >>> service = UserService(db_session)
        >>> user = service.get_user(123)
    """
```
```

---

## 4. Creating Scripts

Add executable scripts for complex operations:

### scripts/ Directory

Create `~/.claude/skills/code-analyzer/scripts/complexity.py`:

```python
#!/usr/bin/env python3
"""Analyze code complexity metrics."""

import ast
import sys
from pathlib import Path

def analyze_complexity(filepath: str) -> dict:
    """Calculate complexity metrics for a Python file."""
    with open(filepath) as f:
        tree = ast.parse(f.read())

    metrics = {
        "functions": 0,
        "classes": 0,
        "lines": 0,
        "imports": 0,
    }

    for node in ast.walk(tree):
        if isinstance(node, ast.FunctionDef):
            metrics["functions"] += 1
        elif isinstance(node, ast.ClassDef):
            metrics["classes"] += 1
        elif isinstance(node, (ast.Import, ast.ImportFrom)):
            metrics["imports"] += 1

    metrics["lines"] = len(open(filepath).readlines())

    return metrics

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: complexity.py <filepath>")
        sys.exit(1)

    result = analyze_complexity(sys.argv[1])
    for key, value in result.items():
        print(f"{key}: {value}")
```

Reference in SKILL.md:

```markdown
## Using Helper Scripts

Run complexity analysis:
```bash
python3 ~/.claude/skills/code-analyzer/scripts/complexity.py <file>
```
```

---

## 5. Skill Frontmatter Options

Configure skill behavior with frontmatter:

```markdown
---
# Required
description: What this skill does

# Optional - Trigger phrases
triggers:
  - phrase one
  - phrase two
  - when user says this

# Optional - Restrict tools
allowed-tools: Read, Write, Bash, Glob

# Optional - Always include these files
include-files:
  - reference.md
  - examples.md
---
```

---

## 6. Complete Skill Example

Here's a full-featured API testing skill:

### Directory Structure

```
.claude/skills/api-tester/
  SKILL.md
  reference.md
  templates/
    test-template.py
  scripts/
    generate-tests.py
```

### SKILL.md

```markdown
---
description: Generate and run API tests
triggers:
  - test this api
  - create api tests
  - test endpoint
allowed-tools: Read, Write, Bash, Glob
include-files:
  - reference.md
---

# API Testing Skill

You are an expert at testing REST APIs. Generate comprehensive tests using pytest and httpx.

## Capabilities

1. **Generate Tests**: Create test files for API endpoints
2. **Run Tests**: Execute tests and report results
3. **Coverage**: Identify untested endpoints

## Test Generation Process

1. Read the endpoint implementation
2. Identify request/response schemas
3. Generate test cases:
   - Happy path
   - Error cases
   - Edge cases
   - Authentication scenarios

## Test Template

Use the template at `templates/test-template.py` as a starting point.

## Running Tests

```bash
pytest tests/api/ -v --tb=short
```

## Coverage Check

```bash
pytest --cov=src/api --cov-report=term-missing
```
```

### reference.md

```markdown
# API Testing Reference

## Test Structure

```python
import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_endpoint_success(client: AsyncClient):
    response = await client.get("/api/resource")
    assert response.status_code == 200
    assert "data" in response.json()
```

## Common Assertions

| Assertion | Use Case |
|-----------|----------|
| `status_code == 200` | Success response |
| `status_code == 201` | Created resource |
| `status_code == 400` | Bad request |
| `status_code == 401` | Unauthorized |
| `status_code == 404` | Not found |

## Fixtures

```python
@pytest.fixture
async def client():
    async with AsyncClient(base_url="http://test") as c:
        yield c

@pytest.fixture
def auth_headers():
    return {"Authorization": "Bearer test-token"}
```
```

### templates/test-template.py

```python
"""Test template for API endpoints."""

import pytest
from httpx import AsyncClient

class TestResourceEndpoint:
    """Tests for /api/resource endpoint."""

    @pytest.mark.asyncio
    async def test_list_resources(self, client: AsyncClient):
        """Test listing all resources."""
        response = await client.get("/api/resource")
        assert response.status_code == 200
        assert isinstance(response.json(), list)

    @pytest.mark.asyncio
    async def test_get_resource(self, client: AsyncClient):
        """Test getting a single resource."""
        response = await client.get("/api/resource/1")
        assert response.status_code == 200

    @pytest.mark.asyncio
    async def test_create_resource(self, client: AsyncClient):
        """Test creating a resource."""
        data = {"name": "test"}
        response = await client.post("/api/resource", json=data)
        assert response.status_code == 201

    @pytest.mark.asyncio
    async def test_invalid_resource(self, client: AsyncClient):
        """Test 404 for missing resource."""
        response = await client.get("/api/resource/99999")
        assert response.status_code == 404
```

---

## Quick Reference

| Component | Location | Purpose |
|-----------|----------|---------|
| `SKILL.md` | Required | Main skill definition |
| `reference.md` | Optional | Reference documentation |
| `examples.md` | Optional | Example patterns |
| `scripts/` | Optional | Helper scripts |
| `templates/` | Optional | Code templates |

### Tips

1. **Clear triggers** - Use specific phrases that match how you naturally ask
2. **Scope wisely** - Keep skills focused on one domain
3. **Include examples** - Real examples improve skill effectiveness
4. **Test thoroughly** - Try your skill with various inputs
5. **Version control** - Commit skills with your project
