import { create } from "zustand";
import { careerOSRepository } from "@/services/persistence/repository-instance";
import {
  createDashboardViewModel,
  type DashboardViewModel
} from "@/features/dashboard/services/dashboard-view-model";
import type { CareerOSWorkspace } from "@/types/domain";

interface CareerOSState {
  workspace: CareerOSWorkspace | null;
  dashboard: DashboardViewModel | null;
  isLoading: boolean;
  error: string | null;
  hydrate: () => Promise<void>;
  resetWorkspace: () => Promise<void>;
}

export const useCareerOSStore = create<CareerOSState>((set) => ({
  workspace: null,
  dashboard: null,
  isLoading: false,
  error: null,
  hydrate: async () => {
    set({ isLoading: true, error: null });

    try {
      const workspace = await careerOSRepository.getWorkspace();
      set({
        workspace,
        dashboard: createDashboardViewModel(workspace),
        isLoading: false
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Unable to load CareerOS workspace.",
        isLoading: false
      });
    }
  },
  resetWorkspace: async () => {
    set({ isLoading: true, error: null });

    try {
      const workspace = await careerOSRepository.resetWorkspace();
      set({
        workspace,
        dashboard: createDashboardViewModel(workspace),
        isLoading: false
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Unable to reset CareerOS workspace.",
        isLoading: false
      });
    }
  }
}));
