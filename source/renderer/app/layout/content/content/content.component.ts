import { Component, inject } from '@angular/core';
import { VaultsStore } from '../../../core/store/vaults.store';
import { VaultComponent } from "../../../features/vault/vault.component";
import { VaultTab } from '../../../core/models/vaults.model';

@Component({
  selector: 'app-content',
  imports: [VaultComponent],
  templateUrl: './content.component.html',
  standalone: true,
  styleUrl: './content.component.css'
})
export class ContentComponent {
  readonly tabsStore = inject(VaultsStore)

  addVaultTab(): void {
    const tab: VaultTab = { id: 5, label: "Vault_4" }
    this.tabsStore.addVaultTab(tab)
  }
}
