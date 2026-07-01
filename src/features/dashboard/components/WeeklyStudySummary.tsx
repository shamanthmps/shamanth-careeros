import { DashboardWidget } from "@/features/dashboard/components/DashboardWidget";

interface WeeklySummaryItem {
  label: string;
  value: string;
  detail: string;
}

interface WeeklyStudySummaryProps {
  summary: readonly WeeklySummaryItem[];
}

export function WeeklyStudySummary({ summary }: WeeklyStudySummaryProps) {
  return (
    <DashboardWidget title="Weekly study summary" description="Inputs that keep the system moving.">
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        {summary.map((item) => (
          <div key={item.label} className="rounded-md border bg-muted/30 p-4">
            <div className="text-xs font-medium uppercase text-muted-foreground">{item.label}</div>
            <div className="mt-2 text-2xl font-semibold tracking-normal">{item.value}</div>
            <div className="mt-1 text-xs font-medium text-muted-foreground">{item.detail}</div>
          </div>
        ))}
      </div>
    </DashboardWidget>
  );
}
