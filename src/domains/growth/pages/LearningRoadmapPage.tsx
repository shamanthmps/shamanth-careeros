import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { useContentStore } from "@/stores/content-store";
import type { ContentModule } from "@/types/content";

export function LearningRoadmapPage() {
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
    return <RoadmapLoadingState />;
  }

  return (
    <div className="space-y-6 pb-20 lg:pb-0">
      <PageHeader
        eyebrow="Growth"
        title="Learning Roadmap"
        description="Markdown-powered curriculum discovered from the repository content folder."
      />

      <section className="grid gap-4">
        {modules.map((module) => (
          <ModuleRoadmapCard
            key={module.slug}
            module={module}
            completedLessonCount={
              module.lessons.filter((lesson) => lessonState[lesson.slug]?.completed).length
            }
          />
        ))}
      </section>
    </div>
  );
}

interface ModuleRoadmapCardProps {
  module: ContentModule;
  completedLessonCount: number;
}

function ModuleRoadmapCard({ module, completedLessonCount }: ModuleRoadmapCardProps) {
  const lessonCount = module.lessons.length;
  const completionPercentage =
    lessonCount === 0 ? 0 : Math.round((completedLessonCount / lessonCount) * 100);
  const estimatedHours = Math.round((module.estimatedMinutes / 60) * 10) / 10;
  const status =
    completionPercentage === 100
      ? "completed"
      : completionPercentage > 0
        ? "active"
        : "not-started";

  return (
    <Link to={`/app/growth/modules/${module.slug}`} className="block">
      <Card className="shadow-none transition-colors hover:bg-accent/45">
        <CardHeader className="gap-4 space-y-0 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <CardTitle className="text-base">{module.title}</CardTitle>
            <CardDescription className="mt-2 max-w-3xl">
              {module.publishedLessonCount} published lesson
              {module.publishedLessonCount === 1 ? "" : "s"} discovered from Markdown.
            </CardDescription>
          </div>
          <Badge variant={status === "active" ? "default" : "outline"}>
            {formatStatus(status)}
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-[1fr_auto_auto_auto] md:items-center">
            <div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {completedLessonCount} of {lessonCount} lessons completed
              </div>
            </div>
            <RoadmapMetric label="Completion" value={`${completionPercentage}%`} />
            <RoadmapMetric label="Estimated" value={`${estimatedHours}h`} icon={<Clock3 />} />
            <div className="flex items-center gap-2 text-sm font-medium">
              Open
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

interface RoadmapMetricProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

function RoadmapMetric({ label, value, icon }: RoadmapMetricProps) {
  return (
    <div className="rounded-md border bg-muted/25 px-3 py-2">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {icon ? <span className="[&_svg]:h-3.5 [&_svg]:w-3.5">{icon}</span> : null}
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function RoadmapLoadingState() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-6">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="mt-3 h-8 w-72" />
        <Skeleton className="mt-3 h-4 w-full max-w-2xl" />
      </div>
      {[1, 2, 3].map((item) => (
        <Skeleton key={item} className="h-40 rounded-lg" />
      ))}
    </div>
  );
}

function formatStatus(status: string) {
  return status
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
