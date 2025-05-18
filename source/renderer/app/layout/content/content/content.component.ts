import { Component, signal } from '@angular/core';
import { VaultComponent } from "../../../features/vault/vault.component";
import { MatTab, MatTabGroup, MatTabLabel } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";

type Tab = {
  id: number;
  name: string;
}

@Component({
  selector: 'app-content',
  imports: [VaultComponent, MatTabGroup, MatTab, MatIconModule, MatTabLabel],
  templateUrl: './content.component.html',
  standalone: true,
  styleUrl: './content.component.css'
})
export class ContentComponent {
  selectedId = signal<number>(0);
  tabs: Tab[] = [
    { id: 1, name: "Vault_1" },
    { id: 2, name: "Vault_2" },
    { id: 3, name: "Vault_3" }
  ]

  addTab(event: MouseEvent) {
    event.stopPropagation();

  }

  setSelectedId(id: number) {
    this.selectedId.set(id);
  };
}
