import { Component, inject } from '@angular/core';
import { VaultsStore } from '../../../core/store/vaults.store';
import { VaultTab } from '../../../core/models/vaults.model';
import { VaultTabsComponent } from '../../../features/vault-tabs/vault-tabs.component';

@Component({
  selector: 'app-content',
  imports: [VaultTabsComponent],
  templateUrl: './content.component.html',
  standalone: true,
  styleUrl: './content.component.css'
})
export class ContentComponent {
  readonly tabsStore = inject(VaultsStore)

  addVaultTab(): void {
    const tab: VaultTab = { value: this.tabsStore.tabs().length + 1, label: `Vault_${this.tabsStore.tabs().length + 1}` }
    this.tabsStore.addVaultTab(tab)
  }
}
