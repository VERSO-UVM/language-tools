# Python

## Package/Version Manager: `uv`

**Also manages locally installed python versions, virtual environments, and tools. A truly beautiful tool ✨**

**Documentation Link:** https://docs.astral.sh/uv/

### Installation

It is best to install using a local package manager, _not_ using pip. This fully isolates the installation from your global python installation.

**MacOS**

```sh
brew install uv
# Alternatively, use the direct installer
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**Windows**

```sh
winget install ruff # WinGet package manager
# Or
scoop install ruff # Scoop Package Manager

# Alternatively, use the direct installer
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

## Linting/Formatting: `ruff`

**Documentation Link:** https://docs.astral.sh/ruff/

### Installation

It is best to install using a local package manager, _not_ using pip. This fully isolates the installation from your global python installation.

**macOS**

Homebrew is recommended as a macOS package manager.

```sh
brew install ruff
# Alternatively, use the direct installer
curl -LsSf https://astral.sh/ruff/install.sh | sh
```

**Windows**

```sh
winget install ruff # WinGet package manager
# Or
scoop install ruff # Scoop Package Manager

# Alternatively, use the direct installer
powershell -c "irm https://astral.sh/ruff/install.ps1 | iex"
```

## Why these tools?

Python tooling employs two tools, both created by the [Astral project](https://astral.sh/). Specific justifications for each tool are included in their descriptions, but here is primary justification that applies to both. `uv` (package manager) and `ruff` (linter/formatter) are both written in the Rust language. This brings two benefits. First, Rust is a systems language and produces very high performance tooling. Second, Rust allows these tools to not depend on Python, where global installations can often cause inconsistencies.
