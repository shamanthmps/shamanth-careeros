import { LocalCareerOSRepository } from "@/services/persistence/local-careeros-repository";
import { LocalStorageJsonPersistence } from "@/services/persistence/json-persistence";
import type { CareerOSWorkspace } from "@/types/domain";

const workspaceStorageKey = "careeros-workspace";

export const careerOSRepository = new LocalCareerOSRepository(
  new LocalStorageJsonPersistence<CareerOSWorkspace>(workspaceStorageKey)
);
