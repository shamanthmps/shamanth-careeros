# CareerOS Product Requirements Document

## 1. Product Vision

CareerOS is an open-source Career Operating System for modern technology professionals. It helps Software Engineers, Technical Program Managers, Engineering Managers, Product Managers, and Technology Leaders build long-term career mastery through structured learning, deliberate practice, measurable progress, and reflective accountability.

CareerOS is not an interview preparation app. Interview preparation is one important module inside a broader platform for career growth. The product should feel like the focused daily habit loop of Duolingo, the contribution and transparency model of GitHub, the flexible knowledge organization of Notion, and the execution clarity of Linear.

The long-term vision is to become the trusted open-source career platform where professionals can:

- Build personalized career roadmaps.
- Follow structured learning paths.
- Track skills, goals, progress, and readiness.
- Practice interviews and leadership scenarios.
- Maintain career notes, flashcards, resumes, and job pipelines.
- Receive AI coaching grounded in their goals, history, and evidence.
- Contribute community-driven roadmaps, interview banks, learning plans, and career frameworks.

## 2. Product Goals

### Primary Goals

- Provide a production-ready, extensible open-source foundation for career growth.
- Help users convert vague career ambitions into structured goals, paths, missions, and measurable progress.
- Support multiple career tracks without forcing every user into the same interview-prep workflow.
- Make progress visible through readiness scores, skill coverage, streaks, reviews, and analytics.
- Enable personal knowledge management across notes, flashcards, resources, and revision plans.
- Support accountability through daily missions, weekly reviews, goals, achievements, and reminders.
- Build an architecture that can scale from local-first MVP usage to authenticated cloud sync.

### Product Quality Goals

- Beautiful, calm, responsive UI with Apple-like simplicity, Linear-level polish, Notion-like spacing, and GitHub-like usability.
- Fast navigation and low-friction data entry.
- Accessible by default.
- Modular enough for open-source contributors to work on isolated domains.
- Strong TypeScript contracts and predictable state boundaries.

### Non-Goals For MVP

- CareerOS will not initially provide a full social network.
- CareerOS will not initially provide paid course hosting.
- CareerOS will not initially provide recruiter marketplace features.
- CareerOS will not initially require AI for core workflows.
- CareerOS will not initially attempt to replace applicant tracking systems for companies.

## 3. User Personas

### Persona 1: Software Engineer Preparing For Growth

- Level: Early to mid-career.
- Goals: Improve system design, coding depth, communication, and promotion readiness.
- Pain points: Fragmented notes, unclear roadmap, inconsistent practice, difficulty measuring readiness.
- Needs: Learning paths, daily missions, skill tree, mock interviews, flashcards, progress analytics.

### Persona 2: Senior Engineer Targeting Staff Engineer

- Level: Senior or lead engineer.
- Goals: Grow architectural judgment, influence, mentorship, execution strategy, and leadership communication.
- Pain points: Existing tools over-focus on algorithms and ignore leadership growth.
- Needs: Career roadmap, leadership scenarios, writing practice, impact journal, weekly reviews, skill evidence.

### Persona 3: Technical Program Manager

- Level: TPM or aspiring TPM.
- Goals: Strengthen planning, stakeholder management, risk management, execution, and technical fluency.
- Pain points: Few structured TPM learning systems; progress is hard to quantify.
- Needs: Role-specific roadmaps, case study practice, notes, templates, readiness scoring, weekly review.

### Persona 4: Engineering Manager

- Level: New or experienced EM.
- Goals: Improve people management, hiring, execution, coaching, performance reviews, and org design.
- Pain points: Leadership growth is unstructured and reactive.
- Needs: Leadership paths, scenario practice, decision journal, coaching notes, goals, reviews.

### Persona 5: Product Manager

- Level: PM, senior PM, or technical PM.
- Goals: Improve product sense, strategy, analytics, execution, discovery, and stakeholder communication.
- Pain points: Knowledge is scattered across docs, notes, and frameworks.
- Needs: Product skill tree, case practice, resource library, career goals, analytics.

### Persona 6: Open-Source Contributor

- Level: Developer, designer, writer, educator, or career coach.
- Goals: Contribute content, templates, UI, integrations, or domain modules.
- Pain points: Hard to know where to contribute in large apps.
- Needs: Clear architecture, contribution guidelines, typed data models, issue labels, modular folders.

## 4. User Journey

### First-Time User Journey

1. User lands on CareerOS and selects a primary career track.
2. User defines current level, target role, timeline, and focus areas.
3. CareerOS generates or recommends an initial roadmap.
4. User reviews the roadmap and activates one or more learning paths.
5. User receives a starter set of daily missions.
6. User completes missions, records notes, creates flashcards, or logs practice.
7. Dashboard updates progress, streaks, readiness, and next actions.

### Returning User Journey

1. User opens the dashboard.
2. User sees daily missions, active goals, streak status, and recommended next action.
3. User completes learning, practice, review, or tracking tasks.
4. User updates notes, flashcards, job applications, or mock interview results.
5. User checks analytics to understand progress and weak areas.
6. User completes a weekly review to recalibrate goals.

### Career Transition Journey

1. User creates a target role, such as Senior SWE to Staff Engineer.
2. CareerOS maps required skill domains and expected behaviors.
3. User compares current evidence against target expectations.
4. User follows a roadmap with learning, practice, writing, leadership, and portfolio tasks.
5. User tracks progress through evidence, reviews, and readiness scoring.

## 5. Features

### Core Platform

- Dashboard
- Career profile
- Role tracks
- Career goals
- Progress analytics
- Daily missions
- Weekly reviews
- Achievements
- Settings

### Learning System

- Learning paths
- Roadmaps
- Skill trees
- Lessons or learning units
- Resources
- Notes
- Knowledge base
- Flashcards
- Revision planner
- Certifications

### Practice System

- Mock interviews
- Coding practice tracking
- System design practice
- Product case practice
- TPM execution scenarios
- Engineering management scenarios
- Behavioral story bank
- Readiness scoring

### Career Execution System

- Resume tracking
- Job application tracking
- Networking contacts
- Interview pipeline
- Offer tracking
- Career milestone log
- Impact journal

### AI Coach

- Goal clarification
- Roadmap suggestions
- Practice feedback
- Mock interview prompts
- Weekly review summaries
- Weakness detection
- Personalized next actions

AI features must be optional and should not block basic product usage.

## 6. Information Architecture

CareerOS should be organized around durable product domains:

- Home
  - Dashboard
  - Today
  - Weekly review
- Growth
  - Roadmaps
  - Learning paths
  - Skill trees
  - Career goals
- Practice
  - Mock interviews
  - Coding
  - System design
  - Product cases
  - Leadership scenarios
  - Behavioral stories
- Knowledge
  - Notes
  - Knowledge base
  - Flashcards
  - Revision planner
  - Resources
- Career
  - Resume tracker
  - Job applications
  - Contacts
  - Interview pipeline
  - Impact journal
- Analytics
  - Progress
  - Readiness
  - Skill coverage
  - Activity history
  - Goals
- Settings
  - Profile
  - Track preferences
  - Data
  - Integrations
  - Theme

## 7. Navigation

### Primary Navigation

Use a persistent left sidebar on desktop and a bottom tab bar on mobile.

Primary sections:

- Dashboard
- Growth
- Practice
- Knowledge
- Career
- Analytics
- Settings

### Secondary Navigation

Each section should expose local tabs or sub-navigation:

- Growth: Roadmaps, Learning Paths, Skill Trees, Goals.
- Practice: Mock Interviews, Coding, System Design, Leadership, Behavioral.
- Knowledge: Notes, Flashcards, Revision, Resources.
- Career: Resume, Applications, Contacts, Impact Journal.
- Analytics: Progress, Readiness, Skills, Activity.

### Global Navigation Requirements

- Global command menu.
- Global search across notes, paths, skills, applications, and resources.
- Quick-add action for notes, missions, goals, applications, flashcards, and practice logs.
- Breadcrumbs for nested learning paths, notes, and roadmap views.

## 8. Gamification Strategy

Gamification should support mastery, not shallow engagement. CareerOS should encourage consistency, reflection, and skill development without making the product feel childish.

### Core Loops

- Daily missions create focused action.
- Streaks reward consistency.
- XP represents effort and completion.
- Skill progress reflects coverage and evidence.
- Achievements mark meaningful career milestones.
- Weekly reviews convert activity into learning.
- Readiness scores help users decide where to focus next.

### Mission Types

- Learn: Complete a learning unit or resource.
- Practice: Complete a mock interview, coding task, case study, or scenario.
- Review: Revise flashcards or revisit notes.
- Reflect: Complete a weekly review or impact journal entry.
- Build: Produce an artifact such as a design doc, resume revision, or project note.
- Apply: Update job pipeline, contact someone, or prepare for an interview.

### XP Strategy

- Small XP for lightweight completion.
- Larger XP for effortful artifacts and practice sessions.
- Bonus XP for completing a balanced mission set across learning, practice, and reflection.
- No XP for meaningless clicks.

### Achievement Categories

- Consistency: streaks and recurring reviews.
- Mastery: skill tree completion.
- Practice: interview and scenario milestones.
- Career: resume, applications, offers, promotions.
- Contribution: open-source content or code contributions.

### Readiness Score

Readiness should combine:

- Skill coverage.
- Practice recency.
- Mock interview performance.
- Flashcard retention.
- Goal progress.
- Evidence artifacts.
- Self-assessment.

Scores must be explainable. The user should see why a score changed and what to do next.

## 9. Data Models

These models define the initial domain language. Implementation may use TypeScript interfaces, Zod schemas, and persistence adapters.

### UserProfile

- id
- name
- email
- avatarUrl
- currentRole
- targetRole
- careerTrack
- currentLevel
- targetLevel
- location
- timezone
- preferences
- createdAt
- updatedAt

### CareerTrack

- id
- name
- description
- supportedLevels
- skillDomains
- defaultRoadmaps

Examples:

- Software Engineering
- Technical Program Management
- Engineering Management
- Product Management
- Technology Leadership

### CareerGoal

- id
- userId
- title
- description
- category
- targetDate
- status
- priority
- linkedSkills
- linkedRoadmaps
- successCriteria
- createdAt
- updatedAt

### Roadmap

- id
- title
- description
- track
- level
- estimatedDuration
- milestones
- learningPathIds
- skillIds
- visibility
- source
- createdAt
- updatedAt

### LearningPath

- id
- title
- description
- track
- difficulty
- estimatedHours
- modules
- prerequisites
- outcomes
- status
- progress
- createdAt
- updatedAt

### LearningModule

- id
- pathId
- title
- description
- order
- units
- completionCriteria

### LearningUnit

- id
- moduleId
- title
- type
- content
- resourceIds
- estimatedMinutes
- status
- completedAt

### Skill

- id
- name
- description
- domain
- track
- level
- parentSkillId
- prerequisites
- evidenceRequirements

### SkillProgress

- id
- userId
- skillId
- confidence
- coverage
- evidenceCount
- lastPracticedAt
- status

### Mission

- id
- userId
- title
- description
- type
- difficulty
- xp
- dueDate
- status
- linkedEntityType
- linkedEntityId
- completedAt

### Note

- id
- userId
- title
- content
- tags
- linkedEntityType
- linkedEntityId
- createdAt
- updatedAt

### Flashcard

- id
- userId
- front
- back
- tags
- sourceNoteId
- nextReviewAt
- interval
- easeFactor
- reviewCount
- lastReviewedAt

### MockInterview

- id
- userId
- type
- track
- title
- scheduledAt
- completedAt
- questions
- feedback
- score
- readinessSignals

### PracticeSession

- id
- userId
- type
- title
- durationMinutes
- difficulty
- result
- notes
- linkedSkills
- completedAt

### ResumeVersion

- id
- userId
- title
- fileUrl
- targetRole
- notes
- score
- createdAt

### JobApplication

- id
- userId
- company
- role
- location
- source
- status
- priority
- compensationRange
- applicationUrl
- resumeVersionId
- contacts
- interviews
- notes
- createdAt
- updatedAt

### Contact

- id
- userId
- name
- company
- role
- email
- linkedInUrl
- relationship
- notes
- lastContactedAt
- nextFollowUpAt

### WeeklyReview

- id
- userId
- weekStartDate
- wins
- challenges
- lessons
- metrics
- nextWeekFocus
- completedAt

### Achievement

- id
- key
- title
- description
- category
- criteria
- xp

### UserAchievement

- id
- userId
- achievementId
- earnedAt
- metadata

## 10. Technical Architecture

### Frontend Stack

- React for UI.
- TypeScript for type safety.
- Vite for development and builds.
- Tailwind CSS for styling.
- shadcn/ui for accessible component primitives.
- Zustand for client state.
- React Router for routing.
- Recharts for analytics visualization.

### Architectural Principles

- Domain-first folder organization.
- Feature modules own their routes, components, hooks, and local services.
- Shared UI primitives live in a single design system area.
- Data access should flow through repositories or service adapters.
- Core domain types should be reusable across UI, tests, seed data, and future APIs.
- Avoid direct persistence calls from view components.
- Keep AI features behind explicit service interfaces.

### Suggested Layers

- App shell: routing, providers, layout, theme.
- Features: product domains such as growth, practice, knowledge, career, analytics.
- Entities: reusable domain models and display components.
- Shared: UI primitives, utilities, config, hooks.
- Services: persistence, AI, search, analytics calculations.
- Data: seeds, fixtures, mock adapters, schema definitions.

### State Management

Use Zustand for client-side state that crosses component boundaries:

- User profile store.
- Mission store.
- Progress store.
- Knowledge store.
- Job application store.
- UI preferences store.

Keep server or persistence state isolated behind repositories so the app can later move from local storage to a backend without large UI rewrites.

### Persistence Strategy

MVP:

- Local-first storage using localStorage or IndexedDB through a persistence adapter.
- Seed data for demo and development.
- Import/export JSON for user-owned data.

Future:

- Supabase, PostgreSQL, or equivalent backend.
- Authentication.
- Cloud sync.
- Team and organization workspaces.
- Public roadmap and content marketplace.

### AI Architecture

AI features should use a provider-agnostic interface:

- CoachService
- FeedbackService
- RoadmapGenerationService
- ReviewSummaryService

The UI should not depend directly on any AI SDK. AI calls must be optional, cancellable, and transparent to users.

### Testing Strategy

- Unit tests for domain calculations and stores.
- Component tests for reusable UI and feature components.
- Integration tests for core workflows.
- End-to-end tests for onboarding, daily missions, learning path progress, and job tracking.
- Accessibility checks for navigation, forms, dialogs, and charts.

## 11. Folder Structure

Recommended repository structure:

```text
career-os/
  docs/
    CAREEROS_PRD.md
    ARCHITECTURE.md
    CONTRIBUTING.md
    ROADMAP.md
  public/
  src/
    app/
      App.tsx
      router.tsx
      providers.tsx
      layouts/
    assets/
    components/
      ui/
      layout/
      feedback/
      data-display/
      forms/
    config/
    data/
      seed/
      fixtures/
    domains/
      analytics/
      career/
      gamification/
      goals/
      growth/
      knowledge/
      practice/
      profile/
    features/
      dashboard/
      onboarding/
      command-menu/
      search/
    hooks/
    lib/
      utils.ts
      dates.ts
      storage.ts
    services/
      ai/
      persistence/
      search/
    stores/
    styles/
    types/
    test/
  .github/
    ISSUE_TEMPLATE/
    workflows/
  package.json
  vite.config.ts
  tsconfig.json
  tailwind.config.ts
  README.md
```

### Domain Module Shape

```text
domains/growth/
  components/
  hooks/
  pages/
  services/
  stores/
  types.ts
  routes.tsx
  index.ts
```

## 12. UI Component Hierarchy

### App Shell

- App
  - AppProviders
  - Router
  - RootLayout
    - Sidebar
    - MobileTabBar
    - TopBar
    - CommandMenu
    - MainContent

### Dashboard

- DashboardPage
  - TodaySummary
  - DailyMissionList
  - ProgressOverview
  - ActiveGoals
  - ReadinessSnapshot
  - WeeklyReviewPrompt
  - RecentActivity

### Growth

- GrowthLayout
  - RoadmapListPage
  - RoadmapDetailPage
    - RoadmapHeader
    - MilestoneTimeline
    - LinkedLearningPaths
    - SkillCoveragePanel
  - LearningPathPage
    - PathHeader
    - ModuleList
    - LearningUnitPanel
    - ProgressSidebar
  - SkillTreePage
    - SkillTreeCanvas
    - SkillDetailDrawer
    - EvidenceList
  - GoalsPage
    - GoalList
    - GoalEditor
    - GoalProgressPanel

### Practice

- PracticeLayout
  - MockInterviewPage
  - PracticeSessionPage
  - QuestionBankPage
  - BehavioralStoriesPage
  - PracticeFeedbackPanel

### Knowledge

- KnowledgeLayout
  - NotesPage
    - NotesList
    - NoteEditor
    - NoteMetadataPanel
  - FlashcardsPage
    - DeckList
    - FlashcardReview
    - CardEditor
  - RevisionPlannerPage
  - ResourcesPage

### Career

- CareerLayout
  - ResumeTrackerPage
  - JobApplicationsPage
    - ApplicationBoard
    - ApplicationDetailDrawer
  - ContactsPage
  - ImpactJournalPage

### Analytics

- AnalyticsLayout
  - ProgressCharts
  - ReadinessScoreCard
  - SkillCoverageChart
  - ActivityHeatmap
  - GoalProgressChart

### Shared Components

- Button
- Input
- Textarea
- Select
- Dialog
- Drawer
- Sheet
- Tabs
- Tooltip
- Badge
- Card
- EmptyState
- DataTable
- ChartContainer
- ProgressRing
- StatCard
- Timeline
- CommandItem

## 13. Development Roadmap

### Phase 0: Foundation

- Repository setup.
- Vite React TypeScript app.
- Tailwind CSS and shadcn/ui setup.
- Routing and app shell.
- Design tokens.
- Domain type definitions.
- Seed data.
- Local persistence adapter.
- Contribution documentation.

### Phase 1: MVP Product Loop

- Onboarding.
- Dashboard.
- Career profile.
- Goals.
- Learning paths.
- Daily missions.
- Skill progress.
- Notes.
- Flashcards.
- Basic analytics.
- Import/export data.

### Phase 2: Practice And Readiness

- Mock interview tracking.
- Practice sessions.
- Behavioral story bank.
- Readiness scoring.
- Practice feedback model.
- Skill evidence tracking.

### Phase 3: Career Execution

- Resume version tracking.
- Job application board.
- Contacts.
- Interview pipeline.
- Impact journal.
- Weekly reviews.

### Phase 4: AI Coach

- AI coach interface.
- Roadmap suggestions.
- Weekly review summaries.
- Practice feedback.
- Personalized next actions.
- Optional provider configuration.

### Phase 5: Cloud And Community

- Authentication.
- Cloud sync.
- Public roadmap/content packs.
- Contributor content workflow.
- Plugin-like career track packs.
- Community templates.

## 14. MVP Scope

The MVP must prove the core CareerOS loop:

Plan growth, execute daily missions, capture knowledge, track progress, and review readiness.

### MVP Must Have

- Responsive app shell.
- Onboarding with career track and target role.
- Dashboard with daily missions and progress summary.
- Career goals.
- Learning paths with modules and completion state.
- Skill tree or skill list with progress tracking.
- Notes.
- Flashcards with basic review scheduling.
- Daily missions.
- Weekly review.
- Basic analytics using Recharts.
- Local persistence.
- Seed/demo data.
- JSON import/export.

### MVP Should Have

- Command menu.
- Global search.
- Achievement basics.
- Resume tracker basics.
- Job application tracker basics.

### MVP Can Defer

- Authentication.
- Backend.
- Real AI integration.
- Collaborative workspaces.
- Social features.
- Content marketplace.
- Advanced spaced repetition.
- Advanced skill graph visualization.

## 15. Future Roadmap

### Advanced Learning

- Adaptive learning path recommendations.
- Public and community-authored roadmaps.
- Certification tracking.
- Resource quality scoring.
- Learning path versioning.

### Advanced Practice

- Live mock interview mode.
- AI-generated interview questions.
- Rubric-based feedback.
- Audio/video practice review.
- Leadership scenario simulator.

### Advanced Analytics

- Skill decay detection.
- Readiness forecasting.
- Career goal probability indicators.
- Time investment analytics.
- Promotion readiness reports.

### Collaboration

- Mentorship workspaces.
- Coach review mode.
- Team learning cohorts.
- Shared roadmaps.
- Public profiles.

### Ecosystem

- GitHub contribution integration.
- Calendar integration.
- Notion import/export.
- LinkedIn profile import.
- Resume parser.
- Browser extension for saving jobs and resources.

## 16. GitHub Repository Structure

### Recommended Repository Files

- README.md
- LICENSE
- CODE_OF_CONDUCT.md
- CONTRIBUTING.md
- SECURITY.md
- CHANGELOG.md
- ROADMAP.md
- docs/CAREEROS_PRD.md
- docs/ARCHITECTURE.md
- docs/DESIGN_SYSTEM.md
- docs/DATA_MODEL.md
- docs/AI_ARCHITECTURE.md

### GitHub Workflows

- CI for lint, typecheck, test, and build.
- PR preview deployment.
- Dependency audit.
- Accessibility smoke tests.
- Release workflow.

### Issue Labels

- area: dashboard
- area: growth
- area: practice
- area: knowledge
- area: career
- area: analytics
- area: design-system
- type: bug
- type: feature
- type: docs
- type: refactor
- good first issue
- help wanted
- priority: high
- priority: medium
- priority: low

### Branching Strategy

- main: stable, deployable branch.
- feature branches for all changes.
- conventional commits encouraged.
- pull requests required for main.

## 17. Coding Standards

### TypeScript

- Use strict TypeScript.
- Prefer explicit domain types for persisted data.
- Avoid `any` except when wrapping unknown external data.
- Validate imported or external data before use.
- Keep domain calculations pure when possible.

### React

- Use function components.
- Keep components small and purposeful.
- Separate container logic from reusable presentation components when complexity grows.
- Prefer composition over large prop-heavy components.
- Avoid storing derived state unless necessary.

### State

- Use Zustand for cross-route client state.
- Keep feature-specific stores inside feature or domain modules.
- Keep persistence adapters separate from components.
- Use selectors to reduce unnecessary re-renders.

### Styling

- Use Tailwind CSS and shadcn/ui conventions.
- Prefer design tokens over one-off colors.
- Maintain consistent spacing, typography, and radius.
- Use accessible contrast.
- Avoid decorative complexity that reduces scanability.

### Data And Persistence

- Model all persisted entities with stable IDs.
- Include `createdAt` and `updatedAt` where relevant.
- Use repository interfaces for storage operations.
- Support future migration from local persistence to backend.

### Testing

- Test domain calculations.
- Test store actions.
- Test critical user workflows.
- Test accessibility for navigation, dialogs, and forms.
- Require typecheck and build to pass before merge.

### Code Review Expectations

- Clear scope.
- No unrelated refactors.
- Strong naming.
- Accessible UI.
- Tests for risky behavior.
- Documentation updates when product behavior changes.

## 18. Contribution Guidelines

CareerOS should be welcoming to engineers, designers, writers, educators, and career coaches.

### Contributor Principles

- Favor clarity over cleverness.
- Keep changes focused.
- Respect existing architecture.
- Document user-facing behavior.
- Build accessible experiences.
- Treat content quality as product quality.

### How To Contribute

1. Read README.md, CONTRIBUTING.md, and docs/CAREEROS_PRD.md.
2. Pick an issue labeled `good first issue`, `help wanted`, or a specific area label.
3. Discuss large features before implementation.
4. Create a feature branch.
5. Add or update tests where appropriate.
6. Run lint, typecheck, test, and build.
7. Open a pull request with a clear summary and screenshots for UI changes.

### Pull Request Template

Each PR should include:

- Summary.
- Motivation.
- Screenshots or recordings for UI changes.
- Testing performed.
- Risk and rollback notes.
- Related issue.

### Content Contributions

CareerOS should support high-quality community content such as roadmaps, learning paths, interview prompts, rubrics, and templates.

Content contributions should include:

- Target audience.
- Career track.
- Level.
- Learning objectives.
- Prerequisites.
- Estimated time.
- Source references where applicable.
- Review notes from maintainers or domain experts.

### Governance Direction

As the project grows, CareerOS should define:

- Maintainer roles.
- Content review process.
- Security policy.
- Release cadence.
- Decision records.
- Community standards.

## Success Metrics

### Product Metrics

- Activation: percentage of users who complete onboarding and activate a roadmap.
- Engagement: daily and weekly mission completion.
- Retention: weekly active users.
- Learning progress: completed modules and skill progress.
- Practice progress: completed practice sessions and mock interviews.
- Reflection: completed weekly reviews.
- Career execution: applications, contacts, and resume updates.

### Quality Metrics

- App load time.
- Build reliability.
- Type coverage.
- Test coverage for critical flows.
- Accessibility findings.
- Issue resolution time.
- Contributor onboarding success.

## Open Questions

- Should MVP data be localStorage, IndexedDB, or an abstraction that can support both?
- Should CareerOS launch with one track first, such as Software Engineering, or multiple seed tracks?
- Should roadmaps be bundled as JSON content packs?
- What should the first readiness scoring rubric include?
- How much of the AI coach should be included before authentication and cloud sync?
- Should user data be exportable as Markdown, JSON, or both?
- Should the project optimize first for individual local-first use or hosted SaaS deployment?

## Recommended MVP Build Order

1. App shell, routing, theme, and navigation.
2. Domain models, seed data, and persistence adapter.
3. Onboarding and profile setup.
4. Dashboard and daily missions.
5. Learning paths and skill progress.
6. Notes and flashcards.
7. Weekly review and analytics.
8. Resume and job application basics.
9. Import/export.
10. Documentation and contribution workflow.

