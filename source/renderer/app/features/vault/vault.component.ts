import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { GroupsTreeComponent } from './components/groups-tree/groups-tree.component';
import { VaultStore } from "./store/vault.store";

@Component({
  selector: 'app-vault',
  standalone: true,
  imports: [GroupsTreeComponent],
  templateUrl: './vault.component.html',
  styleUrl: './vault.component.css',
  providers: [VaultStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaultComponent {
  private readonly path: string = "D:/test_database.kdbx";
  private readonly password: string = "qwerty";
  readonly store = inject(VaultStore);

  vault = this.store.vault;

  public connectToBd() {
    this.store.loadVault([this.path, this.password])

    console.log(this.vault())
  }
}
