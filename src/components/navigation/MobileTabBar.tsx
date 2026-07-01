import { NavLink } from "react-router-dom";
import { primaryNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

const mobileItems = primaryNavigation.slice(0, 5);

export function MobileTabBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-5 border-t bg-background/95 backdrop-blur lg:hidden"
      aria-label="Mobile navigation"
    >
      {mobileItems.map((item) => {
        const Icon = item.icon;

        if (item.disabled) {
          return (
            <span
              key={item.href}
              className="flex cursor-not-allowed flex-col items-center justify-center gap-1 text-[11px] text-muted-foreground opacity-60"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{item.label}</span>
            </span>
          );
        }

        return (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center gap-1 text-[11px] text-muted-foreground",
                isActive && "font-medium text-foreground"
              )
            }
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
