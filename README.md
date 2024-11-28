# VERSO Language Tools

This repository contains common documentation and configuration for how we use certain programming languages (and associated tools) within VERSO. It is grouped into a series of "platforms", where a platform might just be one programming language, or several related languages.

**Goals**

- Enforce a more consistent code style across projects
- Save time by reducing errors caused by "it works on my machine"-type issues
-

## Language/Platform Support

Support is developed on an as-needed basis for VERSO projects & experimentation.

_Status Key_

- (✅) Fully supported
- (📈) Under development (for VERSO project)
- (⚠️) Experimental development
- (❌) Concept/Description only

### 📈 [Web Development](/webdev/)

**Applies to**

- JavaScript/TypeScript (both frontend and backend with Node/Deno/Bun)
- React
- Vue
- Svelte
- HTML (including Jinja templates, commonly used with Flask)
- CSS (incl. Less/Sass/SCSS)

_Note: Angular is not supported._

#### Markup/Configuration

Languages like Markdown & YAML are covered by the web development formatting tool Prettier, and thus formatting for these is handled here.

### 📈 [Python](/python/)

**Applies to**

- Python

## Guiding Principles

**The Golden Rule:** The Developer Comes First
If a developer feels blocked by one of the practices, they will either not care to adhere to it or will actively circumvent the thing.

### Tools

To apply the Golden Rule written above to language tooling, it must be able to satisfy these requirements:

- Easy to install
- Easy to run (or at least common commands should be well documented)
- Is performant (ie, tools that take too long to run will be avoided)
- Can be integrated with the IDE where applicable
- Don't interfere with other organizational practices

> [!IMPORTANT]
> Git Hooks (namely precommit hooks) are wholly prohibited as they slow down developers and inhibit the practices of micro committing and descriptive commit messages.
