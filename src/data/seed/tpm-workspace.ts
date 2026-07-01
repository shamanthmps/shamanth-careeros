import type { CareerOSWorkspace } from "@/types/domain";

const now = "2026-07-01T09:00:00.000Z";
const yesterday = "2026-06-30T09:00:00.000Z";

export function createSeedWorkspace(): CareerOSWorkspace {
  return {
    schemaVersion: 1,
    workspaceId: "workspace_local_tpm",
    activeUserId: "user_shamanth",
    createdAt: now,
    updatedAt: now,
    users: [
      {
        id: "user_shamanth",
        name: "Shamanth",
        currentRole: "Senior Technical Program Manager",
        targetRole: "Principal Technical Program Manager",
        careerTrack: "technical-program-management",
        currentLevel: "senior",
        targetLevel: "principal",
        timezone: "Asia/Calcutta",
        createdAt: now,
        updatedAt: now
      }
    ],
    careerGoals: [
      {
        id: "goal_principal_tpm",
        userId: "user_shamanth",
        title: "Become a Principal Technical Program Manager",
        description:
          "Build the execution, architecture fluency, influence, and operating cadence expected of a Principal TPM.",
        status: "active",
        priority: "high",
        targetDate: "2026-12-31",
        focusArea: "Executive execution systems and cross-functional technical leadership",
        successCriteria: [
          "Lead a multi-quarter technical program with measurable business outcomes",
          "Create a durable operating mechanism for risks, dependencies, and decisions",
          "Strengthen system design fluency for architecture-heavy programs",
          "Build a promotion packet with clear scope, impact, and leadership evidence"
        ],
        linkedLearningPathIds: ["path_tpm_operating_system"],
        linkedSkillIds: [
          "topic_program_strategy",
          "topic_risk_management",
          "topic_systems_thinking"
        ],
        milestoneIds: ["milestone_execution_review", "milestone_architecture_review"],
        createdAt: now,
        updatedAt: now
      }
    ],
    topics: [
      {
        id: "topic_program_strategy",
        title: "Program strategy",
        description:
          "Turning ambiguous business and technical objectives into coherent execution strategy.",
        careerTrack: "technical-program-management",
        skillTags: ["strategy", "planning", "alignment"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "topic_risk_management",
        title: "Risk management",
        description:
          "Identifying, communicating, and retiring program risks before they become surprises.",
        careerTrack: "technical-program-management",
        skillTags: ["risk", "execution", "communication"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "topic_systems_thinking",
        title: "Systems thinking",
        description:
          "Understanding technical architecture, dependencies, constraints, and tradeoffs.",
        careerTrack: "technical-program-management",
        skillTags: ["architecture", "tradeoffs", "systems"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "topic_stakeholder_influence",
        title: "Stakeholder influence",
        description:
          "Driving alignment across engineering, product, design, data, security, and leadership.",
        careerTrack: "technical-program-management",
        skillTags: ["influence", "communication", "leadership"],
        createdAt: now,
        updatedAt: now
      }
    ],
    learningPaths: [
      {
        id: "path_tpm_operating_system",
        title: "Principal TPM Operating System",
        description:
          "A structured path for senior TPMs building principal-level execution, architecture fluency, and influence.",
        careerTrack: "technical-program-management",
        difficulty: "advanced",
        status: "active",
        estimatedHours: 42,
        moduleIds: [
          "module_tpm_strategy",
          "module_tpm_architecture",
          "module_tpm_execution",
          "module_tpm_influence"
        ],
        goalIds: ["goal_principal_tpm"],
        visibility: "private",
        createdAt: now,
        updatedAt: now
      }
    ],
    modules: [
      {
        id: "module_tpm_strategy",
        learningPathId: "path_tpm_operating_system",
        title: "Strategic Program Framing",
        description:
          "Define outcomes, boundaries, assumptions, and decision forums before execution begins.",
        order: 1,
        status: "completed",
        estimatedMinutes: 420,
        lessonIds: ["lesson_outcome_framing", "lesson_program_charter", "lesson_decision_forums"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "module_tpm_architecture",
        learningPathId: "path_tpm_operating_system",
        title: "Architecture Fluency for TPMs",
        description:
          "Develop enough technical depth to reason about dependencies, tradeoffs, and sequencing.",
        order: 2,
        status: "active",
        estimatedMinutes: 540,
        lessonIds: [
          "lesson_system_boundaries",
          "lesson_dependency_mapping",
          "lesson_scalability_tradeoffs"
        ],
        milestoneId: "milestone_architecture_review",
        createdAt: now,
        updatedAt: now
      },
      {
        id: "module_tpm_execution",
        learningPathId: "path_tpm_operating_system",
        title: "Execution Rhythm and Risk Control",
        description:
          "Build operating mechanisms for planning, status, escalation, and risk retirement.",
        order: 3,
        status: "not-started",
        estimatedMinutes: 600,
        lessonIds: ["lesson_risk_register", "lesson_dependency_health", "lesson_exec_reviews"],
        milestoneId: "milestone_execution_review",
        createdAt: now,
        updatedAt: now
      },
      {
        id: "module_tpm_influence",
        learningPathId: "path_tpm_operating_system",
        title: "Executive Communication and Influence",
        description:
          "Communicate tradeoffs, decisions, and progress with the right level of precision.",
        order: 4,
        status: "not-started",
        estimatedMinutes: 480,
        lessonIds: ["lesson_exec_narratives", "lesson_conflict_alignment"],
        createdAt: now,
        updatedAt: now
      }
    ],
    lessons: [
      {
        id: "lesson_outcome_framing",
        moduleId: "module_tpm_strategy",
        topicIds: ["topic_program_strategy"],
        title: "Outcome framing for ambiguous programs",
        description: "Separate business outcomes, technical outcomes, and execution outputs.",
        type: "case-study",
        order: 1,
        status: "completed",
        estimatedMinutes: 45,
        resourceIds: ["resource_program_charter"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "lesson_program_charter",
        moduleId: "module_tpm_strategy",
        topicIds: ["topic_program_strategy", "topic_stakeholder_influence"],
        title: "Writing a program charter",
        description:
          "Create a charter that clarifies scope, owners, non-goals, and decision rights.",
        type: "project",
        order: 2,
        status: "completed",
        estimatedMinutes: 60,
        resourceIds: ["resource_program_charter"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "lesson_decision_forums",
        moduleId: "module_tpm_strategy",
        topicIds: ["topic_stakeholder_influence"],
        title: "Designing decision forums",
        description:
          "Set the cadence and participants for technical, product, and executive decisions.",
        type: "reading",
        order: 3,
        status: "completed",
        estimatedMinutes: 40,
        resourceIds: ["resource_decision_log"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "lesson_system_boundaries",
        moduleId: "module_tpm_architecture",
        topicIds: ["topic_systems_thinking"],
        title: "Mapping system boundaries",
        description: "Understand services, owners, interfaces, and operational constraints.",
        type: "exercise",
        order: 1,
        status: "completed",
        estimatedMinutes: 50,
        resourceIds: ["resource_architecture_review"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "lesson_dependency_mapping",
        moduleId: "module_tpm_architecture",
        topicIds: ["topic_systems_thinking", "topic_risk_management"],
        title: "Dependency mapping for complex launches",
        description: "Build a dependency map that exposes sequencing risk and ownership gaps.",
        type: "exercise",
        order: 2,
        status: "active",
        estimatedMinutes: 35,
        resourceIds: ["resource_dependency_map"],
        quizId: "quiz_dependency_mapping",
        createdAt: now,
        updatedAt: now
      },
      {
        id: "lesson_scalability_tradeoffs",
        moduleId: "module_tpm_architecture",
        topicIds: ["topic_systems_thinking"],
        title: "Scalability tradeoffs for TPMs",
        description: "Reason about latency, throughput, storage, resiliency, and rollout risk.",
        type: "reading",
        order: 3,
        status: "not-started",
        estimatedMinutes: 45,
        resourceIds: ["resource_scalability_tradeoffs"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "lesson_risk_register",
        moduleId: "module_tpm_execution",
        topicIds: ["topic_risk_management"],
        title: "Building a useful risk register",
        description:
          "Make risks actionable with owners, triggers, mitigation plans, and escalation paths.",
        type: "project",
        order: 1,
        status: "not-started",
        estimatedMinutes: 55,
        resourceIds: ["resource_risk_register"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "lesson_dependency_health",
        moduleId: "module_tpm_execution",
        topicIds: ["topic_risk_management"],
        title: "Dependency health reviews",
        description: "Create a weekly operating review for cross-team dependencies.",
        type: "reflection",
        order: 2,
        status: "not-started",
        estimatedMinutes: 40,
        resourceIds: ["resource_dependency_map"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "lesson_exec_reviews",
        moduleId: "module_tpm_execution",
        topicIds: ["topic_stakeholder_influence", "topic_risk_management"],
        title: "Executive program reviews",
        description: "Communicate status, risk, decisions, and tradeoffs with executive precision.",
        type: "case-study",
        order: 3,
        status: "not-started",
        estimatedMinutes: 65,
        resourceIds: ["resource_exec_review"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "lesson_exec_narratives",
        moduleId: "module_tpm_influence",
        topicIds: ["topic_stakeholder_influence"],
        title: "Writing executive narratives",
        description:
          "Turn program complexity into crisp narratives with decisions and consequences.",
        type: "project",
        order: 1,
        status: "not-started",
        estimatedMinutes: 60,
        resourceIds: ["resource_exec_review"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "lesson_conflict_alignment",
        moduleId: "module_tpm_influence",
        topicIds: ["topic_stakeholder_influence"],
        title: "Aligning through conflict",
        description: "Use structured tradeoff conversations to resolve disagreement without drift.",
        type: "reflection",
        order: 2,
        status: "not-started",
        estimatedMinutes: 45,
        resourceIds: [],
        createdAt: now,
        updatedAt: now
      }
    ],
    dailyMissions: [
      {
        id: "mission_today_dependency_mapping",
        userId: "user_shamanth",
        title: "Advance dependency mapping",
        description: "Complete the active lesson and draft a dependency map for a real launch.",
        type: "learn",
        status: "active",
        priority: "high",
        scheduledFor: "2026-07-01",
        estimatedMinutes: 35,
        xp: 40,
        linkedEntityType: "lesson",
        linkedEntityId: "lesson_dependency_mapping",
        createdAt: now,
        updatedAt: now
      },
      {
        id: "mission_review_flashcards",
        userId: "user_shamanth",
        title: "Review TPM flashcards",
        description: "Review cards on risk, decision forums, and architecture tradeoffs.",
        type: "review",
        status: "scheduled",
        priority: "medium",
        scheduledFor: "2026-07-01",
        estimatedMinutes: 12,
        xp: 15,
        linkedEntityType: "flashcard",
        linkedEntityId: "flashcard_risk_trigger",
        createdAt: now,
        updatedAt: now
      }
    ],
    studySessions: [
      {
        id: "session_system_boundaries",
        userId: "user_shamanth",
        type: "learning",
        title: "System boundary mapping",
        startedAt: "2026-06-30T15:00:00.000Z",
        endedAt: "2026-06-30T15:50:00.000Z",
        durationMinutes: 50,
        lessonIds: ["lesson_system_boundaries"],
        noteIds: ["note_system_boundaries"],
        createdAt: yesterday,
        updatedAt: yesterday
      }
    ],
    progress: [
      {
        id: "progress_tpm_path",
        userId: "user_shamanth",
        learningPathId: "path_tpm_operating_system",
        completedModuleIds: ["module_tpm_strategy"],
        completedLessonIds: [
          "lesson_outcome_framing",
          "lesson_program_charter",
          "lesson_decision_forums",
          "lesson_system_boundaries"
        ],
        activeModuleId: "module_tpm_architecture",
        activeLessonId: "lesson_dependency_mapping",
        percentComplete: 36,
        lastStudiedAt: "2026-06-30T15:50:00.000Z",
        createdAt: now,
        updatedAt: now
      }
    ],
    badges: [
      {
        id: "badge_operating_cadence",
        title: "Operating Cadence",
        description: "Complete a week of consistent CareerOS activity.",
        iconName: "calendar-check",
        category: "consistency",
        createdAt: now,
        updatedAt: now
      },
      {
        id: "badge_architecture_fluency",
        title: "Architecture Fluency",
        description: "Complete the architecture fluency module.",
        iconName: "network",
        category: "mastery",
        createdAt: now,
        updatedAt: now
      }
    ],
    achievements: [
      {
        id: "achievement_operating_cadence",
        userId: "user_shamanth",
        badgeId: "badge_operating_cadence",
        status: "earned",
        earnedAt: "2026-06-29T18:00:00.000Z",
        progressValue: 7,
        targetValue: 7,
        createdAt: now,
        updatedAt: now
      },
      {
        id: "achievement_architecture_fluency",
        userId: "user_shamanth",
        badgeId: "badge_architecture_fluency",
        status: "locked",
        progressValue: 1,
        targetValue: 3,
        createdAt: now,
        updatedAt: now
      }
    ],
    quizzes: [
      {
        id: "quiz_dependency_mapping",
        lessonId: "lesson_dependency_mapping",
        title: "Dependency Mapping Check",
        passingScore: 80,
        questions: [
          {
            id: "question_dependency_owner",
            prompt: "What is the most important missing field in an executive dependency map?",
            type: "single-choice",
            options: ["Owner", "Logo", "Color", "Meeting length"],
            correctAnswer: "Owner",
            explanation: "Dependencies without clear owners are difficult to drive or escalate."
          }
        ],
        createdAt: now,
        updatedAt: now
      }
    ],
    flashcards: [
      {
        id: "flashcard_risk_trigger",
        userId: "user_shamanth",
        front: "What makes a TPM risk actionable?",
        back: "A named owner, trigger, impact, mitigation, decision path, and review cadence.",
        status: "active",
        topicIds: ["topic_risk_management"],
        sourceNoteId: "note_risk_operating_model",
        nextReviewAt: "2026-07-01T10:00:00.000Z",
        intervalDays: 3,
        easeFactor: 2.4,
        reviewCount: 5,
        createdAt: now,
        updatedAt: now
      }
    ],
    notes: [
      {
        id: "note_system_boundaries",
        userId: "user_shamanth",
        title: "System boundaries for platform migration",
        body: "Map service owners, interfaces, operational constraints, and launch blockers before sequencing work.",
        status: "active",
        tags: ["architecture", "dependency-map"],
        linkedEntityType: "lesson",
        linkedEntityId: "lesson_system_boundaries",
        createdAt: "2026-06-30T15:45:00.000Z",
        updatedAt: "2026-06-30T15:45:00.000Z"
      },
      {
        id: "note_risk_operating_model",
        userId: "user_shamanth",
        title: "Risk operating model",
        body: "Risks need triggers and decisions, not just status labels.",
        status: "active",
        tags: ["risk", "execution"],
        linkedEntityType: "goal",
        linkedEntityId: "goal_principal_tpm",
        createdAt: "2026-06-29T15:45:00.000Z",
        updatedAt: "2026-06-29T15:45:00.000Z"
      }
    ],
    mockInterviews: [
      {
        id: "mock_tpm_architecture_review",
        userId: "user_shamanth",
        type: "tpm",
        status: "completed",
        title: "Architecture-heavy program review",
        completedAt: "2026-06-28T13:00:00.000Z",
        score: 74,
        confidenceLevel: "growing",
        topicIds: ["topic_systems_thinking", "topic_stakeholder_influence"],
        feedbackSummary:
          "Strong framing and stakeholder handling; improve depth on scalability tradeoffs.",
        createdAt: now,
        updatedAt: now
      }
    ],
    interviewReadiness: [
      {
        id: "readiness_tpm",
        userId: "user_shamanth",
        overallPercentage: 68,
        confidenceLevel: "growing",
        weakestSkill: "Scalability tradeoff depth",
        strongestSkill: "Program strategy and executive alignment",
        updatedFrom: {
          progressIds: ["progress_tpm_path"],
          mockInterviewIds: ["mock_tpm_architecture_review"],
          studySessionIds: ["session_system_boundaries"]
        },
        createdAt: now,
        updatedAt: now
      }
    ],
    milestones: [
      {
        id: "milestone_architecture_review",
        goalId: "goal_principal_tpm",
        title: "Architecture review readiness",
        description:
          "Be able to facilitate an architecture-heavy program review with crisp tradeoffs.",
        status: "next",
        dueDate: "2026-07-05",
        linkedModuleIds: ["module_tpm_architecture"],
        linkedLessonIds: ["lesson_dependency_mapping", "lesson_scalability_tradeoffs"],
        createdAt: now,
        updatedAt: now
      },
      {
        id: "milestone_execution_review",
        goalId: "goal_principal_tpm",
        title: "Executive execution review",
        description:
          "Create an executive-ready program review for risks, dependencies, and decisions.",
        status: "planned",
        dueDate: "2026-07-12",
        linkedModuleIds: ["module_tpm_execution"],
        linkedLessonIds: ["lesson_risk_register", "lesson_exec_reviews"],
        createdAt: now,
        updatedAt: now
      }
    ],
    weeklyReviews: [
      {
        id: "review_2026_06_29",
        userId: "user_shamanth",
        weekStartDate: "2026-06-29",
        weekEndDate: "2026-07-05",
        wins: ["Finished strategic framing module", "Created first architecture dependency notes"],
        challenges: ["Need deeper examples for scalability tradeoffs"],
        lessonsLearned: ["Decision forums need explicit owners and escalation rules"],
        nextWeekFocus: "Architecture fluency and dependency health",
        studyMinutes: 410,
        lessonsCompleted: 4,
        notesCreated: 6,
        createdAt: now,
        updatedAt: now
      }
    ],
    learningStreaks: [
      {
        id: "streak_primary",
        userId: "user_shamanth",
        currentCount: 9,
        bestCount: 21,
        lastCompletedDate: "2026-07-01",
        completedDates: [
          "2026-06-23",
          "2026-06-24",
          "2026-06-25",
          "2026-06-26",
          "2026-06-27",
          "2026-06-28",
          "2026-06-29",
          "2026-06-30",
          "2026-07-01"
        ],
        createdAt: now,
        updatedAt: now
      }
    ],
    resources: [
      {
        id: "resource_program_charter",
        title: "Program charter template",
        description: "A structured template for outcomes, scope, owners, decisions, and non-goals.",
        type: "template",
        topicIds: ["topic_program_strategy"],
        estimatedMinutes: 15,
        createdAt: now,
        updatedAt: now
      },
      {
        id: "resource_decision_log",
        title: "Decision log operating guide",
        description:
          "A practical pattern for tracking decisions, owners, options, and consequences.",
        type: "documentation",
        topicIds: ["topic_stakeholder_influence"],
        estimatedMinutes: 20,
        createdAt: now,
        updatedAt: now
      },
      {
        id: "resource_architecture_review",
        title: "Architecture review checklist",
        description: "Questions TPMs should ask when facilitating architecture-heavy reviews.",
        type: "template",
        topicIds: ["topic_systems_thinking"],
        estimatedMinutes: 25,
        createdAt: now,
        updatedAt: now
      },
      {
        id: "resource_dependency_map",
        title: "Dependency map worksheet",
        description:
          "A worksheet for owners, dates, risks, escalation paths, and integration points.",
        type: "template",
        topicIds: ["topic_risk_management", "topic_systems_thinking"],
        estimatedMinutes: 20,
        createdAt: now,
        updatedAt: now
      },
      {
        id: "resource_scalability_tradeoffs",
        title: "Scalability tradeoffs primer",
        description:
          "A TPM-oriented guide to latency, throughput, storage, resiliency, and rollout tradeoffs.",
        type: "article",
        topicIds: ["topic_systems_thinking"],
        estimatedMinutes: 30,
        createdAt: now,
        updatedAt: now
      },
      {
        id: "resource_risk_register",
        title: "Risk register template",
        description:
          "A practical register for tracking probability, impact, trigger, owner, and mitigation.",
        type: "template",
        topicIds: ["topic_risk_management"],
        estimatedMinutes: 15,
        createdAt: now,
        updatedAt: now
      },
      {
        id: "resource_exec_review",
        title: "Executive review narrative template",
        description:
          "A structured narrative for program status, risks, decisions, and next actions.",
        type: "template",
        topicIds: ["topic_stakeholder_influence", "topic_risk_management"],
        estimatedMinutes: 25,
        createdAt: now,
        updatedAt: now
      }
    ]
  };
}
