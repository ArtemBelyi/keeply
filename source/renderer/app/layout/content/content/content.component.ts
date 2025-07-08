import { Component, inject } from '@angular/core';
import { VaultsStore } from '../../../core/store/vaults.store';
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
    this.tabsStore.addVaultTab()
  }
}
