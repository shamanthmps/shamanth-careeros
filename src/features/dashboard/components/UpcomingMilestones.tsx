import { CalendarClock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DashboardWidget } from "@/features/dashboard/components/DashboardWidget";

interface MilestoneItem {
  title: string;
  due: string;
  status: string;
}

interface UpcomingMilestonesProps {
  milestones: readonly MilestoneItem[];
}

export function UpcomingMilestones({ milestones }: UpcomingMilestonesProps) {
  return (
    <DashboardWidget title="Upcoming milestones" description="The next visible checkpoints.">
      <div className="space-y-3">
        {milestones.map((milestone) => (
          <div
            key={`${milestone.title}-${milestone.due}`}
            className="flex items-center justify-between gap-4 rounded-md border bg-muted/30 p-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <CalendarClock
                className="h-4 w-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <div className="truncate text-sm font-medium">{milestone.title}</div>
                <div className="text-xs text-muted-foreground">Due {milestone.due}</div>
              </div>
            </div>
            <Badge variant={milestone.status === "Next" ? "default" : "outline"}>
              {milestone.status}
            </Badge>
          </div>
        ))}
      </div>
    </DashboardWidget>
  );
}
