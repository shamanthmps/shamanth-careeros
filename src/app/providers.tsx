import type { PropsWithChildren } from "react";
import { ThemeProvider } from "@/app/startup/ThemeProvider";

export function AppProviders({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
