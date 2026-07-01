export type EntityId = string;
export type ISODateString = string;
export type ThemePreference = "light" | "dark" | "system";

export interface TimestampedEntity {
  id: EntityId;
  createdAt: ISODateString;
  updatedAt: ISODateString;
}

export type CareerTrack =
  | "software-engineering"
  | "technical-program-management"
  | "engineering-management"
  | "product-management"
  | "technology-leadership";

export type CareerLevel =
  "entry" | "mid" | "senior" | "staff" | "principal" | "manager" | "executive";

export type Priority = "low" | "medium" | "high" | "critical";
export type Difficulty = "introductory" | "intermediate" | "advanced" | "expert";
export type Visibility = "private" | "workspace" | "public";

export type GoalStatus = "planned" | "active" | "paused" | "completed" | "archived";
export type LearningStatus = "not-started" | "active" | "completed" | "archived";
export type LessonType = "reading" | "exercise" | "case-study" | "reflection" | "quiz" | "project";
export type MissionStatus = "scheduled" | "active" | "completed" | "skipped" | "expired";
export type MissionType = "learn" | "practice" | "review" | "reflect" | "build" | "apply";
export type SessionType = "learning" | "practice" | "review" | "interview" | "planning";
export type AchievementStatus = "locked" | "earned";
export type QuizQuestionType = "single-choice" | "multiple-choice" | "free-text";
export type FlashcardStatus = "active" | "suspended" | "archived";
export type NoteStatus = "draft" | "active" | "archived";
export type InterviewType =
  "behavioral" | "system-design" | "coding" | "leadership" | "product" | "tpm";
export type InterviewStatus = "scheduled" | "completed" | "cancelled";
export type ConfidenceLevel = "low" | "developing" | "growing" | "strong" | "expert";
export type MilestoneStatus = "planned" | "next" | "in-progress" | "completed" | "missed";
export type ResourceType =
  "article" | "book" | "video" | "course" | "template" | "documentation" | "podcast";

export interface User extends TimestampedEntity {
  name: string;
  email?: string;
  avatarUrl?: string;
  currentRole: string;
  targetRole: string;
  careerTrack: CareerTrack;
  currentLevel: CareerLevel;
  targetLevel: CareerLevel;
  timezone: string;
}

export interface CareerGoal extends TimestampedEntity {
  userId: EntityId;
  title: string;
  description: string;
  status: GoalStatus;
  priority: Priority;
  targetDate: ISODateString;
  focusArea: string;
  successCriteria: string[];
  linkedLearningPathIds: EntityId[];
  linkedSkillIds: EntityId[];
  milestoneIds: EntityId[];
}

export interface Topic extends TimestampedEntity {
  title: string;
  description: string;
  careerTrack: CareerTrack;
  parentTopicId?: EntityId;
  skillTags: string[];
}

export interface LearningPath extends TimestampedEntity {
  title: string;
  description: string;
  careerTrack: CareerTrack;
  difficulty: Difficulty;
  status: LearningStatus;
  estimatedHours: number;
  moduleIds: EntityId[];
  goalIds: EntityId[];
  visibility: Visibility;
}

export interface Module extends TimestampedEntity {
  learningPathId: EntityId;
  title: string;
  description: string;
  order: number;
  status: LearningStatus;
  estimatedMinutes: number;
  lessonIds: EntityId[];
  milestoneId?: EntityId;
}

export interface Lesson extends TimestampedEntity {
  moduleId: EntityId;
  topicIds: EntityId[];
  title: string;
  description: string;
  type: LessonType;
  order: number;
  status: LearningStatus;
  estimatedMinutes: number;
  resourceIds: EntityId[];
  quizId?: EntityId;
}

export interface DailyMission extends TimestampedEntity {
  userId: EntityId;
  title: string;
  description: string;
  type: MissionType;
  status: MissionStatus;
  priority: Priority;
  scheduledFor: ISODateString;
  estimatedMinutes: number;
  xp: number;
  linkedEntityType: "lesson" | "module" | "goal" | "flashcard" | "weekly-review" | "mock-interview";
  linkedEntityId: EntityId;
  completedAt?: ISODateString;
}

export interface StudySession extends TimestampedEntity {
  userId: EntityId;
  type: SessionType;
  title: string;
  startedAt: ISODateString;
  endedAt: ISODateString;
  durationMinutes: number;
  lessonIds: EntityId[];
  noteIds: EntityId[];
  missionId?: EntityId;
}

export interface Progress extends TimestampedEntity {
  userId: EntityId;
  learningPathId: EntityId;
  completedModuleIds: EntityId[];
  completedLessonIds: EntityId[];
  activeModuleId: EntityId;
  activeLessonId: EntityId;
  percentComplete: number;
  lastStudiedAt: ISODateString;
}

export interface Badge extends TimestampedEntity {
  title: string;
  description: string;
  iconName: string;
  category: "consistency" | "mastery" | "practice" | "career" | "contribution";
}

export interface Achievement extends TimestampedEntity {
  userId: EntityId;
  badgeId: EntityId;
  status: AchievementStatus;
  earnedAt?: ISODateString;
  progressValue: number;
  targetValue: number;
}

export interface QuizQuestion {
  id: EntityId;
  prompt: string;
  type: QuizQuestionType;
  options?: string[];
  correctAnswer?: string | string[];
  explanation?: string;
}

export interface Quiz extends TimestampedEntity {
  lessonId: EntityId;
  title: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface Flashcard extends TimestampedEntity {
  userId: EntityId;
  front: string;
  back: string;
  status: FlashcardStatus;
  topicIds: EntityId[];
  sourceNoteId?: EntityId;
  nextReviewAt: ISODateString;
  intervalDays: number;
  easeFactor: number;
  reviewCount: number;
}

export interface Note extends TimestampedEntity {
  userId: EntityId;
  title: string;
  body: string;
  status: NoteStatus;
  tags: string[];
  linkedEntityType?: "lesson" | "module" | "goal" | "mock-interview" | "resource";
  linkedEntityId?: EntityId;
}

export interface MockInterview extends TimestampedEntity {
  userId: EntityId;
  type: InterviewType;
  status: InterviewStatus;
  title: string;
  scheduledAt?: ISODateString;
  completedAt?: ISODateString;
  score?: number;
  confidenceLevel?: ConfidenceLevel;
  topicIds: EntityId[];
  feedbackSummary?: string;
}

export interface InterviewReadiness extends TimestampedEntity {
  userId: EntityId;
  overallPercentage: number;
  confidenceLevel: ConfidenceLevel;
  weakestSkill: string;
  strongestSkill: string;
  updatedFrom: {
    progressIds: EntityId[];
    mockInterviewIds: EntityId[];
    studySessionIds: EntityId[];
  };
}

export interface Milestone extends TimestampedEntity {
  goalId: EntityId;
  title: string;
  description: string;
  status: MilestoneStatus;
  dueDate: ISODateString;
  linkedModuleIds: EntityId[];
  linkedLessonIds: EntityId[];
}

export interface WeeklyReview extends TimestampedEntity {
  userId: EntityId;
  weekStartDate: ISODateString;
  weekEndDate: ISODateString;
  wins: string[];
  challenges: string[];
  lessonsLearned: string[];
  nextWeekFocus: string;
  studyMinutes: number;
  lessonsCompleted: number;
  notesCreated: number;
}

export interface LearningStreak extends TimestampedEntity {
  userId: EntityId;
  currentCount: number;
  bestCount: number;
  lastCompletedDate: ISODateString;
  completedDates: ISODateString[];
}

export interface Resource extends TimestampedEntity {
  title: string;
  description: string;
  type: ResourceType;
  url?: string;
  author?: string;
  topicIds: EntityId[];
  estimatedMinutes?: number;
}

export interface CareerOSWorkspace {
  schemaVersion: number;
  workspaceId: EntityId;
  users: User[];
  activeUserId: EntityId;
  careerGoals: CareerGoal[];
  learningPaths: LearningPath[];
  modules: Module[];
  lessons: Lesson[];
  topics: Topic[];
  dailyMissions: DailyMission[];
  studySessions: StudySession[];
  progress: Progress[];
  badges: Badge[];
  achievements: Achievement[];
  quizzes: Quiz[];
  flashcards: Flashcard[];
  notes: Note[];
  mockInterviews: MockInterview[];
  interviewReadiness: InterviewReadiness[];
  milestones: Milestone[];
  weeklyReviews: WeeklyReview[];
  learningStreaks: LearningStreak[];
  resources: Resource[];
  createdAt: ISODateString;
  updatedAt: ISODateString;
}

export type CareerOSEntity =
  | User
  | CareerGoal
  | Topic
  | LearningPath
  | Module
  | Lesson
  | DailyMission
  | StudySession
  | Progress
  | Badge
  | Achievement
  | Quiz
  | Flashcard
  | Note
  | MockInterview
  | InterviewReadiness
  | Milestone
  | WeeklyReview
  | LearningStreak
  | Resource;
