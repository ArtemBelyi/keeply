import { Component, inject, OnInit } from '@angular/core';
import { VaultsStore } from '../../../core/store/vaults.store';
import { VaultTab } from '../../../core/models/vaults.model';
import { VaultComponent } from "../../../features/vault/vault.component";

const mockVaultTabs: Array<VaultTab> = [
  { id: 1, label: "Vault_1" },
  { id: 2, label: "Vault_2" },
  { id: 3, label: "Vault_3" }
]

@Component({
  selector: 'app-content',
  imports: [VaultComponent],
  providers: [VaultsStore],
  templateUrl: './content.component.html',
  standalone: true,
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  readonly vaults = inject(VaultsStore)

  ngOnInit(): void {
    this.vaults.addVaults(mockVaultTabs)
    console.log(this.vaults.entities())
  }
}
