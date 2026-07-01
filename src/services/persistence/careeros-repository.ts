import type { CareerOSWorkspace, EntityId } from "@/types/domain";

export interface CareerOSRepository {
  getWorkspace: () => Promise<CareerOSWorkspace>;
  saveWorkspace: (workspace: CareerOSWorkspace) => Promise<CareerOSWorkspace>;
  resetWorkspace: () => Promise<CareerOSWorkspace>;
  getActiveUserWorkspace: () => Promise<{
    workspace: CareerOSWorkspace;
    activeUserId: EntityId;
  }>;
}
