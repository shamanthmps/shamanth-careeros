import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Clock3, Signal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MarkdownRenderer } from "@/components/content/MarkdownRenderer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ErrorState } from "@/components/feedback/ErrorState";
import { PageHeader } from "@/components/layout/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { useContentStore } from "@/stores/content-store";

export function LessonPlaceholderPage() {
  const { moduleId, lessonId } = useParams();
  const modules = useContentStore((state) => state.modules);
  const isLoaded = useContentStore((state) => state.isLoaded);
  const getLessonState = useContentStore((state) => state.getLessonState);
  const setLessonNotes = useContentStore((state) => state.setLessonNotes);
  const toggleLessonComplete = useContentStore((state) => state.toggleLessonComplete);
  const loadContent = useContentStore((state) => state.loadContent);
  const readingProgress = useReadingProgress();

  useEffect(() => {
    if (!isLoaded) {
      loadContent();
    }
  }, [isLoaded, loadContent]);

  if (!isLoaded) {
    return <LessonLoadingState />;
  }

  const module = modules.find((candidate) => candidate.slug === moduleId);
  const lesson = module?.lessons.find((candidate) => candidate.slug === lessonId);

  if (!module || !lesson) {
    return (
      <ErrorState
        title="Lesson not found"
        description="This lesson does not exist in the local CareerOS workspace."
      />
    );
  }

  const currentLessonIndex = module.lessons.findIndex(
    (candidate) => candidate.slug === lesson.slug
  );
  const previousLesson = module.lessons[currentLessonIndex - 1];
  const nextLesson = module.lessons[currentLessonIndex + 1];
  const lessonState = getLessonState(lesson.slug);

  return (
    <div className="space-y-6 pb-20 lg:pb-0">
      <Button asChild variant="ghost" size="sm">
        <Link to={`/app/growth/modules/${module.slug}`}>
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          {module.title}
        </Link>
      </Button>

      <div className="fixed left-0 right-0 top-16 z-20 h-1 bg-muted lg:left-64">
        <div className="h-full bg-primary" style={{ width: `${readingProgress}%` }} />
      </div>

      <PageHeader
        eyebrow="Lesson"
        title={lesson.frontmatter.title}
        description={module.title}
        actions={
          <Badge variant={lessonState.completed ? "default" : "outline"}>
            {lessonState.completed ? "Completed" : formatStatus(lesson.frontmatter.status)}
          </Badge>
        }
      />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-5">
          <Card className="shadow-none">
            <CardContent className="flex flex-wrap gap-2 p-5">
              <MetadataPill icon={<Clock3 />} label={`${lesson.frontmatter.estimatedTime} min`} />
              <MetadataPill label={formatStatus(lesson.frontmatter.difficulty)} />
              <MetadataPill
                icon={<Signal />}
                label={`${formatStatus(lesson.frontmatter.interviewFrequency)} frequency`}
              />
              {lesson.frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <MarkdownRenderer markdown={lesson.markdown} />

          <div className="flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              {previousLesson ? (
                <Button asChild variant="outline">
                  <Link to={`/app/growth/modules/${module.slug}/lessons/${previousLesson.slug}`}>
                    Previous
                  </Link>
                </Button>
              ) : null}
              {nextLesson ? (
                <Button asChild variant="outline">
                  <Link to={`/app/growth/modules/${module.slug}/lessons/${nextLesson.slug}`}>
                    Next lesson
                  </Link>
                </Button>
              ) : null}
            </div>
            <Button type="button" onClick={() => toggleLessonComplete(lesson.slug)}>
              <CheckCircle2 className="mr-2 h-4 w-4" aria-hidden="true" />
              {lessonState.completed ? "Completed" : "Mark complete"}
            </Button>
          </div>
        </div>

        <aside className="space-y-5">
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Table of contents</CardTitle>
              <CardDescription>Generated from lesson headings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {lesson.headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  style={{ paddingLeft: `${Math.max(0, heading.depth - 2) * 12}px` }}
                >
                  {heading.text}
                </a>
              ))}
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Personal notes</CardTitle>
              <CardDescription>Stored locally in this browser.</CardDescription>
            </CardHeader>
            <CardContent>
              <textarea
                className="min-h-48 w-full resize-y rounded-md border bg-background p-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={lessonState.notes}
                onChange={(event) => setLessonNotes(lesson.slug, event.target.value)}
                placeholder="Capture your takeaways, examples, or interview notes..."
              />
            </CardContent>
          </Card>
        </aside>
      </section>
    </div>
  );
}

interface MetadataPillProps {
  label: string;
  icon?: React.ReactNode;
}

function MetadataPill({ label, icon }: MetadataPillProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border bg-muted/25 px-3 py-1.5 text-sm">
      {icon ? <span className="text-muted-foreground [&_svg]:h-4 [&_svg]:w-4">{icon}</span> : null}
      {label}
    </div>
  );
}

function LessonLoadingState() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-44" />
      <div className="border-b pb-6">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="mt-3 h-8 w-72" />
        <Skeleton className="mt-3 h-4 w-full max-w-2xl" />
      </div>
      <Skeleton className="h-64 rounded-lg" />
    </div>
  );
}

function formatStatus(status: string) {
  return status
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        scrollableHeight <= 0 ? 0 : Math.min(100, Math.round((scrollTop / scrollableHeight) * 100))
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return useMemo(() => progress, [progress]);
}
