import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";
import { VaultState, File, FileError } from "../models/vault.model";
import { setLoading, setError, setVault } from "../utils/vault.utils";
import { tapResponse } from "@ngrx/operators";
import { KdbxService } from "../../../core/services/kdbx.service";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { inject } from "@angular/core";
import { from, pipe, switchMap, tap } from "rxjs";



const initialState: VaultState = {
  vault: { name: "Vault", groups: [], entries: [] },
  loading: false,
  error: "",
}

export const VaultStore = signalStore(
  withState(initialState),
  withMethods((store, kdbxService = inject(KdbxService)) => ({
      loadVault:  rxMethod<[path: string, password: string]>(
        pipe(
          tap(() => setLoading(store, true)),
          switchMap(([path, password]) => {
            return from(kdbxService.openDatabase(path, password)).pipe(
              tapResponse({
                next: (file: File) => setVault(store, file.db),
                error: (err: FileError) => setError(store, err.error),
              })
            )
          })
        )
      )
    })
  )
);
