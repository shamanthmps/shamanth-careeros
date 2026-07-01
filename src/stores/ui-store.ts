import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ThemePreference } from "@/types/domain";

interface UiState {
  isSidebarCollapsed: boolean;
  theme: ThemePreference;
  setSidebarCollapsed: (isSidebarCollapsed: boolean) => void;
  setTheme: (theme: ThemePreference) => void;
  toggleTheme: () => void;
}

export const useUiStore = create<UiState>()(
  persist(
    (set, get) => ({
      isSidebarCollapsed: false,
      theme: "system",
      setSidebarCollapsed: (isSidebarCollapsed) => set({ isSidebarCollapsed }),
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => {
        const theme = get().theme;
        set({ theme: theme === "dark" ? "light" : "dark" });
      }
    }),
    {
      name: "careeros-ui"
    }
  )
);
