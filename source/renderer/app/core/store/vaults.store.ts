import { patchState, signalStore, withMethods, type } from "@ngrx/signals";
import { addEntity, withEntities, entityConfig, setAllEntities } from "@ngrx/signals/entities";
import { VaultTab } from "../models/vaults.model";


const vaultsConfig = entityConfig({
  entity: type<VaultTab>(),
  collection: 'vaultTabs',
  selectId: (vault) => vault.id,
});

export const VaultsStore = signalStore(
  { providedIn: 'root' },
  withEntities<VaultTab>(vaultsConfig),
  withMethods((store) => ({

    addVault(vault: VaultTab): void {
      patchState(store, addEntity(vault))
    },

    addVaults(vaults: Array<VaultTab>): void {
      patchState(store, setAllEntities(vaults))
    }
  }))
)
