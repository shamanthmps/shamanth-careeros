import { ShieldCheck, TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DashboardWidget } from "@/features/dashboard/components/DashboardWidget";
import { ProgressRing } from "@/features/dashboard/components/ProgressRing";

interface InterviewReadinessWidgetProps {
  percentage: number;
  confidenceLevel: string;
  weakestSkill: string;
  strongestSkill: string;
}

export function InterviewReadinessWidget({
  percentage,
  confidenceLevel,
  weakestSkill,
  strongestSkill
}: InterviewReadinessWidgetProps) {
  return (
    <DashboardWidget
      title="Interview readiness"
      description="A directional snapshot, not a final verdict."
      action={<Badge variant="outline">{confidenceLevel}</Badge>}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <ProgressRing value={percentage} label="ready" size="sm" tone="warning" />
        <div className="grid flex-1 gap-3">
          <ReadinessSignal
            icon={TrendingDown}
            label="Weakest skill"
            value={weakestSkill}
            tone="text-amber-600 dark:text-amber-400"
          />
          <ReadinessSignal
            icon={TrendingUp}
            label="Strongest skill"
            value={strongestSkill}
            tone="text-emerald-600 dark:text-emerald-400"
          />
          <ReadinessSignal
            icon={ShieldCheck}
            label="Overall"
            value={`${percentage}% interview readiness`}
            tone="text-sky-600 dark:text-sky-400"
          />
        </div>
      </div>
    </DashboardWidget>
  );
}

interface ReadinessSignalProps {
  icon: typeof TrendingDown;
  label: string;
  value: string;
  tone: string;
}

function ReadinessSignal({ icon: Icon, label, value, tone }: ReadinessSignalProps) {
  return (
    <div className="flex items-start gap-3 rounded-md border bg-muted/30 p-3">
      <Icon className={`mt-0.5 h-4 w-4 ${tone}`} aria-hidden="true" />
      <div>
        <div className="text-xs font-medium uppercase text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}
