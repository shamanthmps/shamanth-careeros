import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ErrorState } from "@/components/feedback/ErrorState";
import { PageHeader } from "@/components/layout/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { useContentStore } from "@/stores/content-store";

export function ModuleDetailPage() {
  const { moduleId } = useParams();
  const modules = useContentStore((state) => state.modules);
  const isLoaded = useContentStore((state) => state.isLoaded);
  const lessonState = useContentStore((state) => state.lessonState);
  const loadContent = useContentStore((state) => state.loadContent);

  useEffect(() => {
    if (!isLoaded) {
      loadContent();
    }
  }, [isLoaded, loadContent]);

  if (!isLoaded) {
    return <ModuleLoadingState />;
  }

  const module = modules.find((candidate) => candidate.slug === moduleId);

  if (!module) {
    return (
      <ErrorState
        title="Module not found"
        description="This module does not exist in the local CareerOS workspace."
      />
    );
  }

  const lessons = module.lessons;
  const completedLessonCount = lessons.filter(
    (lesson) => lessonState[lesson.slug]?.completed
  ).length;
  const completionPercentage =
    lessons.length === 0 ? 0 : Math.round((completedLessonCount / lessons.length) * 100);
  const status =
    completionPercentage === 100
      ? "completed"
      : completionPercentage > 0
        ? "active"
        : "not-started";

  return (
    <div className="space-y-6 pb-20 lg:pb-0">
      <Button asChild variant="ghost" size="sm">
        <Link to="/app/growth">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Roadmap
        </Link>
      </Button>

      <PageHeader
        eyebrow="Module"
        title={module.title}
        description="Lessons discovered from Markdown files in this module folder."
        actions={
          <Badge variant={status === "active" ? "default" : "outline"}>
            {formatStatus(status)}
          </Badge>
        }
      />

      <section className="grid gap-4 sm:grid-cols-3">
        <ModuleStat label="Completion" value={`${completionPercentage}%`} />
        <ModuleStat label="Lessons" value={`${completedLessonCount}/${lessons.length}`} />
        <ModuleStat
          label="Estimated"
          value={`${Math.round((module.estimatedMinutes / 60) * 10) / 10}h`}
        />
      </section>

      <section className="grid gap-3">
        {lessons.map((lesson) => (
          <Link key={lesson.slug} to={`/app/growth/modules/${module.slug}/lessons/${lesson.slug}`}>
            <Card className="shadow-none transition-colors hover:bg-accent/45">
              <CardHeader className="gap-4 space-y-0 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <BookOpen className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    {lesson.frontmatter.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {lesson.frontmatter.tags.join(", ")}
                  </CardDescription>
                </div>
                <Badge variant={lessonState[lesson.slug]?.completed ? "default" : "outline"}>
                  {lessonState[lesson.slug]?.completed
                    ? "Completed"
                    : formatStatus(lesson.frontmatter.status)}
                </Badge>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4" aria-hidden="true" />
                  {lesson.frontmatter.estimatedTime} min
                </div>
                <div className="flex items-center gap-2 font-medium text-foreground">
                  Open lesson
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}

interface ModuleStatProps {
  label: string;
  value: string;
}

function ModuleStat({ label, value }: ModuleStatProps) {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-2xl">{value}</CardTitle>
      </CardHeader>
    </Card>
  );
}

function ModuleLoadingState() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-24" />
      <div className="border-b pb-6">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="mt-3 h-8 w-72" />
        <Skeleton className="mt-3 h-4 w-full max-w-2xl" />
      </div>
      <Skeleton className="h-32 rounded-lg" />
      <Skeleton className="h-32 rounded-lg" />
    </div>
  );
}

function formatStatus(status: string) {
  return status
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
