import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/70 sm:px-6 lg:px-8">
      <div className="flex min-w-0 flex-1 items-center">
        <button
          type="button"
          className="flex h-9 w-full max-w-xl items-center gap-2 rounded-md border bg-muted/40 px-3 text-left text-sm text-muted-foreground transition-colors hover:bg-muted"
          aria-label="Search CareerOS"
        >
          <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="truncate">Search CareerOS</span>
          <kbd className="ml-auto hidden rounded border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-flex">
            Ctrl K
          </kbd>
        </button>
      </div>
      <Button type="button" variant="outline" size="sm" disabled>
        <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
        Add
      </Button>
      <ThemeToggle />
      <div className="hidden h-8 w-8 items-center justify-center rounded-full border bg-card text-xs font-semibold sm:flex">
        CO
      </div>
    </header>
  );
}
