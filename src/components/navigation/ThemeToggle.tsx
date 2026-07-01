import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUiStore } from "@/stores/ui-store";
import type { ThemePreference } from "@/types/domain";

const themeOptions: Array<{ value: ThemePreference; label: string; icon: typeof Sun }> = [
  { value: "light", label: "Use light theme", icon: Sun },
  { value: "dark", label: "Use dark theme", icon: Moon },
  { value: "system", label: "Use system theme", icon: Monitor }
];

export function ThemeToggle() {
  const theme = useUiStore((state) => state.theme);
  const setTheme = useUiStore((state) => state.setTheme);
  const activeIndex = themeOptions.findIndex((option) => option.value === theme);
  const nextTheme = themeOptions[(activeIndex + 1) % themeOptions.length];
  const ActiveIcon = themeOptions[activeIndex]?.icon ?? Monitor;

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={nextTheme.label}
      title={nextTheme.label}
      onClick={() => setTheme(nextTheme.value)}
    >
      <ActiveIcon className="h-4 w-4" aria-hidden="true" />
    </Button>
  );
}
