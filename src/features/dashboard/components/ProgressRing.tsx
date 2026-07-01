import { cn } from "@/lib/utils";

interface ProgressRingProps {
  value: number;
  label: string;
  size?: "sm" | "md" | "lg";
  tone?: "default" | "success" | "warning";
}

const sizeClassNames = {
  sm: "h-24 w-24",
  md: "h-32 w-32",
  lg: "h-40 w-40"
} as const;

const toneClassNames = {
  default: "text-primary",
  success: "text-emerald-500",
  warning: "text-amber-500"
} as const;

export function ProgressRing({ value, label, size = "md", tone = "default" }: ProgressRingProps) {
  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <div
      className={cn(
        "relative grid shrink-0 place-items-center rounded-full",
        sizeClassNames[size],
        toneClassNames[tone]
      )}
      style={{
        background: `conic-gradient(currentColor ${clampedValue * 3.6}deg, hsl(var(--muted)) 0deg)`
      }}
      role="img"
      aria-label={`${label}: ${clampedValue}%`}
    >
      <div className="absolute inset-2 rounded-full bg-card" />
      <div className="relative text-center">
        <div className="text-2xl font-semibold tracking-normal">{clampedValue}%</div>
        <div className="mt-1 text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
