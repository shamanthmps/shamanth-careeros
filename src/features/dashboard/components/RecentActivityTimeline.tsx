import { DashboardWidget } from "@/features/dashboard/components/DashboardWidget";

interface ActivityItem {
  title: string;
  detail: string;
  time: string;
}

interface RecentActivityTimelineProps {
  activities: readonly ActivityItem[];
}

export function RecentActivityTimeline({ activities }: RecentActivityTimelineProps) {
  return (
    <DashboardWidget title="Recent activity" description="A short trail of useful momentum.">
      <ol className="space-y-4">
        {activities.map((activity) => (
          <li key={`${activity.title}-${activity.time}`} className="relative pl-6">
            <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-sm font-medium">{activity.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{activity.detail}</div>
              </div>
              <time className="shrink-0 text-xs text-muted-foreground">{activity.time}</time>
            </div>
          </li>
        ))}
      </ol>
    </DashboardWidget>
  );
}
