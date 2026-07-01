import { ArrowRight, Clock3, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DashboardWidget } from "@/features/dashboard/components/DashboardWidget";

interface TodaysMissionWidgetProps {
  module: string;
  lesson: string;
  estimatedTime: string;
  priority: string;
}

export function TodaysMissionWidget({
  module,
  lesson,
  estimatedTime,
  priority
}: TodaysMissionWidgetProps) {
  return (
    <DashboardWidget
      title="Today's mission"
      description="The one learning action worth protecting today."
      action={<Badge variant="secondary">{priority}</Badge>}
      className="border-primary/20"
    >
      <div className="space-y-5">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Layers3 className="h-4 w-4" aria-hidden="true" />
            <span>{module}</span>
          </div>
          <h2 className="mt-3 text-xl font-semibold tracking-normal">{lesson}</h2>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-md border bg-muted/35 px-3 py-2 text-sm">
            <Clock3 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <span>{estimatedTime}</span>
          </div>
          <Button type="button">
            Start learning
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </DashboardWidget>
  );
}
