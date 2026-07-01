import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function ErrorState({ title, description, actionLabel, onAction }: ErrorStateProps) {
  return (
    <div className="rounded-lg border border-destructive/30 bg-card p-6">
      <div className="flex gap-3">
        <AlertCircle className="mt-0.5 h-5 w-5 text-destructive" aria-hidden="true" />
        <div>
          <h2 className="text-sm font-semibold">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
          {actionLabel && onAction ? (
            <Button className="mt-4" variant="outline" size="sm" onClick={onAction}>
              {actionLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
