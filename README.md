# CareerOS

CareerOS is an open-source Career Operating System for software engineers, technical program managers, engineering managers, product managers, and technology leaders.

It is not primarily an interview preparation app. Interview preparation is one learning path inside a broader system for learning, progress tracking, career growth, and durable professional development.

## Status

CareerOS is in its initial MVP release phase. The application foundation, local-first data model, repository layer, dashboard, learning roadmap, module detail pages, lesson pages, and offline Markdown content engine are in place.

The next phase is content depth: high-quality lessons, examples, and career operating playbooks.

## What Is Included

- React, TypeScript, Vite, Tailwind CSS, and shadcn/ui foundation
- React Router application shell
- Zustand stores for app and UI state
- Local-first repository architecture
- Dashboard with progress, mission, milestone, and learning widgets
- Learning roadmap and module detail pages
- Markdown lesson rendering from `content/`
- YAML front matter validation
- Tables, code blocks, syntax highlighting, images, checklists, callouts, table of contents, notes, and reading progress

## Architecture

CareerOS follows a strict dependency flow:

```text
UI
  -> Store
    -> Repository
      -> Persistence
```

UI components must not directly access browser persistence. Durable data should flow through stores and repository interfaces so local storage can later be replaced with Supabase, Firebase, or another backend without rewriting UI components.

Important directories:

```text
content/          Markdown lessons with YAML front matter
docs/             Product, UX, and architecture documents
public/           Static images and assets
src/app/          Application bootstrap, router, providers, layouts
src/components/   Shared UI, navigation, feedback, and layout components
src/domains/      Domain pages and flows
src/features/     Cross-domain feature experiences
src/services/     Content and persistence services
src/stores/       Zustand stores
src/types/        Shared TypeScript contracts
```

## Content Model

Lessons live in `content/` and are discovered automatically with `import.meta.glob`.

Each lesson is a Markdown file with YAML front matter:

```yaml
---
id: what-is-a-tpm
module: TPM Fundamentals
title: What Is a TPM?
difficulty: beginner
estimatedTime: 20
interviewFrequency: medium
order: 1
tags:
  - tpm
  - fundamentals
status: published
---
```

Only lessons with `status: published` are rendered in the learning experience.

## Getting Started

Prerequisites:

- Node.js 20 or newer
- npm 10 or newer

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run release checks:

```bash
npm run lint
npm run build
npm run format:check
```

## Scripts

| Script                 | Purpose                                |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Start the Vite development server      |
| `npm run build`        | Type-check and build production assets |
| `npm run preview`      | Preview the production build locally   |
| `npm run lint`         | Run ESLint                             |
| `npm run format`       | Format the repository with Prettier    |
| `npm run format:check` | Check formatting without writing files |

## Contributing

CareerOS welcomes focused contributions that improve reliability, accessibility, content quality, documentation, and the existing MVP experience.

Please read [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and [SECURITY.md](SECURITY.md) before opening issues or pull requests.

## Roadmap

The current roadmap is documented in [ROADMAP.md](ROADMAP.md). The main priority before v1.0 is content quality and release maturity, not expanding the product surface area.

## License

CareerOS is released under the [MIT License](LICENSE).
