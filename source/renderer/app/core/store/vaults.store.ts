import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";
import { VaultTab, VaultsState } from "../models/vaults.model";

const mockVaultTabs: Array<VaultTab> = [
  { id: 1, label: "Vault_1" },
  { id: 2, label: "Vault_2" },
  { id: 3, label: "Vault_3" }
]

export const VaultsStore = signalStore(
  { providedIn: 'root' },
  withState<VaultsState>({ tabs: mockVaultTabs }),
  withMethods((store) => ({
    addVaultTab(tab: VaultTab): void {
      patchState(store, { tabs: [ ...store.tabs(), tab ]})
    },
    deleteVaultTab(id: number): void {
      patchState(store, { tabs: store.tabs().filter(tab => tab.id !== id) })
    }
  }))
)
