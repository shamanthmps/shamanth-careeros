import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ErrorState } from "@/components/feedback/ErrorState";
import { Skeleton } from "@/components/ui/skeleton";
import { InterviewReadinessWidget } from "@/features/dashboard/components/InterviewReadinessWidget";
import { LearningJourneyWidget } from "@/features/dashboard/components/LearningJourneyWidget";
import { LearningStreakWidget } from "@/features/dashboard/components/LearningStreakWidget";
import { OverallProgressWidget } from "@/features/dashboard/components/OverallProgressWidget";
import { RecentActivityTimeline } from "@/features/dashboard/components/RecentActivityTimeline";
import { TodaysMissionWidget } from "@/features/dashboard/components/TodaysMissionWidget";
import { UpcomingMilestones } from "@/features/dashboard/components/UpcomingMilestones";
import { WeeklyStudySummary } from "@/features/dashboard/components/WeeklyStudySummary";
import { WelcomeHeader } from "@/features/dashboard/components/WelcomeHeader";
import { useCareerOSStore } from "@/stores/careeros-store";

export function DashboardPage() {
  const dashboard = useCareerOSStore((state) => state.dashboard);
  const error = useCareerOSStore((state) => state.error);
  const hydrate = useCareerOSStore((state) => state.hydrate);
  const resetWorkspace = useCareerOSStore((state) => state.resetWorkspace);

  useEffect(() => {
    void hydrate();
  }, [hydrate]);

  if (error) {
    return (
      <ErrorState
        title="CareerOS workspace could not load"
        description={error}
        actionLabel="Reset local workspace"
        onAction={() => {
          void resetWorkspace();
        }}
      />
    );
  }

  if (!dashboard) {
    return <DashboardLoadingState />;
  }

  return (
    <div className="space-y-5 pb-20 lg:pb-0">
      <WelcomeHeader
        name={dashboard.profile.name}
        careerGoal={dashboard.profile.careerGoal}
        currentFocus={dashboard.profile.currentFocus}
      />

      <section className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
        <TodaysMissionWidget
          module={dashboard.todaysMission.module}
          lesson={dashboard.todaysMission.lesson}
          estimatedTime={dashboard.todaysMission.estimatedTime}
          priority={dashboard.todaysMission.priority}
        />
        <LearningStreakWidget
          current={dashboard.streak.current}
          best={dashboard.streak.best}
          week={dashboard.streak.week}
        />
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        <OverallProgressWidget
          percentage={dashboard.progress.percentage}
          modulesCompleted={dashboard.progress.modulesCompleted}
          totalModules={dashboard.progress.totalModules}
          lessonsCompleted={dashboard.progress.lessonsCompleted}
          totalLessons={dashboard.progress.totalLessons}
        />
        <InterviewReadinessWidget
          percentage={dashboard.readiness.percentage}
          confidenceLevel={dashboard.readiness.confidenceLevel}
          weakestSkill={dashboard.readiness.weakestSkill}
          strongestSkill={dashboard.readiness.strongestSkill}
        />
        <LearningJourneyWidget
          currentModule={dashboard.journey.currentModule}
          currentLesson={dashboard.journey.currentLesson}
          nextMilestone={dashboard.journey.nextMilestone}
        />
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <RecentActivityTimeline activities={dashboard.recentActivity} />
        <div className="grid gap-5">
          <WeeklyStudySummary summary={dashboard.weeklySummary} />
          <UpcomingMilestones milestones={dashboard.milestones} />
        </div>
      </section>
    </div>
  );
}

function DashboardLoadingState() {
  return (
    <div className="space-y-5 pb-20 lg:pb-0" aria-label="Loading dashboard">
      <div className="rounded-lg border bg-card p-5">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <Skeleton className="h-4 w-52" />
        </div>
        <Skeleton className="mt-5 h-9 w-72" />
        <Skeleton className="mt-3 h-4 w-full max-w-2xl" />
      </div>
      <div className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
        <Skeleton className="h-56 rounded-lg" />
        <Skeleton className="h-56 rounded-lg" />
      </div>
      <div className="grid gap-5 xl:grid-cols-3">
        <Skeleton className="h-72 rounded-lg" />
        <Skeleton className="h-72 rounded-lg" />
        <Skeleton className="h-72 rounded-lg" />
      </div>
      <Button className="sr-only" type="button" disabled>
        Loading
      </Button>
    </div>
  );
}
