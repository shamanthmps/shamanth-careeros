import { parse } from "yaml";
import type {
  ContentHeading,
  ContentLesson,
  ContentModule,
  LessonFrontmatter
} from "@/types/content";

const markdownFiles = import.meta.glob<string>("../../../content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true
});

export interface ContentService {
  getModules: () => ContentModule[];
  getModule: (moduleSlug: string) => ContentModule | undefined;
  getLesson: (moduleSlug: string, lessonSlug: string) => ContentLesson | undefined;
}

export const contentService: ContentService = {
  getModules() {
    return getContentModules();
  },
  getModule(moduleSlug) {
    return getContentModules().find((module) => module.slug === moduleSlug);
  },
  getLesson(moduleSlug, lessonSlug) {
    return getContentModules()
      .find((module) => module.slug === moduleSlug)
      ?.lessons.find((lesson) => lesson.slug === lessonSlug);
  }
};

function getContentModules() {
  const lessons = Object.entries(markdownFiles)
    .map(([filePath, rawMarkdown]) => parseLessonFile(filePath, String(rawMarkdown)))
    .filter((lesson): lesson is ContentLesson => Boolean(lesson))
    .filter((lesson) => lesson.frontmatter.status === "published")
    .sort((left, right) => left.frontmatter.order - right.frontmatter.order);

  const lessonsByModule = new Map<string, ContentLesson[]>();

  for (const lesson of lessons) {
    const moduleLessons = lessonsByModule.get(lesson.moduleSlug) ?? [];
    moduleLessons.push(lesson);
    lessonsByModule.set(lesson.moduleSlug, moduleLessons);
  }

  return Array.from(lessonsByModule.entries())
    .map(([slug, moduleLessons]) => ({
      slug,
      title: moduleLessons[0]?.frontmatter.module ?? formatSlug(slug),
      lessons: moduleLessons,
      estimatedMinutes: moduleLessons.reduce(
        (total, lesson) => total + lesson.frontmatter.estimatedTime,
        0
      ),
      publishedLessonCount: moduleLessons.length
    }))
    .sort((left, right) => left.title.localeCompare(right.title));
}

function parseLessonFile(filePath: string, rawMarkdown: string): ContentLesson | undefined {
  if (isDocumentationFile(filePath)) {
    return undefined;
  }

  try {
    const frontmatterMatch = /^---\r?\n(?<yaml>[\s\S]*?)\r?\n---\r?\n?(?<markdown>[\s\S]*)$/u.exec(
      rawMarkdown
    );

    if (!frontmatterMatch?.groups) {
      throw new Error("Missing YAML front matter.");
    }

    const frontmatter = validateFrontmatter(parse(frontmatterMatch.groups.yaml), filePath);
    const markdown = frontmatterMatch.groups.markdown.trim();
    const moduleSlug = getModuleSlug(filePath);

    return {
      slug: frontmatter.id,
      moduleSlug,
      frontmatter,
      markdown,
      headings: extractHeadings(markdown)
    };
  } catch (error) {
    warnInvalidLesson(filePath, error);
    return undefined;
  }
}

function validateFrontmatter(value: unknown, filePath: string): LessonFrontmatter {
  if (!isRecord(value)) {
    throw new Error(`Invalid front matter in ${filePath}.`);
  }

  const requiredStringFields = [
    "id",
    "module",
    "title",
    "difficulty",
    "interviewFrequency",
    "status"
  ];

  for (const field of requiredStringFields) {
    if (typeof value[field] !== "string" || value[field].length === 0) {
      throw new Error(`Invalid or missing "${field}" in ${filePath}.`);
    }
  }

  if (typeof value.estimatedTime !== "number" || typeof value.order !== "number") {
    throw new Error(`Invalid time/order metadata in ${filePath}.`);
  }

  if (!Array.isArray(value.tags) || !value.tags.every((tag) => typeof tag === "string")) {
    throw new Error(`Invalid tags metadata in ${filePath}.`);
  }

  const id = value.id as string;
  const module = value.module as string;
  const title = value.title as string;
  const difficulty = value.difficulty as LessonFrontmatter["difficulty"];
  const estimatedTime = value.estimatedTime;
  const interviewFrequency = value.interviewFrequency as LessonFrontmatter["interviewFrequency"];
  const order = value.order;
  const tags = value.tags;
  const status = value.status as LessonFrontmatter["status"];

  return {
    id,
    module,
    title,
    difficulty,
    estimatedTime,
    interviewFrequency,
    order,
    tags,
    status
  };
}

function extractHeadings(markdown: string): ContentHeading[] {
  return markdown
    .split("\n")
    .map((line) => /^(?<hashes>#{2,3})\s+(?<text>.+)$/u.exec(line))
    .filter((match): match is RegExpExecArray & { groups: { hashes: string; text: string } } =>
      Boolean(match?.groups)
    )
    .map((match) => ({
      id: slugify(match.groups.text),
      text: match.groups.text,
      depth: match.groups.hashes.length
    }));
}

function getModuleSlug(filePath: string) {
  const normalizedPath = filePath.replaceAll("\\", "/");
  const segments = normalizedPath.split("/");
  return segments.at(-2) ?? "uncategorized";
}

function isDocumentationFile(filePath: string) {
  const fileName = filePath.replaceAll("\\", "/").split("/").at(-1)?.toLowerCase();
  return fileName === "index.md" || fileName === "readme.md";
}

function warnInvalidLesson(filePath: string, error: unknown) {
  if (!import.meta.env.DEV) {
    return;
  }

  const reason = error instanceof Error ? error.message : "Unknown content parsing error.";
  console.warn(`[CareerOS content] Skipping invalid lesson file: ${filePath}. ${reason}`);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/gu, "")
    .trim()
    .replace(/\s+/gu, "-");
}

function formatSlug(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
