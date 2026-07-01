# CareerOS UX Blueprint

## Design Direction

CareerOS should feel calm, precise, and habit-forming. The interface should combine Linear's focus and keyboard-first workflows, Notion's spacious information architecture, GitHub's clarity for open-source users, Stripe Dashboard's trustworthy data presentation, and Duolingo's lightweight daily progress loop.

The MVP should avoid feeling like a course marketplace or an interview-prep cram tool. It should feel like a personal operating system for career growth: structured, motivating, searchable, and easy to return to every day.

## Experience Principles

- Default to clarity over decoration.
- Keep screens dense enough for power users but calm enough for daily use.
- Use progressive disclosure for complex career planning.
- Make the next action obvious on every screen.
- Treat progress as evidence-based, not vanity metrics.
- Keep AI absent from MVP-critical paths.
- Make empty states useful and action-oriented.
- Make navigation predictable across desktop and mobile.
- Use plain language, not productivity theater.

## MVP Screen Inventory

### Onboarding

- Welcome
- Career Track Setup
- Goal Setup
- Roadmap Starter
- Onboarding Complete

### Core App

- Dashboard
- Today / Daily Missions
- Goals
- Goal Detail
- Learning Paths
- Learning Path Detail
- Learning Unit
- Skill Progress
- Skill Detail
- Notes
- Note Editor
- Flashcards
- Flashcard Review
- Weekly Review
- Analytics
- Resume Tracker
- Job Applications
- Job Application Detail
- Search / Command Menu
- Settings
- Import / Export

## Navigation Map

```text
Welcome
  -> Career Track Setup
    -> Goal Setup
      -> Roadmap Starter
        -> Onboarding Complete
          -> Dashboard

Dashboard
  -> Today / Daily Missions
  -> Goals
  -> Learning Path Detail
  -> Weekly Review
  -> Analytics
  -> Search / Command Menu

Today / Daily Missions
  -> Learning Unit
  -> Note Editor
  -> Flashcard Review
  -> Weekly Review
  -> Dashboard

Goals
  -> Goal Detail
    -> Learning Path Detail
    -> Skill Detail
    -> Weekly Review

Growth
  -> Learning Paths
    -> Learning Path Detail
      -> Learning Unit
      -> Note Editor
      -> Skill Detail
  -> Skill Progress
    -> Skill Detail
      -> Learning Path Detail
      -> Note Editor

Knowledge
  -> Notes
    -> Note Editor
      -> Flashcard creation
  -> Flashcards
    -> Flashcard Review

Career
  -> Resume Tracker
  -> Job Applications
    -> Job Application Detail

Analytics
  -> Skill Detail
  -> Goal Detail
  -> Weekly Review

Settings
  -> Import / Export
  -> Profile preferences
```

## Global Layout Model

### Desktop

```text
+--------------------------------------------------------------------------------+
| Top Bar: Search, Quick Add, Streak, Profile                                      |
+----------------------+---------------------------------------------------------+
| Sidebar              | Page Header                                             |
| - Dashboard          | Breadcrumbs / Actions                                   |
| - Today              +---------------------------------------------------------+
| - Growth             |                                                         |
| - Knowledge          | Main Content                                             |
| - Career             |                                                         |
| - Analytics          |                                                         |
| - Settings           |                                                         |
+----------------------+---------------------------------------------------------+
```

### Mobile

```text
+----------------------------------+
| Top Bar: Page title, Search, Add |
+----------------------------------+
|                                  |
| Main Content                     |
|                                  |
+----------------------------------+
| Home Today Growth Knowledge More |
+----------------------------------+
```

## Screen Specifications

## 1. Welcome

### Purpose

Introduce CareerOS as a career operating system and move the user into setup quickly.

### Target User

New users, open-source evaluators, and returning users without local data.

### Layout

- Centered first-run panel.
- Product name and concise value proposition.
- Primary action to start setup.
- Secondary action to load demo data or import existing data.

### Components

- Brand header.
- Short product statement.
- Primary button: Start CareerOS.
- Secondary buttons: Try demo, Import data.
- Footer links: GitHub, docs, privacy/data note.

### Actions

- Start onboarding.
- Load demo workspace.
- Import JSON data.
- Open project repository.

### Empty States

- Default state is the empty workspace state.
- Show reassuring copy: no account required for local MVP.

### Loading States

- Loading demo data indicator.
- Import validation progress.

### Error States

- Import file invalid.
- Demo data failed to load.

### Navigation

- Start CareerOS -> Career Track Setup.
- Try demo -> Dashboard.
- Import data -> Import / Export.

### Future Enhancements

- Sign in.
- Cloud workspace selection.
- Public template gallery.

### Wireframe

```text
+------------------------------------------------------+
|                                                      |
|                    CareerOS                          |
|        Your operating system for career growth        |
|                                                      |
|   [ Start CareerOS ]   [ Try demo ]   [ Import ]      |
|                                                      |
|        Open source • Local-first • Built for tech     |
|                                                      |
|                  GitHub   Docs                        |
+------------------------------------------------------+
```

## 2. Career Track Setup

### Purpose

Capture the user's current track, level, target role, and focus areas.

### Target User

New users defining their initial career context.

### Layout

- Step-based onboarding shell.
- Left column with setup progress.
- Main column with career track form.
- Right contextual preview of recommended modules.

### Components

- Stepper.
- Track cards.
- Current role input.
- Target role input.
- Level select.
- Focus area multi-select.
- Continue button.

### Actions

- Select career track.
- Enter current and target roles.
- Select current and target levels.
- Choose focus areas.
- Continue to Goal Setup.

### Empty States

- No track selected: show comparison cards.
- No focus areas selected: suggest common defaults based on track.

### Loading States

- Loading starter tracks.
- Preparing recommended roadmap preview.

### Error States

- Required role or level missing.
- Unsupported imported track.

### Navigation

- Back -> Welcome.
- Continue -> Goal Setup.

### Future Enhancements

- LinkedIn import.
- Resume-derived profile setup.
- Multi-track profiles.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Setup CareerOS                                                    Step 1 of 4   |
+----------------------+---------------------------------------------------------+
| 1 Track              | What are you growing toward?                            |
| 2 Goals              |                                                         |
| 3 Roadmap            | [ Software Engineering ] [ Engineering Management ]      |
| 4 Finish             | [ Product Management  ] [ Technical Program Mgmt ]       |
|                      |                                                         |
|                      | Current role     [ Senior Software Engineer      ]       |
|                      | Target role      [ Staff Software Engineer       ]       |
|                      | Current level    [ L5                         v ]        |
|                      | Target level     [ L6                         v ]        |
|                      |                                                         |
|                      | Focus areas                                             |
|                      | [System Design] [Leadership] [Execution] [Interview]    |
|                      |                                                         |
|                      |                              [ Back ] [ Continue ]       |
+----------------------+---------------------------------------------------------+
```

## 3. Goal Setup

### Purpose

Convert broad ambition into concrete career goals.

### Target User

Users who know their target direction but need structure.

### Layout

- Stepper sidebar.
- Goal templates at top.
- Editable goal cards below.
- Success criteria panel.

### Components

- Goal template chips.
- Goal card list.
- Goal editor fields.
- Target date picker.
- Priority selector.
- Success criteria checklist.

### Actions

- Add career goal.
- Use a suggested template.
- Edit title, target date, category, priority.
- Add success criteria.
- Continue to Roadmap Starter.

### Empty States

- No goals yet: show three starter suggestions.

### Loading States

- Generating suggested goals from selected track.

### Error States

- Goal missing title.
- Target date invalid.

### Navigation

- Back -> Career Track Setup.
- Continue -> Roadmap Starter.

### Future Enhancements

- AI goal refinement.
- Goal templates from community packs.
- Goal dependencies.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Setup CareerOS                                                    Step 2 of 4   |
+----------------------+---------------------------------------------------------+
| 1 Track              | Define your first goals                                  |
| 2 Goals              |                                                         |
| 3 Roadmap            | Suggested                                                |
| 4 Finish             | [Promotion readiness] [System design depth] [Job search] |
|                      |                                                         |
|                      | Goals                                                   |
|                      | +-----------------------------------------------------+ |
|                      | | Staff Engineer readiness                         P1 | |
|                      | | Target: Dec 2026                                    | |
|                      | | Criteria: architecture, influence, execution        | |
|                      | +-----------------------------------------------------+ |
|                      |                                                         |
|                      | [ + Add goal ]                     [ Back ] [ Continue ] |
+----------------------+---------------------------------------------------------+
```

## 4. Roadmap Starter

### Purpose

Recommend an initial roadmap and let users activate the paths that matter now.

### Target User

New users completing onboarding.

### Layout

- Stepper sidebar.
- Roadmap summary.
- Milestone timeline.
- Recommended learning paths.
- Activate roadmap action.

### Components

- Roadmap card.
- Milestone timeline.
- Learning path rows.
- Skill coverage summary.
- Activation button.

### Actions

- Review roadmap.
- Activate or skip paths.
- Adjust estimated weekly time.
- Continue.

### Empty States

- No generated roadmap: offer blank workspace and demo roadmap.

### Loading States

- Building roadmap from profile.

### Error States

- Roadmap seed unavailable.

### Navigation

- Back -> Goal Setup.
- Continue -> Onboarding Complete.

### Future Enhancements

- AI-generated roadmap.
- Community roadmap marketplace.
- Roadmap comparison.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Setup CareerOS                                                    Step 3 of 4   |
+----------------------+---------------------------------------------------------+
| 1 Track              | Starter roadmap                                         |
| 2 Goals              |                                                         |
| 3 Roadmap            | Staff Engineer Growth Track             12 weeks         |
| 4 Finish             | [ Architecture ]---[ Influence ]---[ Execution ]         |
|                      |                                                         |
|                      | Recommended paths                                       |
|                      | [x] System Design Foundations        18 units            |
|                      | [x] Technical Leadership             12 units            |
|                      | [ ] Behavioral Story Bank             8 units            |
|                      |                                                         |
|                      | Weekly time [ 5 hrs v ]                                  |
|                      |                              [ Back ] [ Activate ]       |
+----------------------+---------------------------------------------------------+
```

## 5. Onboarding Complete

### Purpose

Confirm setup and direct the user into their first meaningful action.

### Target User

New users after setup.

### Layout

- Confirmation summary.
- First mission preview.
- Dashboard entry action.

### Components

- Completion message.
- Profile summary.
- Today's first missions.
- Primary button.

### Actions

- Go to dashboard.
- Start first mission.
- Edit setup.

### Empty States

- No missions generated: route to dashboard with quick-add mission.

### Loading States

- Creating workspace.

### Error States

- Workspace setup failed.

### Navigation

- Start first mission -> Today.
- Go to dashboard -> Dashboard.

### Future Enhancements

- Calendar reminder setup.
- Notification preferences.

### Wireframe

```text
+------------------------------------------------------+
| CareerOS is ready                                    |
|                                                      |
| Track: Software Engineering                          |
| Goal: Staff Engineer readiness                       |
| Roadmap: Staff Engineer Growth Track                 |
|                                                      |
| Today's start                                        |
| [ ] Complete one system design unit                  |
| [ ] Create one career note                           |
| [ ] Review goal criteria                             |
|                                                      |
| [ Start first mission ]   [ Go to dashboard ]         |
+------------------------------------------------------+
```

## 6. Dashboard

### Purpose

Give users a high-confidence overview of today, active growth, progress, and readiness.

### Target User

Returning users and daily active users.

### Layout

- App shell.
- Page header with greeting and quick-add.
- Left main column: today's missions and active paths.
- Right column: progress, streak, readiness, weekly review.
- Lower area: recent activity.

### Components

- Daily mission list.
- Active goal cards.
- Learning path progress.
- Readiness snapshot.
- Streak widget.
- Weekly review prompt.
- Recent activity feed.

### Actions

- Complete mission.
- Start next mission.
- Add goal, note, flashcard, application, practice session.
- Open active roadmap or analytics.

### Empty States

- No missions: create starter mission or generate from active goal.
- No active path: prompt to activate learning path.
- No activity: suggest first note or mission.

### Loading States

- Skeleton stat cards.
- Mission row placeholders.
- Chart placeholder.

### Error States

- Failed to load local data.
- Corrupt saved workspace with recovery action.

### Navigation

- Mission -> linked screen.
- Readiness -> Analytics.
- Active goal -> Goal Detail.
- Active path -> Learning Path Detail.

### Future Enhancements

- AI next action.
- Personalized dashboard layout.
- Calendar integration.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Search CareerOS...                         + Add   Streak 7   Profile          |
+----------------------+---------------------------------------------------------+
| Dashboard            | Good afternoon, Shamanth                                |
| Today                | Focus: Staff Engineer readiness                         |
| Growth               |                                                         |
| Knowledge            | +----------------------------+ +----------------------+ |
| Career               | | Today's missions          | | Readiness            | |
| Analytics            | | [ ] System design unit    | | 68%                  | |
| Settings             | | [ ] Review flashcards     | | Architecture 72%     | |
|                      | | [ ] Update goal evidence  | | Leadership 55%       | |
|                      | +----------------------------+ +----------------------+ |
|                      |                                                         |
|                      | +----------------------------+ +----------------------+ |
|                      | | Active paths               | | Weekly review        | |
|                      | | System Design       42%    | | Due Friday           | |
|                      | | Leadership          18%    | | [ Start review ]     | |
|                      | +----------------------------+ +----------------------+ |
|                      |                                                         |
|                      | Recent activity                                          |
|                      | - Completed CAP theorem note                             |
|                      | - Reviewed 12 flashcards                                 |
+----------------------+---------------------------------------------------------+
```

## 7. Today / Daily Missions

### Purpose

Help users complete a focused set of daily actions.

### Target User

Daily users who want a clear, finite workflow.

### Layout

- Header with date, streak, completion progress.
- Mission list grouped by type.
- Right panel with mission detail and linked context.

### Components

- Mission completion progress bar.
- Mission groups.
- Mission detail panel.
- XP indicator.
- Add mission button.
- Reschedule action.

### Actions

- Complete mission.
- Start linked task.
- Reschedule mission.
- Add custom mission.
- Skip with reason.

### Empty States

- No missions today: generate from active goals, add manually, or rest day.

### Loading States

- Mission skeleton rows.

### Error States

- Mission update failed.
- Linked entity missing.

### Navigation

- Linked mission -> Learning Unit, Note Editor, Flashcard Review, Weekly Review, Job Detail.
- Back -> Dashboard.

### Future Enhancements

- Smart mission scheduling.
- Push reminders.
- Calendar sync.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Today                                                   2 of 4 complete         |
+----------------------+---------------------------------------------------------+
| Dashboard            | Daily missions                         + Add mission     |
| Today                |                                                         |
| Growth               | Learn                                                   |
| Knowledge            | [ ] Read: Capacity estimation                  20 XP     |
| Career               | [x] Finish: API design basics                  30 XP     |
| Analytics            |                                                         |
| Settings             | Practice                                                |
|                      | [ ] Log one system design drill                40 XP     |
|                      |                                                         |
|                      | Review                                                  |
|                      | [x] Review 12 flashcards                       15 XP     |
|                      |                                                         |
|                      | +-----------------------------------------------------+ |
|                      | | Selected mission                                    | |
|                      | | Read: Capacity estimation                           | |
|                      | | Linked path: System Design Foundations              | |
|                      | | [ Start ] [ Reschedule ] [ Skip ]                   | |
|                      | +-----------------------------------------------------+ |
+----------------------+---------------------------------------------------------+
```

## 8. Goals

### Purpose

Provide a focused view of active career goals and their progress.

### Target User

Users managing career direction and milestones.

### Layout

- Header with add goal.
- Filter tabs by status.
- Goal cards or table.
- Right summary panel for goal distribution.

### Components

- Goal list.
- Status tabs.
- Priority badges.
- Progress bars.
- Target date indicators.
- Add goal dialog.

### Actions

- Create goal.
- Edit goal.
- Mark goal complete.
- Archive goal.
- Link skills or paths.

### Empty States

- No goals: show templates by career track.

### Loading States

- Goal card skeletons.

### Error States

- Goal save failed.
- Invalid linked entity.

### Navigation

- Goal card -> Goal Detail.
- Linked path -> Learning Path Detail.
- Linked skill -> Skill Detail.

### Future Enhancements

- Goal dependencies.
- Goal health scoring.
- Mentor review comments.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Goals                                                   + New goal              |
+----------------------+---------------------------------------------------------+
| Dashboard            | [Active] [Planned] [Completed] [Archived]               |
| Today                |                                                         |
| Growth               | +-----------------------------------------------------+ |
|  - Goals             | | Staff Engineer readiness                    42% P1  | |
|  - Learning Paths    | | Target: Dec 2026                                    | |
|  - Skills            | | Architecture, influence, execution                  | |
| Knowledge            | +-----------------------------------------------------+ |
| Career               | +-----------------------------------------------------+ |
| Analytics            | | Build system design portfolio                15% P2  | |
| Settings             | | Target: Sep 2026                                    | |
|                      | +-----------------------------------------------------+ |
|                      |                                                         |
|                      | Summary: 2 active • 1 at risk • 0 completed this month |
+----------------------+---------------------------------------------------------+
```

## 9. Goal Detail

### Purpose

Show goal progress, linked work, success criteria, and evidence.

### Target User

Users actively pursuing a specific career outcome.

### Layout

- Header with status, priority, target date.
- Main column: criteria, linked paths, evidence.
- Right column: progress, recent activity, next actions.

### Components

- Goal metadata.
- Success criteria checklist.
- Linked learning paths.
- Linked skills.
- Evidence list.
- Notes and activity feed.

### Actions

- Edit goal.
- Add criterion.
- Link path or skill.
- Add evidence.
- Convert next action into mission.
- Mark complete.

### Empty States

- No criteria: suggest measurable criteria.
- No evidence: prompt to add note, project, interview result, or review.

### Loading States

- Detail skeleton.

### Error States

- Goal not found.
- Linked data unavailable.

### Navigation

- Back -> Goals.
- Linked path -> Learning Path Detail.
- Linked skill -> Skill Detail.
- Add note -> Note Editor.

### Future Enhancements

- AI critique of goal quality.
- Evidence scoring.
- Goal review history.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Goals / Staff Engineer readiness                         Edit   Complete       |
+----------------------+---------------------------------------------------------+
| Growth               | Staff Engineer readiness                                |
|  - Goals             | P1 • Active • Target Dec 2026                           |
|  - Learning Paths    |                                                         |
|  - Skills            | Success criteria                                        |
|                      | [x] Complete system design foundations                  |
|                      | [ ] Publish 3 design documents                          |
|                      | [ ] Practice 5 leadership scenarios                     |
|                      |                                                         |
|                      | Linked work                         Progress            |
|                      | System Design Foundations           42%                 |
|                      | Technical Leadership                18%                 |
|                      |                                                         |
|                      | Evidence                                                |
|                      | + Add evidence                                           |
|                      | - CAP theorem note                                       |
+----------------------+---------------------------------------------------------+
```

## 10. Learning Paths

### Purpose

Show available and active learning paths for the user's selected career track.

### Target User

Users planning structured learning.

### Layout

- Header with filters.
- Active paths section.
- Recommended paths grid/list.
- Path library.

### Components

- Path cards.
- Status filters.
- Track filter.
- Difficulty filter.
- Progress indicators.
- Estimated time labels.

### Actions

- Activate path.
- Continue active path.
- Filter paths.
- Search paths.

### Empty States

- No active paths: show recommended starter paths.
- No search results: offer clear filters.

### Loading States

- Path card skeletons.

### Error States

- Path library failed to load.

### Navigation

- Path card -> Learning Path Detail.
- Continue -> next Learning Unit.

### Future Enhancements

- Community paths.
- Path ratings.
- Path version history.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Learning Paths                           Search paths...        + Custom path   |
+----------------------+---------------------------------------------------------+
| Growth               | Active                                                  |
|  - Goals             | +----------------------+ +----------------------+       |
|  - Learning Paths    | | System Design        | | Technical Leadership |       |
|  - Skills            | | 42% • 18 units       | | 18% • 12 units       |       |
|                      | | [ Continue ]         | | [ Continue ]         |       |
|                      | +----------------------+ +----------------------+       |
|                      |                                                         |
|                      | Recommended                                             |
|                      | [Architecture Writing] [Behavioral Story Bank]          |
|                      |                                                         |
|                      | Filters: [Track v] [Difficulty v] [Duration v]          |
+----------------------+---------------------------------------------------------+
```

## 11. Learning Path Detail

### Purpose

Show path structure, module progress, outcomes, and next unit.

### Target User

Users following an active learning path.

### Layout

- Header with progress and continue button.
- Main module list.
- Right rail with outcomes, linked skills, notes, and stats.

### Components

- Path header.
- Module accordion.
- Unit rows.
- Progress bar.
- Outcome list.
- Linked skill chips.
- Notes panel.

### Actions

- Continue next unit.
- Mark unit complete.
- Add note.
- Create flashcard.
- Link to goal.

### Empty States

- Path has no modules: show content issue and link to contribute.

### Loading States

- Module skeletons.

### Error States

- Path not found.
- Progress save failed.

### Navigation

- Unit row -> Learning Unit.
- Skill chip -> Skill Detail.
- Goal link -> Goal Detail.

### Future Enhancements

- Path discussion.
- Community contributions.
- Prerequisite graph.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Learning Paths / System Design Foundations               Continue next unit     |
+----------------------+---------------------------------------------------------+
| Growth               | System Design Foundations                 42% complete  |
|  - Learning Paths    |                                                         |
|  - Skills            | Module 1: Fundamentals                                  |
|                      | [x] Scalability basics                                  |
|                      | [x] API design basics                                   |
|                      | [ ] Capacity estimation                                 |
|                      |                                                         |
|                      | Module 2: Distributed systems                           |
|                      | [ ] Caching                                             |
|                      | [ ] Queues                                              |
|                      |                                                         |
|                      | Right rail: Outcomes • Skills • Notes • Stats           |
+----------------------+---------------------------------------------------------+
```

## 12. Learning Unit

### Purpose

Let users complete one focused learning unit and capture artifacts.

### Target User

Users in active learning mode.

### Layout

- Breadcrumb and unit title.
- Main reading/task content.
- Right rail with notes, flashcard action, linked skills.
- Footer with previous, complete, next.

### Components

- Unit content panel.
- Resource list.
- Completion checklist.
- Inline note shortcut.
- Create flashcard action.
- Navigation footer.

### Actions

- Mark complete.
- Add note.
- Create flashcard.
- Open resource.
- Move to next unit.

### Empty States

- No content: show placeholder and contribution link.
- No notes: quick note prompt.

### Loading States

- Content skeleton.

### Error States

- Unit not found.
- Completion save failed.

### Navigation

- Back -> Learning Path Detail.
- Complete -> Next unit or path detail.

### Future Enhancements

- Rich lesson content.
- Embedded exercises.
- AI explanation.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| System Design Foundations / Capacity estimation              Mark complete      |
+----------------------+---------------------------------------------------------+
| Growth               | Capacity estimation                                     |
|                      |                                                         |
|                      | Overview                                                |
|                      | Estimate traffic, storage, bandwidth, and constraints.  |
|                      |                                                         |
|                      | Resources                                               |
|                      | - Internal guide                                        |
|                      | - Example calculation                                   |
|                      |                                                         |
|                      | Checklist                                               |
|                      | [ ] Read overview                                       |
|                      | [ ] Write one example estimate                          |
|                      |                                                         |
|                      | Notes        Flashcards        Linked skills            |
|                      | [ + Note ]    [ + Card ]       Scalability, Estimation  |
|                      |                                                         |
|                      | [ Previous ]                  [ Complete ] [ Next ]     |
+----------------------+---------------------------------------------------------+
```

## 13. Skill Progress

### Purpose

Show career skill domains and progress toward target role expectations.

### Target User

Users assessing strengths, gaps, and readiness.

### Layout

- Header with track and target level.
- Skill domains as rows or grouped panels.
- Progress visualization.
- Gap filters.

### Components

- Skill domain sections.
- Skill rows.
- Progress bars.
- Confidence indicators.
- Evidence count.
- Last practiced date.

### Actions

- Open skill detail.
- Update confidence.
- Add evidence.
- Filter weak skills.
- Link learning path.

### Empty States

- No skill profile: generate from selected track or choose track.

### Loading States

- Skill row skeletons.

### Error States

- Skill graph unavailable.

### Navigation

- Skill row -> Skill Detail.
- Related path -> Learning Path Detail.

### Future Enhancements

- Visual skill tree canvas.
- Skill prerequisites.
- Peer benchmarks.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Skills                                  Target: Staff Software Engineer         |
+----------------------+---------------------------------------------------------+
| Growth               | Filters: [Weak areas] [Recent] [No evidence]            |
|  - Goals             |                                                         |
|  - Learning Paths    | Architecture                                            |
|  - Skills            | API Design                  80%   Evidence 4            |
|                      | Distributed Systems        45%   Evidence 1            |
|                      | Capacity Planning          25%   Evidence 0            |
|                      |                                                         |
|                      | Leadership                                              |
|                      | Technical Writing          35%   Evidence 1            |
|                      | Mentorship                 55%   Evidence 2            |
+----------------------+---------------------------------------------------------+
```

## 14. Skill Detail

### Purpose

Explain a skill, show progress, and connect it to paths, notes, missions, and evidence.

### Target User

Users closing a specific growth gap.

### Layout

- Skill header with progress and confidence.
- Main content: description, expectations, evidence.
- Right rail: related paths, missions, notes.

### Components

- Skill progress card.
- Confidence selector.
- Evidence list.
- Related learning paths.
- Related notes.
- Add evidence dialog.

### Actions

- Update confidence.
- Add evidence.
- Start related path.
- Create mission.
- Add note.

### Empty States

- No evidence: prompt to add artifact.
- No related path: suggest creating custom path.

### Loading States

- Detail skeleton.

### Error States

- Skill not found.

### Navigation

- Back -> Skill Progress.
- Related path -> Learning Path Detail.
- Evidence note -> Note Editor.

### Future Enhancements

- Rubric-based scoring.
- Manager or mentor feedback.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Skills / Capacity Planning                              + Add evidence          |
+----------------------+---------------------------------------------------------+
| Growth               | Capacity Planning                         25%           |
|                      | Confidence: [Low v]                                      |
|                      |                                                         |
|                      | Expectations                                             |
|                      | - Estimate traffic and storage                           |
|                      | - Identify bottlenecks                                   |
|                      | - Communicate tradeoffs                                  |
|                      |                                                         |
|                      | Evidence                                                 |
|                      | No evidence yet                                          |
|                      | [ Add note ] [ Create practice mission ]                 |
|                      |                                                         |
|                      | Related paths: System Design Foundations                 |
+----------------------+---------------------------------------------------------+
```

## 15. Notes

### Purpose

Provide a searchable knowledge base for career learning and practice.

### Target User

Users capturing technical concepts, career reflections, interview notes, and resources.

### Layout

- Split view.
- Left list with search, filters, tags.
- Main preview/editor area.

### Components

- Search input.
- Tag filters.
- Note list.
- Note preview.
- New note button.

### Actions

- Create note.
- Search notes.
- Filter by tag or linked entity.
- Open note.
- Convert note content to flashcard.

### Empty States

- No notes: prompt with note templates.
- No search results: clear filters.

### Loading States

- List skeleton.

### Error States

- Note load failed.
- Search index unavailable.

### Navigation

- Note row -> Note Editor.
- Linked entity -> Path, Skill, Goal, or Application.

### Future Enhancements

- Markdown backlinks.
- Notion import.
- Rich block editor.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Notes                                      Search notes...       + New note     |
+----------------------+---------------------------------------------------------+
| Knowledge            | Tags: [System Design] [Leadership] [Job Search]         |
|  - Notes             |                                                         |
|  - Flashcards        | +----------------------+------------------------------+ |
|                      | | CAP theorem          | CAP theorem                  | |
|                      | | API design basics    | Notes about consistency...  | |
|                      | | Weekly reflection    |                              | |
|                      | | Behavioral stories   | Linked: System Design       | |
|                      | +----------------------+------------------------------+ |
+----------------------+---------------------------------------------------------+
```

## 16. Note Editor

### Purpose

Create and edit structured career notes.

### Target User

Users capturing learning, practice outcomes, reflections, and evidence.

### Layout

- Full editor view.
- Title, metadata, tags.
- Main markdown-style body.
- Right metadata panel.

### Components

- Title input.
- Tag selector.
- Linked entity selector.
- Markdown editor area.
- Save status.
- Flashcard creation action.

### Actions

- Edit note.
- Save note.
- Add tags.
- Link entity.
- Create flashcard.
- Delete or archive note.

### Empty States

- Blank note template.

### Loading States

- Saving indicator.
- Editor skeleton.

### Error States

- Save failed.
- Conflict in local data.

### Navigation

- Back -> Notes.
- Linked entity -> relevant detail screen.

### Future Enhancements

- Slash commands.
- Backlinks.
- Templates.
- Rich embeds.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Notes / New note                                      Saved       + Flashcard   |
+----------------------+---------------------------------------------------------+
| Knowledge            | Title                                                   |
|                      | [ Capacity estimation notes                         ]   |
|                      | Tags [System Design] [Estimation]                       |
|                      | Linked to [Capacity Planning skill v]                   |
|                      |                                                         |
|                      | ------------------------------------------------------- |
|                      | Write notes here...                                     |
|                      |                                                         |
|                      |                                                         |
|                      | ------------------------------------------------------- |
|                      | Right panel: Metadata • Links • History                 |
+----------------------+---------------------------------------------------------+
```

## 17. Flashcards

### Purpose

Help users retain key concepts through lightweight review.

### Target User

Users building long-term recall for technical and career concepts.

### Layout

- Header with review count.
- Deck/tag filters.
- Due cards summary.
- Card table/list.

### Components

- Due count card.
- Deck filters.
- Flashcard list.
- Create card button.
- Review start button.

### Actions

- Start review.
- Create card.
- Edit card.
- Filter by tag.
- Suspend card.

### Empty States

- No cards: create from note or add manually.
- No cards due: show next due time and optional practice anyway.

### Loading States

- Card list skeleton.

### Error States

- Review queue unavailable.

### Navigation

- Start review -> Flashcard Review.
- Card row -> Card editor state.
- Source note -> Note Editor.

### Future Enhancements

- Advanced spaced repetition.
- Decks.
- Import Anki.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Flashcards                                  12 due today        Start review    |
+----------------------+---------------------------------------------------------+
| Knowledge            | Due now                                                 |
|  - Notes             | +------------------+ +------------------+               |
|  - Flashcards        | | System Design 8  | | Leadership 4    |               |
|                      | +------------------+ +------------------+               |
|                      |                                                         |
|                      | Cards                                                   |
|                      | CAP theorem                       Due today             |
|                      | API idempotency                    Tomorrow              |
|                      | STAR story structure               Due today             |
|                      |                                                         |
|                      | [ + New card ]                                           |
+----------------------+---------------------------------------------------------+
```

## 18. Flashcard Review

### Purpose

Provide a fast, focused review loop.

### Target User

Users reviewing due cards as part of daily missions.

### Layout

- Minimal distraction-free review mode.
- Progress header.
- Center card.
- Bottom answer controls.

### Components

- Review progress.
- Flashcard front/back.
- Reveal button.
- Difficulty buttons.
- Exit review.

### Actions

- Reveal answer.
- Mark again, hard, good, easy.
- Edit card.
- Exit review.

### Empty States

- No due cards: show completion state.

### Loading States

- Loading next card.

### Error States

- Card save failed.

### Navigation

- Finish -> Flashcards or Today.
- Exit -> Flashcards.

### Future Enhancements

- Keyboard shortcuts.
- Audio.
- Cloze deletion.

### Wireframe

```text
+------------------------------------------------------+
| Review                                      3 / 12    |
+------------------------------------------------------+
|                                                      |
| +--------------------------------------------------+ |
| | What is idempotency in API design?               | |
| |                                                  | |
| |                  [ Reveal ]                      | |
| +--------------------------------------------------+ |
|                                                      |
| [ Again ] [ Hard ] [ Good ] [ Easy ]        Exit     |
+------------------------------------------------------+
```

## 19. Weekly Review

### Purpose

Help users reflect, recalibrate, and choose next week's focus.

### Target User

Users closing a week or restarting momentum.

### Layout

- Review wizard or single structured page.
- Metrics summary at top.
- Reflection prompts.
- Next week focus.

### Components

- Weekly stats.
- Wins textarea.
- Challenges textarea.
- Lessons textarea.
- Next focus selector.
- Goal adjustment prompts.

### Actions

- Complete review.
- Save draft.
- Update goals.
- Generate next missions.

### Empty States

- No activity this week: reflection still available with restart prompts.

### Loading States

- Loading weekly metrics.
- Saving review.

### Error States

- Review save failed.

### Navigation

- From Dashboard or Today.
- Complete -> Dashboard.
- Goal links -> Goal Detail.

### Future Enhancements

- AI summary.
- Calendar digest.
- Mentor share.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Weekly Review                                      Week of Jun 29, 2026         |
+----------------------+---------------------------------------------------------+
| Dashboard            | This week                                               |
| Today                | Missions 18 • Notes 5 • Cards reviewed 64 • Streak 7    |
|                      |                                                         |
|                      | Wins                                                    |
|                      | [                                                   ]   |
|                      | Challenges                                              |
|                      | [                                                   ]   |
|                      | Lessons                                                 |
|                      | [                                                   ]   |
|                      | Next week focus                                         |
|                      | [ System Design v ] [ Leadership v ]                    |
|                      |                                                         |
|                      | [ Save draft ]                         [ Complete ]     |
+----------------------+---------------------------------------------------------+
```

## 20. Analytics

### Purpose

Show measurable progress, readiness, skill coverage, and activity patterns.

### Target User

Users evaluating whether their habits are translating into readiness.

### Layout

- Header with date range.
- Top stat cards.
- Charts in balanced grid.
- Insight list.

### Components

- Readiness score card.
- Skill coverage chart.
- Mission completion chart.
- Activity heatmap.
- Goal progress chart.
- Insight panel.

### Actions

- Change date range.
- Filter by goal or track.
- Open skill detail.
- Open goal detail.

### Empty States

- Not enough data: show required actions to unlock analytics.

### Loading States

- Chart skeletons.

### Error States

- Chart calculation failed.

### Navigation

- Skill chart -> Skill Detail.
- Goal chart -> Goal Detail.
- Review prompt -> Weekly Review.

### Future Enhancements

- Forecasting.
- Skill decay.
- Benchmarking.
- Export report.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Analytics                                      [Last 30 days v]                 |
+----------------------+---------------------------------------------------------+
| Analytics            | +-------------+ +-------------+ +-------------+          |
|                      | | Readiness   | | Missions    | | Study time  |          |
|                      | | 68%         | | 74% done    | | 21 hrs      |          |
|                      | +-------------+ +-------------+ +-------------+          |
|                      |                                                         |
|                      | +--------------------------+ +------------------------+  |
|                      | | Skill coverage chart     | | Activity heatmap       |  |
|                      | |                          | |                        |  |
|                      | +--------------------------+ +------------------------+  |
|                      |                                                         |
|                      | Insights                                                |
|                      | - Capacity planning has low evidence                    |
|                      | - Review consistency improved this week                 |
+----------------------+---------------------------------------------------------+
```

## 21. Resume Tracker

### Purpose

Track resume versions for different target roles.

### Target User

Users preparing for job searches or promotion packets.

### Layout

- Header with upload/add version.
- Resume version list.
- Detail preview panel.

### Components

- Resume version cards.
- Target role tags.
- Notes.
- Score placeholder.
- Upload/import action.

### Actions

- Add resume version.
- Edit metadata.
- Link to applications.
- Archive version.

### Empty States

- No resumes: add first version or create placeholder.

### Loading States

- Resume list skeleton.

### Error States

- File unsupported.
- Metadata save failed.

### Navigation

- Resume card -> version detail panel.
- Linked application -> Job Application Detail.

### Future Enhancements

- Resume parser.
- AI resume feedback.
- PDF preview.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Resume Tracker                                      + Add version               |
+----------------------+---------------------------------------------------------+
| Career               | Versions                                                |
|  - Resume            | +-----------------------------------------------------+ |
|  - Applications      | | Staff SWE Resume                    Target: Staff   | |
|                      | | Updated Jul 1, 2026                 Used in 3 apps  | |
|                      | +-----------------------------------------------------+ |
|                      | +-----------------------------------------------------+ |
|                      | | TPM Resume                          Target: TPM     | |
|                      | | Draft                               Used in 0 apps   | |
|                      | +-----------------------------------------------------+ |
|                      |                                                         |
|                      | Detail panel: Notes • Linked applications               |
+----------------------+---------------------------------------------------------+
```

## 22. Job Applications

### Purpose

Track applications, interviews, and next actions in a simple pipeline.

### Target User

Users running an active or exploratory job search.

### Layout

- Board view by status.
- Header filters and add action.
- Application cards.

### Components

- Kanban columns.
- Application cards.
- Company, role, priority, next date.
- Filters.
- Add application dialog.

### Actions

- Add application.
- Move application between statuses.
- Open detail.
- Add interview or note.
- Archive application.

### Empty States

- No applications: add first application or skip module.
- Empty column: subtle drop target.

### Loading States

- Board skeleton.

### Error States

- Application save failed.
- Invalid URL.

### Navigation

- Card -> Job Application Detail.
- Resume link -> Resume Tracker.

### Future Enhancements

- Browser extension.
- Email/calendar integration.
- Offer comparison.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Job Applications                       [All roles v]             + Application |
+----------------------+---------------------------------------------------------+
| Career               | Applied        Interviewing       Offer        Archived  |
|  - Resume            | +----------+   +------------+    +-------+    +-------+ |
|  - Applications      | | Acme     |   | Globex     |    |       |    |       | |
|                      | | Staff SWE|   | Senior SWE |    |       |    |       | |
|                      | | Follow up|   | Onsite Fri |    |       |    |       | |
|                      | +----------+   +------------+    +-------+    +-------+ |
+----------------------+---------------------------------------------------------+
```

## 23. Job Application Detail

### Purpose

Manage one job opportunity with notes, contacts, interviews, resume version, and next actions.

### Target User

Users tracking an active role.

### Layout

- Header with company, role, status.
- Main details and timeline.
- Right panel with next action, contacts, resume.

### Components

- Status selector.
- Role metadata.
- Timeline.
- Notes.
- Interview list.
- Contact list.
- Resume link.

### Actions

- Update status.
- Add interview.
- Add note.
- Add contact.
- Link resume.
- Create follow-up mission.

### Empty States

- No timeline: show first action prompt.
- No resume linked: prompt to link version.

### Loading States

- Detail skeleton.

### Error States

- Application not found.
- Save failed.

### Navigation

- Back -> Job Applications.
- Resume -> Resume Tracker.
- Contact future route.

### Future Enhancements

- Email thread import.
- Interview prep packet.
- Compensation tracking.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Applications / Globex Senior SWE                         Status: Interviewing  |
+----------------------+---------------------------------------------------------+
| Career               | Globex                                                  |
|                      | Senior Software Engineer • Remote                       |
|                      |                                                         |
|                      | Timeline                                                |
|                      | - Applied Jun 22                                        |
|                      | - Recruiter screen Jun 28                               |
|                      | - Onsite scheduled Jul 5                                |
|                      |                                                         |
|                      | Notes                                                   |
|                      | [ Add note ]                                            |
|                      |                                                         |
|                      | Right panel: Next action • Contacts • Resume • Links    |
+----------------------+---------------------------------------------------------+
```

## 24. Search / Command Menu

### Purpose

Provide fast keyboard-first navigation and creation.

### Target User

Power users and frequent daily users.

### Layout

- Centered modal over current screen.
- Search input.
- Grouped results and commands.

### Components

- Search field.
- Recent items.
- Commands.
- Results grouped by type.
- Keyboard hints.

### Actions

- Navigate to screen or entity.
- Create note, goal, mission, flashcard, application.
- Search content.
- Run common commands.

### Empty States

- No query: show recent and common actions.
- No results: offer create action.

### Loading States

- Searching indicator.

### Error States

- Search index failed.

### Navigation

- Opens from anywhere.
- Result selection routes to relevant screen.

### Future Enhancements

- Natural language commands.
- AI ask mode.

### Wireframe

```text
+------------------------------------------------------+
| > Search or run a command                            |
+------------------------------------------------------+
| Recent                                               |
|  System Design Foundations                           |
|  Staff Engineer readiness                            |
|                                                      |
| Create                                               |
|  + New note                                          |
|  + New mission                                       |
|  + New application                                   |
|                                                      |
| Navigate                                             |
|  Dashboard                                           |
|  Analytics                                           |
+------------------------------------------------------+
```

## 25. Settings

### Purpose

Manage profile, preferences, theme, data, and local workspace settings.

### Target User

All users.

### Layout

- Settings sidebar.
- Main settings panel.
- Sections for profile, preferences, data, appearance.

### Components

- Profile form.
- Track preferences.
- Theme selector.
- Data management actions.
- Danger zone.

### Actions

- Edit profile.
- Change career track preferences.
- Change theme.
- Open import/export.
- Reset demo data.

### Empty States

- Missing profile fields: inline prompts.

### Loading States

- Saving settings.

### Error States

- Save failed.
- Invalid imported preferences.

### Navigation

- Data actions -> Import / Export.
- Back to previous screen.

### Future Enhancements

- Account settings.
- Sync settings.
- Integrations.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Settings                                                                       |
+----------------------+---------------------------------------------------------+
| Profile              | Profile                                                 |
| Preferences          | Name          [ Shamanth                         ]      |
| Appearance           | Current role  [ Senior Software Engineer         ]      |
| Data                 | Target role   [ Staff Software Engineer          ]      |
|                      | Track         [ Software Engineering          v ]       |
|                      |                                                         |
|                      | Appearance                                             |
|                      | Theme [System] [Light] [Dark]                           |
|                      |                                                         |
|                      | Data                                                    |
|                      | [ Import / Export ] [ Reset demo data ]                 |
+----------------------+---------------------------------------------------------+
```

## 26. Import / Export

### Purpose

Give users ownership and portability of local CareerOS data.

### Target User

Users moving data between devices, backing up data, or importing demo/community packs.

### Layout

- Data management panel.
- Export section.
- Import section.
- Validation results.

### Components

- Export JSON button.
- Import file dropzone.
- Data summary.
- Validation results list.
- Confirmation dialog.

### Actions

- Export workspace.
- Import workspace.
- Validate file.
- Merge or replace data.
- Download backup.

### Empty States

- No data to export: explain what will appear after use.

### Loading States

- Export preparing.
- Import validating.

### Error States

- Invalid JSON.
- Unsupported schema version.
- Merge conflict.

### Navigation

- From Welcome or Settings.
- Complete import -> Dashboard.

### Future Enhancements

- Markdown export.
- Selective import.
- Cloud backup.
- Encrypted backups.

### Wireframe

```text
+--------------------------------------------------------------------------------+
| Import / Export                                                                |
+----------------------+---------------------------------------------------------+
| Settings             | Export                                                  |
|  - Data              | Your workspace includes 4 goals, 2 paths, 18 notes.     |
|                      | [ Export JSON ]                                         |
|                      |                                                         |
|                      | Import                                                  |
|                      | +-----------------------------------------------------+ |
|                      | | Drop CareerOS JSON file here                         | |
|                      | | or [ Choose file ]                                   | |
|                      | +-----------------------------------------------------+ |
|                      |                                                         |
|                      | Import mode                                             |
|                      | [ Merge ] [ Replace ]                                   |
+----------------------+---------------------------------------------------------+
```

## Cross-Screen States

### Empty Workspace

```text
+------------------------------------------------------+
| Nothing here yet                                     |
| Start with a small action that creates momentum.      |
| [ Add item ] [ Use starter template ]                 |
+------------------------------------------------------+
```

### Loading

```text
+------------------------------------------------------+
| [ skeleton title                 ]                    |
| [ skeleton row                   ]                    |
| [ skeleton row                   ]                    |
| [ skeleton row                   ]                    |
+------------------------------------------------------+
```

### Error

```text
+------------------------------------------------------+
| Something did not load                               |
| Your local data is still yours. Try again or export.  |
| [ Try again ] [ Export backup ]                       |
+------------------------------------------------------+
```

## MVP Navigation Requirements

- Sidebar must expose Dashboard, Today, Growth, Knowledge, Career, Analytics, and Settings.
- Growth must expose Goals, Learning Paths, and Skills.
- Knowledge must expose Notes and Flashcards.
- Career must expose Resume and Applications.
- Search / Command Menu must be globally accessible.
- Quick Add must be globally accessible.
- Mobile must provide bottom navigation for Home, Today, Growth, Knowledge, and More.
- Deep links should work for all entity detail screens.

## Interaction Patterns

### Quick Add

Quick Add should support:

- Mission
- Goal
- Note
- Flashcard
- Practice session placeholder
- Resume version
- Job application

### Completion

When a user completes meaningful work:

- Show subtle success feedback.
- Update XP and progress inline.
- Avoid disruptive full-screen celebrations except for major milestones.
- Offer the next relevant action.

### Editing

- Use drawers for quick edits.
- Use full pages for complex artifacts such as notes, learning units, and reviews.
- Save automatically where possible.
- Show clear save status.

### Filtering

- Use compact filter chips.
- Preserve filters within a session.
- Provide one-click reset.

## Visual System Notes

- Use neutral surfaces with restrained accent color.
- Use color as semantic emphasis, not decoration.
- Use compact stat cards, not oversized marketing panels.
- Use 8px or smaller border radius unless the design system requires otherwise.
- Use tables and lists where information density matters.
- Use cards only for repeated objects or focused panels.
- Use clear icons for actions such as add, search, complete, archive, and settings.
- Keep charts simple and readable.

## Accessibility Requirements

- All core flows must be keyboard navigable.
- Command menu must trap focus while open.
- Dialogs and drawers must have accessible labels.
- Charts must provide text summaries.
- Color cannot be the only indicator of status.
- All form errors must be inline and screen-reader accessible.
- Focus states must be visible.

## MVP Design Acceptance Criteria

- A new user can complete onboarding and reach the dashboard.
- A returning user can understand today's next action within five seconds.
- A user can complete a mission and see progress update.
- A user can create and review notes and flashcards.
- A user can follow a learning path and mark units complete.
- A user can inspect skill gaps and add evidence.
- A user can complete a weekly review.
- A user can view analytics with meaningful empty states before enough data exists.
- A user can track at least basic resume versions and job applications.
- A user can import and export local data.

