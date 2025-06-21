import { Component, inject } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { VaultsStore } from '../../core/store/vaults.store';
import { VaultComponent } from '../vault/vault.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vault-tabs',
  standalone: true,
  imports: [TabsModule, VaultComponent, CommonModule],
  templateUrl: './vault-tabs.component.html',
  styleUrl: './vault-tabs.component.css'
})
export class VaultTabsComponent {
  readonly vaultsStore = inject(VaultsStore)
}
