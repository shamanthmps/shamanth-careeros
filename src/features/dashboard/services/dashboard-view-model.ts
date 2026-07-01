import type {
  CareerGoal,
  CareerOSWorkspace,
  DailyMission,
  EntityId,
  LearningStreak,
  Lesson,
  Milestone,
  Module,
  Note,
  Progress,
  StudySession,
  User,
  WeeklyReview
} from "@/types/domain";

export interface DashboardViewModel {
  profile: {
    name: string;
    careerGoal: string;
    currentFocus: string;
  };
  todaysMission: {
    module: string;
    lesson: string;
    estimatedTime: string;
    priority: string;
  };
  progress: {
    percentage: number;
    modulesCompleted: number;
    totalModules: number;
    lessonsCompleted: number;
    totalLessons: number;
  };
  readiness: {
    percentage: number;
    confidenceLevel: string;
    weakestSkill: string;
    strongestSkill: string;
  };
  journey: {
    currentModule: string;
    currentLesson: string;
    nextMilestone: string;
  };
  recentActivity: Array<{
    title: string;
    detail: string;
    time: string;
  }>;
  weeklySummary: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
  streak: {
    current: number;
    best: number;
    week: Array<{
      day: string;
      completed: boolean;
    }>;
  };
  milestones: Array<{
    title: string;
    due: string;
    status: string;
  }>;
}

export function createDashboardViewModel(workspace: CareerOSWorkspace): DashboardViewModel {
  const user = requireEntity(
    workspace.users.find((candidate) => candidate.id === workspace.activeUserId),
    "Active user"
  );
  const activeGoal = findActiveGoal(workspace.careerGoals, user.id);
  const activeProgress = findActiveProgress(workspace.progress, user.id);
  const activeModule = findById(workspace.modules, activeProgress.activeModuleId);
  const activeLesson = findById(workspace.lessons, activeProgress.activeLessonId);
  const activeMission = findTodayMission(workspace.dailyMissions, user.id) ?? null;
  const readiness = workspace.interviewReadiness.find((item) => item.userId === user.id);
  const latestReview = findLatestWeeklyReview(workspace.weeklyReviews, user.id);
  const streak = workspace.learningStreaks.find((item) => item.userId === user.id);
  const path = findById(workspace.learningPaths, activeProgress.learningPathId);

  return {
    profile: createProfileView(user, activeGoal),
    todaysMission: createMissionView(activeMission, activeModule, activeLesson),
    progress: {
      percentage: activeProgress.percentComplete,
      modulesCompleted: activeProgress.completedModuleIds.length,
      totalModules: path.moduleIds.length,
      lessonsCompleted: activeProgress.completedLessonIds.length,
      totalLessons: workspace.lessons.filter((lesson) => path.moduleIds.includes(lesson.moduleId))
        .length
    },
    readiness: {
      percentage: readiness?.overallPercentage ?? 0,
      confidenceLevel: formatKebabLabel(readiness?.confidenceLevel ?? "developing"),
      weakestSkill: readiness?.weakestSkill ?? "Not enough practice data yet",
      strongestSkill: readiness?.strongestSkill ?? "Not enough practice data yet"
    },
    journey: {
      currentModule: activeModule.title,
      currentLesson: activeLesson.title,
      nextMilestone:
        findNextMilestone(workspace.milestones, activeGoal.id)?.title ?? "Review progress"
    },
    recentActivity: createRecentActivity(workspace.studySessions, workspace.notes, user.id),
    weeklySummary: createWeeklySummary(latestReview),
    streak: createStreakView(streak),
    milestones: createMilestoneView(workspace.milestones, activeGoal.id)
  };
}

function createProfileView(user: User, activeGoal: CareerGoal) {
  return {
    name: user.name,
    careerGoal: activeGoal.title,
    currentFocus: activeGoal.focusArea
  };
}

function createMissionView(
  mission: DailyMission | null,
  activeModule: Module,
  activeLesson: Lesson
) {
  return {
    module: activeModule.title,
    lesson: mission?.title ?? activeLesson.title,
    estimatedTime: `${mission?.estimatedMinutes ?? activeLesson.estimatedMinutes} min`,
    priority: mission ? formatKebabLabel(mission.priority) : "Focused work"
  };
}

function createRecentActivity(
  sessions: StudySession[],
  notes: Note[],
  userId: EntityId
): DashboardViewModel["recentActivity"] {
  const sessionActivity = sessions
    .filter((session) => session.userId === userId)
    .map((session) => ({
      title: session.title,
      detail: `${session.durationMinutes} minutes of ${formatKebabLabel(session.type)}`,
      time: formatActivityDate(session.endedAt)
    }));

  const noteActivity = notes
    .filter((note) => note.userId === userId)
    .map((note) => ({
      title: `Created note: ${note.title}`,
      detail: note.tags.length > 0 ? `Tagged ${note.tags.join(", ")}` : "Captured career knowledge",
      time: formatActivityDate(note.createdAt)
    }));

  return [...sessionActivity, ...noteActivity].slice(0, 4);
}

function createWeeklySummary(
  review: WeeklyReview | undefined
): DashboardViewModel["weeklySummary"] {
  if (!review) {
    return [
      { label: "Study time", value: "0m", detail: "No weekly review yet" },
      { label: "Lessons completed", value: "0", detail: "No weekly review yet" },
      { label: "Notes created", value: "0", detail: "No weekly review yet" }
    ];
  }

  return [
    {
      label: "Study time",
      value: formatMinutes(review.studyMinutes),
      detail: `Focus: ${review.nextWeekFocus}`
    },
    {
      label: "Lessons completed",
      value: String(review.lessonsCompleted),
      detail: `${review.wins.length} wins recorded`
    },
    {
      label: "Notes created",
      value: String(review.notesCreated),
      detail: `${review.lessonsLearned.length} lessons captured`
    }
  ];
}

function createStreakView(streak: LearningStreak | undefined): DashboardViewModel["streak"] {
  const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
  const completedDateSet = new Set(streak?.completedDates ?? []);
  const weekDates = [
    "2026-06-29",
    "2026-06-30",
    "2026-07-01",
    "2026-07-02",
    "2026-07-03",
    "2026-07-04",
    "2026-07-05"
  ];

  return {
    current: streak?.currentCount ?? 0,
    best: streak?.bestCount ?? 0,
    week: weekDays.map((day, index) => ({
      day,
      completed: completedDateSet.has(weekDates[index] ?? "")
    }))
  };
}

function createMilestoneView(
  milestones: Milestone[],
  goalId: EntityId
): DashboardViewModel["milestones"] {
  return milestones
    .filter((milestone) => milestone.goalId === goalId && milestone.status !== "completed")
    .sort((left, right) => left.dueDate.localeCompare(right.dueDate))
    .slice(0, 3)
    .map((milestone) => ({
      title: milestone.title,
      due: formatShortDate(milestone.dueDate),
      status: formatKebabLabel(milestone.status)
    }));
}

function findActiveGoal(goals: CareerGoal[], userId: EntityId) {
  return requireEntity(
    goals.find((goal) => goal.userId === userId && goal.status === "active") ??
      goals.find((goal) => goal.userId === userId),
    "Career goal"
  );
}

function findActiveProgress(progressItems: Progress[], userId: EntityId) {
  return requireEntity(
    progressItems.find((progress) => progress.userId === userId),
    "Learning progress"
  );
}

function findTodayMission(missions: DailyMission[], userId: EntityId) {
  return missions.find(
    (mission) =>
      mission.userId === userId &&
      mission.scheduledFor === "2026-07-01" &&
      (mission.status === "active" || mission.status === "scheduled")
  );
}

function findNextMilestone(milestones: Milestone[], goalId: EntityId) {
  return milestones
    .filter((milestone) => milestone.goalId === goalId && milestone.status !== "completed")
    .sort((left, right) => left.dueDate.localeCompare(right.dueDate))[0];
}

function findLatestWeeklyReview(reviews: WeeklyReview[], userId: EntityId) {
  return reviews
    .filter((review) => review.userId === userId)
    .sort((left, right) => right.weekStartDate.localeCompare(left.weekStartDate))[0];
}

function findById<TEntity extends { id: EntityId }>(entities: TEntity[], id: EntityId) {
  return requireEntity(
    entities.find((entity) => entity.id === id),
    `Entity ${id}`
  );
}

function requireEntity<TEntity>(entity: TEntity | undefined, label: string) {
  if (!entity) {
    throw new Error(`${label} is missing from the CareerOS workspace.`);
  }

  return entity;
}

function formatKebabLabel(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes}m`;
  }

  return `${hours}h ${remainingMinutes}m`;
}

function formatShortDate(value: string) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric"
  }).format(new Date(`${value}T00:00:00`));
}

function formatActivityDate(value: string) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric"
  }).format(new Date(value));
}
