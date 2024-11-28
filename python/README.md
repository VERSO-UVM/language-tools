# Python

## Package Manager: `uv`

**Documentation Link:** https://docs.astral.sh/uv/

## Linting/Formatting: `ruff`

**Documentation Link:** https://docs.astral.sh/ruff/

## Why these tools?

Python tooling employs two tools, both created by the [Astral project](https://astral.sh/). Specific justifications for each tool are included in their descriptions, but here is primary justification that applies to both. `uv` (package manager) and `ruff` (linter/formatter) are both written in the Rust language. This brings two benefits. First, Rust is a systems language and produces very high performance tooling. Second, Rust allows these tools to not depend on Python, where global installations can often cause inconsistencies.
