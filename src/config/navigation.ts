import {
  BarChart3,
  BriefcaseBusiness,
  Home,
  Library,
  ListChecks,
  Settings,
  Sprout
} from "lucide-react";
import { appRoutes } from "@/app/routes";
import type { NavigationItem } from "@/types/routes";

export const primaryNavigation: NavigationItem[] = [
  {
    label: "Dashboard",
    href: appRoutes.dashboard,
    icon: Home
  },
  {
    label: "Today",
    href: appRoutes.today,
    icon: ListChecks,
    disabled: true
  },
  {
    label: "Growth",
    href: appRoutes.growth,
    icon: Sprout
  },
  {
    label: "Knowledge",
    href: appRoutes.knowledge,
    icon: Library,
    disabled: true
  },
  {
    label: "Career",
    href: appRoutes.career,
    icon: BriefcaseBusiness,
    disabled: true
  },
  {
    label: "Analytics",
    href: appRoutes.analytics,
    icon: BarChart3,
    disabled: true
  },
  {
    label: "Settings",
    href: appRoutes.settings,
    icon: Settings,
    disabled: true
  }
];
