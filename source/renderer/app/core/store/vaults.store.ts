import { signalStore, withState, withMethods, patchState, withComputed } from "@ngrx/signals";
import { VaultTab, VaultsState } from "../models/vaults.model";
import { computed } from "@angular/core";

const mockVaultTabs: Array<VaultTab> = [
  { label: "Vault_1" },
  { label: "Vault_2" },
  { label: "Vault_3" }
]

export const VaultsStore = signalStore(
  { providedIn: 'root' },
  withState<VaultsState>({ tabs: mockVaultTabs, activeIdx: 0 }),
  withComputed(({ tabs }) => ({
    defaultTab: computed(() => ({ label: `Vault_${tabs().length + 1 }` })),
    lastTabIndex: computed(() => Math.max(0, tabs().length - 1))
  })),
  withMethods((store) => ({
    addVaultTab(): void {
      patchState(store, {
        tabs: [ ...store.tabs(), store.defaultTab() ],
        activeIdx: store.tabs().length
      })
    },
    deleteVaultTab(indexToDelete: number): void {
      const currentTabs = store.tabs();
      const newTabs = currentTabs.filter((_, index) => index !== indexToDelete);

      const currentActiveIdx = store.activeIdx();
      let newActiveIdx = currentActiveIdx;

      // Логика определения нового активного индекса
      if (indexToDelete === currentActiveIdx) {
        // Если удаляем активную вкладку, переключаемся на предыдущую или следующую
        newActiveIdx = Math.min(currentActiveIdx, newTabs.length - 1);
      } else if (indexToDelete < currentActiveIdx) {
        // Если удаляем вкладку перед активной, корректируем индекс
        newActiveIdx--;
      }

      patchState(store, {
        tabs: newTabs,
        activeIdx: newActiveIdx
      });
    },
    setActiveIdx(newIndex: number): void {
      const validatedIndex = Math.max(0, Math.min(newIndex, store.lastTabIndex()));
      patchState(store, { activeIdx: validatedIndex });
    }
  }))
)
