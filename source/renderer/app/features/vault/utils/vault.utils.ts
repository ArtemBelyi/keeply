import { patchState } from '@ngrx/signals';
import { VaultState, File } from '../models/vault.model';
import { WritableStateSource } from "@ngrx/signals";

type VaultStoreType = WritableStateSource<VaultState>;


export function setLoading(store: VaultStoreType, loading: boolean) {
  patchState(store, { loading });
}

export function setError(store: VaultStoreType, error: string) {
  patchState(store, { error, loading: false });
}

export function setVault(store: VaultStoreType, vault: File['db']) {
  patchState(store, { vault, loading: false });
}
