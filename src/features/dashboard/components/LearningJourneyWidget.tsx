import { ArrowRight, Map } from "lucide-react";
import { DashboardWidget } from "@/features/dashboard/components/DashboardWidget";

interface LearningJourneyWidgetProps {
  currentModule: string;
  currentLesson: string;
  nextMilestone: string;
}

export function LearningJourneyWidget({
  currentModule,
  currentLesson,
  nextMilestone
}: LearningJourneyWidgetProps) {
  return (
    <DashboardWidget title="Current learning journey" description="Where today's work fits.">
      <div className="space-y-4">
        <JourneyStep label="Current module" value={currentModule} active />
        <JourneyStep label="Current lesson" value={currentLesson} active />
        <JourneyStep label="Next milestone" value={nextMilestone} />
      </div>
    </DashboardWidget>
  );
}

interface JourneyStepProps {
  label: string;
  value: string;
  active?: boolean;
}

function JourneyStep({ label, value, active = false }: JourneyStepProps) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="grid h-8 w-8 place-items-center rounded-full border bg-card">
          {active ? (
            <Map className="h-4 w-4 text-primary" aria-hidden="true" />
          ) : (
            <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          )}
        </div>
      </div>
      <div className="min-w-0 rounded-md border bg-muted/30 p-3">
        <div className="text-xs font-medium uppercase text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}
