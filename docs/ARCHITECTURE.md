# CareerOS Technical Architecture

## 1. Overall Architecture Diagram

CareerOS starts as a local-first React application with clean seams for future cloud sync, authentication, AI services, and community content packs.

```text
+--------------------------------------------------------------------------------+
|                                   Browser                                      |
|                                                                                |
|  +-------------------------- CareerOS React App -----------------------------+ |
|  |                                                                           | |
|  |  App Shell                                                               | |
|  |  - Router                                                                | |
|  |  - Providers                                                             | |
|  |  - Layouts                                                               | |
|  |  - Command Menu                                                          | |
|  |                                                                           | |
|  |  Feature Domains                                                         | |
|  |  - Onboarding     - Dashboard       - Growth       - Knowledge           | |
|  |  - Career         - Analytics       - Settings     - Gamification        | |
|  |                                                                           | |
|  |  Shared Platform                                                         | |
|  |  - Design System   - Hooks   - Utilities   - Types   - Validation        | |
|  |                                                                           | |
|  |  State Layer                                                             | |
|  |  - Zustand Stores                                                        | |
|  |  - Selectors                                                             | |
|  |  - Derived View Models                                                   | |
|  |                                                                           | |
|  |  Service Layer                                                           | |
|  |  - Repository Interfaces                                                 | |
|  |  - Search Service                                                        | |
|  |  - Analytics Calculators                                                 | |
|  |  - Import / Export                                                       | |
|  |  - Optional AI Adapter                                                   | |
|  +---------------------------------------------------------------------------+ |
|                                                                                |
|  +----------------------------- Local Storage -------------------------------+ |
|  | IndexedDB / localStorage Adapter                                           | |
|  | JSON Import / Export                                                       | |
|  | Seed Data                                                                 | |
|  +---------------------------------------------------------------------------+ |
+--------------------------------------------------------------------------------+

Future:

+-------------------+        +--------------------+        +--------------------+
| Auth Provider     | <----> | CareerOS Backend   | <----> | PostgreSQL / Blob  |
| OAuth / Email     |        | API / Sync / AI    |        | Search / Analytics |
+-------------------+        +--------------------+        +--------------------+
```

### Architectural Style

- Client-first single page application.
- Domain-oriented frontend architecture.
- Local-first persistence for MVP.
- Repository abstraction for storage and future backend integration.
- Strong TypeScript contracts across domain, state, and services.
- Optional AI and cloud features behind service interfaces.

## 2. Frontend Architecture

### Stack

- React for UI.
- TypeScript for static safety.
- Vite for development and build tooling.
- Tailwind CSS for styling.
- shadcn/ui for accessible UI primitives.
- Zustand for cross-route client state.
- React Router for routing.
- Recharts for analytics visualizations.

### Frontend Layers

```text
src/
  app/          Application bootstrap, routes, providers, layouts
  domains/      Product domains and business concepts
  features/     Cross-domain workflows and app-level experiences
  components/   Shared UI and layout components
  services/     Persistence, search, analytics, AI, import/export
  stores/       Global and shared Zustand stores
  types/        Shared TypeScript contracts
  lib/          Utilities, dates, IDs, formatting
  data/         Seed data, fixtures, content packs
  styles/       Global CSS and theme tokens
```

### Dependency Direction

```text
app -> features -> domains -> services -> shared utilities
app -> components
features -> components
domains -> components
stores -> services
services -> types / lib
components -> lib
```

Rules:

- Shared UI components must not import domain stores.
- Domains may import shared components, hooks, services, and types.
- Services must not import React components.
- Persistence adapters must not be called directly from page components.
- Domain calculations should be pure and testable.

## 3. Folder Structure

Recommended repository structure:

```text
career-os/
  docs/
    CAREEROS_PRD.md
    UX_BLUEPRINT.md
    ARCHITECTURE.md
    CONTRIBUTING.md
    ROADMAP.md
    DESIGN_SYSTEM.md
    DATA_MODEL.md
  public/
    icons/
    images/
  src/
    app/
      App.tsx
      router.tsx
      providers.tsx
      routes.ts
      layouts/
        RootLayout.tsx
        OnboardingLayout.tsx
        SettingsLayout.tsx
      error-boundaries/
      startup/
    assets/
    components/
      ui/
      layout/
      navigation/
      feedback/
      data-display/
      forms/
      charts/
    config/
      navigation.ts
      feature-flags.ts
      constants.ts
    data/
      seed/
      fixtures/
      content-packs/
    domains/
      analytics/
      career/
      gamification/
      goals/
      growth/
      knowledge/
      onboarding/
      practice/
      profile/
      settings/
    features/
      command-menu/
      dashboard/
      global-search/
      import-export/
      quick-add/
      weekly-review/
    hooks/
    lib/
      dates.ts
      ids.ts
      formatting.ts
      result.ts
      utils.ts
    services/
      ai/
      analytics/
      import-export/
      persistence/
      search/
      sync/
    stores/
      app-store.ts
      profile-store.ts
      mission-store.ts
      progress-store.ts
      ui-store.ts
    styles/
      globals.css
      tokens.css
    test/
      factories/
      mocks/
      setup.ts
    types/
      domain.ts
      persistence.ts
      routes.ts
  .github/
    ISSUE_TEMPLATE/
    workflows/
      ci.yml
      preview.yml
  package.json
  vite.config.ts
  tsconfig.json
  tailwind.config.ts
  components.json
  README.md
```

### Domain Module Shape

```text
domains/growth/
  components/
    LearningPathCard.tsx
    SkillProgressRow.tsx
  hooks/
    use-learning-path.ts
    use-skill-progress.ts
  pages/
    LearningPathsPage.tsx
    LearningPathDetailPage.tsx
    LearningUnitPage.tsx
    SkillProgressPage.tsx
    SkillDetailPage.tsx
  services/
    growth-repository.ts
    growth-calculations.ts
  stores/
    growth-store.ts
  types.ts
  routes.tsx
  index.ts
```

## 4. Component Hierarchy

### Application Shell

```text
App
  AppProviders
    ThemeProvider
    RouterProvider
    StoreHydrationProvider
    ErrorBoundary
      RootLayout
        Sidebar
          PrimaryNav
          SecondaryNav
        TopBar
          GlobalSearchTrigger
          QuickAddButton
          StreakIndicator
          ProfileMenu
        MobileTabBar
        MainOutlet
        CommandMenu
        QuickAddDialog
```

### Onboarding

```text
OnboardingLayout
  OnboardingStepper
  OnboardingOutlet
    WelcomePage
    CareerTrackSetupPage
      TrackCardGrid
      RoleLevelForm
      FocusAreaSelector
    GoalSetupPage
      GoalTemplateList
      GoalEditorCard
      SuccessCriteriaEditor
    RoadmapStarterPage
      RoadmapSummary
      MilestoneTimeline
      RecommendedPathList
    OnboardingCompletePage
      SetupSummary
      StarterMissionList
```

### Dashboard

```text
DashboardPage
  PageHeader
  TodayMissionPanel
    MissionRow
    MissionDetailDrawer
  ActiveGoalsPanel
    GoalProgressCard
  ActivePathsPanel
    LearningPathProgressRow
  ReadinessSnapshot
  StreakWidget
  WeeklyReviewPrompt
  RecentActivityFeed
```

### Growth

```text
GrowthLayout
  GrowthSubnav
  GrowthOutlet
    GoalsPage
      GoalFilters
      GoalCardList
      GoalEditorDialog
    GoalDetailPage
      GoalHeader
      SuccessCriteriaList
      LinkedWorkPanel
      EvidenceList
    LearningPathsPage
      PathFilters
      ActivePathGrid
      RecommendedPathList
    LearningPathDetailPage
      PathHeader
      ModuleAccordion
      UnitRow
      PathSidePanel
    LearningUnitPage
      UnitContent
      UnitChecklist
      UnitActions
    SkillProgressPage
      SkillDomainSection
      SkillProgressRow
    SkillDetailPage
      SkillHeader
      SkillEvidenceList
      RelatedPathList
```

### Knowledge

```text
KnowledgeLayout
  KnowledgeSubnav
  KnowledgeOutlet
    NotesPage
      NotesSearch
      TagFilterBar
      NotesList
      NotePreview
    NoteEditorPage
      NoteTitleInput
      NoteMetadataBar
      MarkdownEditor
      NoteSidePanel
    FlashcardsPage
      DueCardsSummary
      DeckFilterBar
      FlashcardList
    FlashcardReviewPage
      ReviewProgress
      ReviewCard
      ReviewControls
```

### Career

```text
CareerLayout
  CareerSubnav
  CareerOutlet
    ResumeTrackerPage
      ResumeVersionList
      ResumeDetailPanel
    JobApplicationsPage
      ApplicationBoard
      ApplicationColumn
      ApplicationCard
    JobApplicationDetailPage
      ApplicationHeader
      ApplicationTimeline
      ApplicationNotes
      ApplicationSidePanel
```

### Analytics And Settings

```text
AnalyticsPage
  DateRangeSelector
  StatCardGrid
  ReadinessChart
  SkillCoverageChart
  ActivityHeatmap
  GoalProgressChart
  InsightList

SettingsLayout
  SettingsSubnav
  SettingsOutlet
    ProfileSettingsPage
    PreferencesSettingsPage
    AppearanceSettingsPage
    DataSettingsPage
      ImportExportPanel
```

## 5. Routing Hierarchy

Use React Router with nested layouts and lazy-loaded route modules.

```text
/
  welcome
  onboarding
    track
    goals
    roadmap
    complete
  app
    dashboard
    today
    growth
      goals
      goals/:goalId
      paths
      paths/:pathId
      paths/:pathId/units/:unitId
      skills
      skills/:skillId
    knowledge
      notes
      notes/:noteId
      flashcards
      flashcards/review
    career
      resumes
      applications
      applications/:applicationId
    analytics
    settings
      profile
      preferences
      appearance
      data
      import-export
```

### Routing Rules

- `/` should redirect to `/app/dashboard` when workspace data exists.
- `/` should redirect to `/welcome` when no workspace exists.
- Onboarding routes should use `OnboardingLayout`.
- App routes should use `RootLayout`.
- Unknown entity IDs should render a contextual not-found state inside the app shell.
- Unknown routes should render a product-level not-found page.
- Route modules should be lazily loaded at section boundaries.

## 6. State Management

### State Categories

```text
Server-like persisted state
  Profile, goals, paths, notes, cards, applications, progress

Derived state
  Readiness score, mission completion, skill coverage, analytics

Ephemeral UI state
  Sidebar collapsed, active filters, command menu open, dialogs

Workflow state
  Onboarding draft, quick-add draft, import validation draft
```

### Zustand Store Strategy

Use Zustand for cross-screen state. Keep stores domain-oriented, small, and selector-friendly.

Recommended stores:

- `appStore`: workspace status, hydration, feature flags.
- `uiStore`: theme preference, sidebar state, command menu state, active modals.
- `profileStore`: user profile and career track preferences.
- `missionStore`: daily missions, completion actions, streak state.
- `growthStore`: goals, learning paths, skills, progress.
- `knowledgeStore`: notes, flashcards, review queue.
- `careerStore`: resumes, job applications, contacts.
- `analyticsStore`: cached derived metrics and date range filters.

### Store Rules

- Stores expose actions, selectors, and hydration methods.
- Stores call repositories, not browser storage directly.
- Stores should not contain large UI components or JSX.
- Derived metrics should be memoized or calculated by services.
- Persist only durable state, not transient dialog state.
- Normalize entities by ID where relationships matter.

### Data Flow

```text
User Action
  -> Component event handler
    -> Store action
      -> Domain validation / calculation
        -> Repository write
          -> Store update
            -> Selectors update UI
```

## 7. Storage Strategy

### MVP Storage

CareerOS should be local-first for MVP.

Recommended approach:

- IndexedDB for structured workspace data.
- localStorage for small preferences and bootstrap flags.
- JSON import/export for data portability.
- Seed data for demo and development.

### Why IndexedDB

- Handles larger notes, flashcards, analytics history, and applications better than localStorage.
- Supports future offline-first sync patterns.
- Avoids localStorage size constraints.

### Storage Abstraction

```text
Repository Interface
  -> Local IndexedDB Adapter
  -> Demo Seed Adapter
  -> Import / Export Adapter
  -> Future HTTP API Adapter
```

### Schema Versioning

Persisted data must include:

- `schemaVersion`
- `workspaceId`
- `createdAt`
- `updatedAt`

Each import should validate:

- Supported schema version.
- Required entity fields.
- ID uniqueness.
- Relationship integrity.
- Malformed content.

### Import / Export

Export should produce one portable JSON document containing:

- Metadata.
- Profile.
- Goals.
- Learning path progress.
- Skills and evidence.
- Missions.
- Notes.
- Flashcards.
- Resume metadata.
- Job applications.
- Weekly reviews.
- Achievements.

Import modes:

- Merge.
- Replace.
- Demo-only seed load.

## 8. Theme Architecture

### Theme Goals

- Support light, dark, and system themes.
- Keep visual quality consistent with shadcn/ui.
- Use semantic design tokens, not raw colors scattered across components.
- Make future brand customization possible.

### Token Layers

```text
Base tokens
  color scale, spacing scale, radius, typography, shadow

Semantic tokens
  background, foreground, muted, border, primary, success, warning, danger

Component tokens
  card background, sidebar background, command menu shadow, chart colors

State tokens
  hover, active, selected, focus, disabled
```

### Theme Storage

- Store user preference in localStorage.
- Resolve effective theme from preference plus system setting.
- Apply theme class at document root.

### Theme Rules

- Components consume CSS variables through Tailwind classes.
- Charts use semantic chart tokens.
- Status colors must include text or icon labels.
- Avoid one-note palettes.
- Keep high contrast for data-dense screens.

## 9. Design System

### Foundations

- Typography scale.
- Spacing scale.
- Color tokens.
- Radius.
- Elevation.
- Icon sizing.
- Motion guidelines.
- Chart color rules.

### Primitive Components

Based on shadcn/ui:

- Button
- Input
- Textarea
- Select
- Checkbox
- Switch
- Dialog
- Drawer
- Sheet
- Tabs
- Tooltip
- Popover
- Dropdown menu
- Command
- Badge
- Progress
- Table
- Skeleton
- Toast

### CareerOS Components

- AppShell
- Sidebar
- TopBar
- MobileTabBar
- PageHeader
- EmptyState
- ErrorState
- StatCard
- ProgressRing
- Timeline
- MissionRow
- GoalCard
- LearningPathCard
- SkillProgressRow
- NoteListItem
- FlashcardReviewCard
- ApplicationCard
- ChartPanel

### Component Standards

- All components must support keyboard interaction where applicable.
- All interactive components must have visible focus states.
- Reusable components must expose clear variant and size APIs.
- Product-specific components should live near their domain unless reused broadly.
- Avoid nested cards unless modeling repeated objects inside a framed tool.

## 10. API Abstraction

The MVP does not require a backend, but all durable data access should use API-like repository abstractions.

### Repository Contracts

```text
ProfileRepository
GoalRepository
MissionRepository
GrowthRepository
KnowledgeRepository
CareerRepository
AnalyticsRepository
SettingsRepository
```

Each repository should support predictable operations:

- `list`
- `getById`
- `create`
- `update`
- `delete` or `archive`
- domain-specific queries

### Service Interfaces

```text
SearchService
ReadinessService
MissionGenerationService
SpacedRepetitionService
ImportExportService
ContentPackService
CoachService
```

### Result Handling

All service calls should return structured success or failure states. UI should not need to parse thrown errors for ordinary expected failures such as validation errors or missing records.

### Future HTTP Adapter

The future backend adapter should implement the same repository contracts. This lets the app switch from local storage to network-backed persistence with minimal UI changes.

## 11. Future Backend Integration

### Backend Responsibilities

Future backend services may provide:

- Authentication.
- User workspaces.
- Cloud sync.
- Backup and restore.
- Content pack publishing.
- AI coach orchestration.
- Search indexing.
- Analytics aggregation.
- File storage for resumes.
- Team or mentor collaboration.

### Backend Architecture Option

```text
React App
  -> API Client
    -> Backend API
      -> Auth Middleware
      -> Workspace Service
      -> Domain Services
      -> Sync Service
      -> AI Service
      -> PostgreSQL
      -> Object Storage
      -> Search Index
```

### Suggested Backend Stack Options

Option A: Supabase-first

- Supabase Auth.
- PostgreSQL.
- Row-level security.
- Storage buckets.
- Edge functions for AI and sync.

Option B: Custom backend

- Node.js API.
- PostgreSQL.
- Prisma or Drizzle.
- Object storage.
- Queue for AI and background jobs.

The frontend should not depend on either choice directly. It should depend on repository and service interfaces.

### Sync Model

Future sync should support:

- Offline writes.
- Conflict detection.
- Last-write-wins for low-risk fields.
- Explicit merge UI for notes and long-form text.
- Server-generated sync cursor.
- Per-entity updated timestamps.

## 12. Authentication Architecture

### MVP

Authentication is not required for MVP. The app should support local-only usage without account creation.

### Future Auth Goals

- Preserve local-first user trust.
- Allow optional sign-in for sync and backup.
- Support GitHub OAuth for open-source community alignment.
- Support email login for general users.
- Avoid blocking local features behind auth.

### Auth Flow

```text
Anonymous local workspace
  -> User chooses Sign in
    -> Auth provider
      -> Account created or matched
        -> Workspace link prompt
          -> Upload local workspace
          -> Merge with cloud workspace
          -> Enable sync
```

### Auth-Aware App States

- Anonymous local user.
- Authenticated user without cloud sync.
- Authenticated user with sync enabled.
- Authenticated user with sync conflict.
- Signed-out user with local data preserved.

### Security Requirements

- Never silently upload local data.
- Ask before linking local workspace to a cloud account.
- Provide export before destructive account operations.
- Keep tokens out of localStorage when possible.
- Use secure, httpOnly cookies for hosted app auth when backend exists.

## 13. Testing Strategy

### Test Pyramid

```text
E2E tests
  Critical user journeys

Integration tests
  Store + repository + page workflows

Component tests
  Forms, dialogs, reusable UI, charts

Unit tests
  Domain calculations, validators, selectors, services
```

### Unit Tests

Cover:

- Readiness score calculation.
- Mission completion logic.
- Streak calculation.
- Skill progress aggregation.
- Flashcard scheduling.
- Import validation.
- Analytics summaries.

### Component Tests

Cover:

- Onboarding forms.
- Mission list.
- Goal card and editor.
- Learning path module accordion.
- Note editor save states.
- Flashcard review controls.
- Application board.
- Empty, loading, and error states.

### Integration Tests

Cover:

- Onboarding creates profile, goals, paths, and missions.
- Completing a learning unit updates path and skill progress.
- Creating a note and flashcard links entities correctly.
- Completing weekly review updates goals and missions.
- Import and export round trip preserves workspace data.

### End-to-End Tests

Cover:

- First-run onboarding to dashboard.
- Daily mission completion.
- Learning path progress.
- Notes and flashcards review.
- Weekly review completion.
- Job application creation and status movement.
- Settings import/export.

### Accessibility Tests

- Keyboard navigation.
- Dialog focus trapping.
- Form labels and errors.
- Color contrast.
- Chart text alternatives.

### CI Requirements

Every pull request should run:

- Lint.
- Typecheck.
- Unit tests.
- Component/integration tests.
- Production build.
- Accessibility smoke tests where feasible.

## 14. Deployment Architecture

### MVP Deployment

CareerOS can deploy as a static web application.

Recommended targets:

- Vercel.
- Netlify.
- GitHub Pages.
- Cloudflare Pages.

### Static Deployment Flow

```text
Pull Request
  -> CI
    -> Lint
    -> Typecheck
    -> Tests
    -> Build
    -> Preview deployment

main branch
  -> CI
    -> Production build
    -> Production deployment
```

### Build Artifacts

- Static HTML, CSS, JS.
- Public assets.
- Content packs and seed data.

### Environment Configuration

MVP:

- No required secrets.
- Optional feature flags.
- Optional analytics disabled by default.

Future:

- API base URL.
- Auth provider config.
- AI provider config.
- Sentry or observability DSN.

### Release Strategy

- Semantic versioning after initial public release.
- Changelog for user-visible changes.
- Tagged releases.
- Migration notes when storage schema changes.

## 15. Performance Strategy

### Performance Goals

- Fast first load for a static app.
- Smooth navigation between sections.
- Responsive input for notes and reviews.
- Efficient rendering of lists, charts, and boards.
- No unnecessary backend dependency for MVP.

### Frontend Performance

- Route-level code splitting.
- Lazy-load heavy analytics charts.
- Lazy-load editor enhancements.
- Memoize derived analytics and readiness calculations.
- Use selectors to minimize Zustand re-renders.
- Virtualize long lists when note, card, or application counts grow.
- Debounce search indexing and autosave.
- Avoid large bundled seed data in the initial route.

### Storage Performance

- Batch writes where appropriate.
- Index common query fields in IndexedDB.
- Cache computed analytics with invalidation by entity updates.
- Keep import validation streaming or chunked for large files in future.

### Metrics

Track locally or in CI:

- Bundle size.
- Lighthouse performance.
- Time to interactive.
- Route transition latency.
- Interaction responsiveness for editor and review flows.

## 16. Accessibility Strategy

### Standards

CareerOS should target WCAG 2.2 AA for core workflows.

### Requirements

- Keyboard access for all primary workflows.
- Visible focus states.
- Proper semantic headings.
- Landmarks for navigation and main content.
- Accessible names for icon buttons.
- Form labels and inline validation messages.
- Dialog focus management.
- Drawer and command menu focus trapping.
- Reduced motion support.
- Color contrast compliance.
- Non-color status indicators.
- Text summaries for charts.

### Design System Accessibility

- Use shadcn/ui primitives where possible.
- Wrap custom interaction patterns in accessibility tests.
- Document component accessibility expectations.
- Include keyboard behavior in component stories or examples.

### Screen Reader Considerations

- Mission completion should announce status changes.
- Flashcard reveal should announce answer visibility.
- Form errors should be tied to fields.
- Page transitions should update document title and heading.
- Charts should expose summary text and data tables where useful.

## 17. Security Considerations

### MVP Local-First Security

- Treat user data as private by default.
- Do not transmit user data unless explicitly enabled.
- Avoid third-party analytics by default.
- Make export/import user-controlled.
- Validate imported JSON.
- Sanitize rendered note content.
- Avoid executing imported content.

### Browser Data Risks

- Local data can be cleared by browser settings.
- Local device compromise exposes local workspace data.
- Users should be encouraged to export backups.

### Content Security

- Use a strict Content Security Policy when deployed.
- Avoid inline scripts.
- Sanitize markdown or rich text rendering.
- Validate URLs before rendering external links.
- Use `rel="noopener noreferrer"` for external links.

### Future Cloud Security

- Use secure auth sessions.
- Encrypt sensitive data in transit.
- Consider encryption at rest for cloud storage.
- Implement authorization by workspace.
- Use row-level security if using Supabase.
- Rate-limit APIs.
- Audit AI request data handling.
- Give users deletion and export controls.

### Supply Chain

- Lock dependencies.
- Use automated dependency scanning.
- Review shadcn component updates.
- Avoid unnecessary packages.
- Run CI on pull requests.

## 18. Future Scalability Plan

### Product Scalability

CareerOS should scale across:

- Multiple career tracks.
- Community content packs.
- AI coaching.
- Cloud sync.
- Mentorship and collaboration.
- Public profiles.
- Organization or cohort workspaces.

### Technical Scalability

Phase 1: Local MVP

- Local IndexedDB.
- Static deployment.
- Seed content packs.
- JSON import/export.

Phase 2: Optional Cloud Sync

- Auth.
- Workspace backend.
- Sync API.
- Conflict handling.
- Object storage for resumes.

Phase 3: Community Platform

- Public content packs.
- Contribution workflow.
- Content versioning.
- Search index.
- Moderation.

Phase 4: AI And Collaboration

- AI coach service.
- Async AI jobs.
- Shared workspaces.
- Mentor feedback.
- Notification system.

Phase 5: Enterprise And Teams

- Organization accounts.
- Role-based access control.
- Team dashboards.
- Cohort analytics.
- Admin controls.

### Data Scalability

- Keep stable entity IDs.
- Use schema migrations.
- Normalize relationship-heavy data.
- Maintain created and updated timestamps.
- Add sync cursors before cloud sync.
- Separate content pack entities from user progress.

### Frontend Scalability

- Keep route modules lazy-loaded.
- Keep domain modules isolated.
- Add plugin-like content pack loading.
- Avoid global stores becoming monoliths.
- Keep shared components generic.
- Maintain architecture decision records for major changes.

## Architecture Decision Records To Add

Future ADRs should document:

- IndexedDB library choice.
- Backend platform choice.
- Auth provider choice.
- AI provider abstraction.
- Markdown/editor strategy.
- Content pack format.
- Sync conflict model.
- Analytics privacy policy.

## Implementation Readiness Checklist

- PRD approved.
- UX blueprint approved.
- Architecture approved.
- Data model documented.
- Design tokens defined.
- MVP route list finalized.
- Persistence adapter selected.
- Testing stack selected.
- CI workflow defined.
- Contribution guidelines published.

