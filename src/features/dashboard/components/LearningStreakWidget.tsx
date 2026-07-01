import { Flame } from "lucide-react";
import { DashboardWidget } from "@/features/dashboard/components/DashboardWidget";
import { cn } from "@/lib/utils";

interface StreakDay {
  day: string;
  completed: boolean;
}

interface LearningStreakWidgetProps {
  current: number;
  best: number;
  week: readonly StreakDay[];
}

export function LearningStreakWidget({ current, best, week }: LearningStreakWidgetProps) {
  return (
    <DashboardWidget title="Learning streak" description="Consistency without noise.">
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400">
          <Flame className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
          <div className="text-3xl font-semibold tracking-normal">{current} days</div>
          <div className="text-sm text-muted-foreground">Best streak: {best} days</div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-7 gap-2">
        {week.map((item) => (
          <div key={item.day} className="text-center">
            <div
              className={cn(
                "grid h-8 place-items-center rounded-md border text-xs font-medium",
                item.completed
                  ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                  : "bg-muted/30 text-muted-foreground"
              )}
            >
              {item.day}
            </div>
          </div>
        ))}
      </div>
    </DashboardWidget>
  );
}
