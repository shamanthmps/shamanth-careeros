import { BookOpenCheck, GraduationCap } from "lucide-react";
import { DashboardWidget } from "@/features/dashboard/components/DashboardWidget";
import { ProgressRing } from "@/features/dashboard/components/ProgressRing";

interface OverallProgressWidgetProps {
  percentage: number;
  modulesCompleted: number;
  totalModules: number;
  lessonsCompleted: number;
  totalLessons: number;
}

export function OverallProgressWidget({
  percentage,
  modulesCompleted,
  totalModules,
  lessonsCompleted,
  totalLessons
}: OverallProgressWidgetProps) {
  return (
    <DashboardWidget title="Overall progress" description="CareerOS learning plan completion.">
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <ProgressRing value={percentage} label="complete" size="md" tone="success" />
        <div className="grid w-full gap-3">
          <MetricRow
            icon={GraduationCap}
            label="Modules completed"
            value={`${modulesCompleted}/${totalModules}`}
          />
          <MetricRow
            icon={BookOpenCheck}
            label="Lessons completed"
            value={`${lessonsCompleted}/${totalLessons}`}
          />
        </div>
      </div>
    </DashboardWidget>
  );
}

interface MetricRowProps {
  icon: typeof GraduationCap;
  label: string;
  value: string;
}

function MetricRow({ icon: Icon, label, value }: MetricRowProps) {
  return (
    <div className="flex items-center justify-between rounded-md border bg-muted/30 p-3">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Icon className="h-4 w-4" aria-hidden="true" />
        <span>{label}</span>
      </div>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  );
}
