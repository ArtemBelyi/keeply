import { Injectable } from '@angular/core';
import { VaultState } from "../models/vault.model";
import { ComponentStore } from "@ngrx/component-store";


@Injectable()
export class VaultStore extends ComponentStore<VaultState> {

  constructor() {
    super({
      name: 'Vault',
      entries: [],
      groups: []
    })
  }
}
