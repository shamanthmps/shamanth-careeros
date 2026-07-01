import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatTodayLabel } from "@/lib/dates";

interface WelcomeHeaderProps {
  name: string;
  careerGoal: string;
  currentFocus: string;
}

export function WelcomeHeader({ name, careerGoal, currentFocus }: WelcomeHeaderProps) {
  return (
    <section className="rounded-lg border bg-card p-5 shadow-sm">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            <span>{formatTodayLabel()}</span>
          </div>
          <h1 className="mt-3 text-2xl font-semibold tracking-normal sm:text-3xl">
            Good afternoon, {name}
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            Today is about one clear move: make progress on the work that compounds.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:min-w-[520px]">
          <div className="rounded-md border bg-muted/35 p-3">
            <div className="text-xs font-medium uppercase text-muted-foreground">Career goal</div>
            <div className="mt-1 text-sm font-medium">{careerGoal}</div>
          </div>
          <div className="rounded-md border bg-muted/35 p-3">
            <div className="flex items-center justify-between gap-2">
              <div className="text-xs font-medium uppercase text-muted-foreground">
                Current focus
              </div>
              <Badge variant="outline">This week</Badge>
            </div>
            <div className="mt-1 text-sm font-medium">{currentFocus}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
