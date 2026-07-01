import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { primaryNavigation } from "@/config/navigation";
import { appConfig } from "@/config/constants";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/stores/ui-store";

export function Sidebar() {
  const isCollapsed = useUiStore((state) => state.isSidebarCollapsed);
  const setCollapsed = useUiStore((state) => state.setSidebarCollapsed);

  return (
    <aside
      className={cn(
        "sticky top-0 hidden h-screen shrink-0 border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-200 lg:flex lg:flex-col",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-between px-3">
        <div className={cn("flex min-w-0 items-center gap-2", isCollapsed && "justify-center")}>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
            C
          </div>
          {!isCollapsed ? (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{appConfig.name}</p>
              <p className="truncate text-xs text-muted-foreground">Career operating system</p>
            </div>
          ) : null}
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={cn("h-8 w-8", isCollapsed && "hidden")}
          aria-label="Collapse sidebar"
          onClick={() => setCollapsed(true)}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
      <Separator />
      <nav className="flex flex-1 flex-col gap-1 px-2 py-4" aria-label="Primary navigation">
        {primaryNavigation.map((item) => {
          const Icon = item.icon;
          return item.disabled ? (
            <span
              key={item.href}
              className={cn(
                "flex h-9 cursor-not-allowed items-center gap-3 rounded-md px-3 text-sm text-muted-foreground opacity-65",
                isCollapsed && "justify-center px-0"
              )}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {!isCollapsed ? <span className="truncate">{item.label}</span> : null}
            </span>
          ) : (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex h-9 items-center gap-3 rounded-md px-3 text-sm transition-colors hover:bg-sidebar-active hover:text-sidebar-active-foreground",
                  isActive && "bg-sidebar-active font-medium text-sidebar-active-foreground",
                  isCollapsed && "justify-center px-0"
                )
              }
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {!isCollapsed ? <span className="truncate">{item.label}</span> : null}
            </NavLink>
          );
        })}
      </nav>
      {isCollapsed ? (
        <div className="border-t border-sidebar-border p-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-9 w-full"
            aria-label="Expand sidebar"
            onClick={() => setCollapsed(false)}
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      ) : null}
    </aside>
  );
}
