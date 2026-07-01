# Contributing to CareerOS

Thanks for helping improve CareerOS.

CareerOS is currently focused on release readiness and high-quality learning content. Please avoid large product expansions unless they are already discussed in an issue and aligned with the roadmap.

## Good First Contributions

- Fix typos or clarity issues in documentation
- Improve lesson content in `content/`
- Add examples, diagrams, or practical exercises to existing lessons
- Improve accessibility in existing components
- Fix bugs without changing the core architecture
- Strengthen tests, linting, or release documentation

## Architecture Rules

CareerOS uses this dependency flow:

```text
UI -> Store -> Repository -> Persistence
```

Please keep these boundaries intact:

- UI components should not read or write browser persistence directly.
- Stores should call repository interfaces for durable data.
- Persistence adapters should stay replaceable.
- Content should live in `content/` as Markdown with YAML front matter.
- Avoid adding major new product features during the MVP release phase.

## Local Development

```bash
npm install
npm run dev
```

Before opening a pull request, run:

```bash
npm run lint
npm run build
npm run format:check
```

## Pull Request Guidelines

- Keep pull requests focused and reviewable.
- Include screenshots or recordings for visible UI changes.
- Explain architecture-impacting changes clearly.
- Update documentation when behavior, commands, or content structure changes.
- Do not commit `dist/`, `node_modules/`, local environment files, or generated cache files.

## Lesson Content Guidelines

Lessons should be practical, accurate, and written for career growth rather than rote interview prep.

Each lesson must include valid YAML front matter and should favor:

- Clear career context
- Concrete examples
- Practical checklists
- Role-specific nuance
- Durable mental models

## Reporting Issues

Use the GitHub issue templates for bugs and feature requests. For security concerns, follow [SECURITY.md](SECURITY.md).
