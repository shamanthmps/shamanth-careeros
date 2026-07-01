export type ContentDifficulty = "introductory" | "intermediate" | "advanced" | "expert";
export type ContentStatus = "draft" | "published" | "archived";
export type InterviewFrequency = "low" | "medium" | "high";

export interface LessonFrontmatter {
  id: string;
  module: string;
  title: string;
  difficulty: ContentDifficulty;
  estimatedTime: number;
  interviewFrequency: InterviewFrequency;
  order: number;
  tags: string[];
  status: ContentStatus;
}

export interface ContentHeading {
  id: string;
  text: string;
  depth: number;
}

export interface ContentLesson {
  slug: string;
  moduleSlug: string;
  frontmatter: LessonFrontmatter;
  markdown: string;
  headings: ContentHeading[];
}

export interface ContentModule {
  slug: string;
  title: string;
  lessons: ContentLesson[];
  estimatedMinutes: number;
  publishedLessonCount: number;
}
