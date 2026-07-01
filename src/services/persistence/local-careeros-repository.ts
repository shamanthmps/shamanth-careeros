import type { CareerOSRepository } from "@/services/persistence/careeros-repository";
import type { JsonPersistence } from "@/services/persistence/json-persistence";
import { createSeedWorkspace } from "@/data/seed/tpm-workspace";
import type { CareerOSWorkspace } from "@/types/domain";

export class LocalCareerOSRepository implements CareerOSRepository {
  constructor(private readonly persistence: JsonPersistence<CareerOSWorkspace>) {}

  getWorkspace() {
    const workspace = this.persistence.read();

    if (workspace) {
      return Promise.resolve(workspace);
    }

    const seedWorkspace = createSeedWorkspace();
    this.persistence.write(seedWorkspace);
    return Promise.resolve(seedWorkspace);
  }

  saveWorkspace(workspace: CareerOSWorkspace) {
    const updatedWorkspace = {
      ...workspace,
      updatedAt: new Date().toISOString()
    };
    this.persistence.write(updatedWorkspace);
    return Promise.resolve(updatedWorkspace);
  }

  resetWorkspace() {
    const seedWorkspace = createSeedWorkspace();
    this.persistence.write(seedWorkspace);
    return Promise.resolve(seedWorkspace);
  }

  async getActiveUserWorkspace() {
    const workspace = await this.getWorkspace();
    return {
      workspace,
      activeUserId: workspace.activeUserId
    };
  }
}
