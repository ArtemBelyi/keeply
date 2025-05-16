import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SplitAreaComponent, SplitComponent } from "angular-split";
import { KdbxSchemaComponent } from "./components/kdbx-schema/kdbx-schema.component";
import { VaultStore } from "./store/vault.store";

@Component({
  selector: 'app-vault',
  imports: [
    SplitAreaComponent,
    SplitComponent,
    KdbxSchemaComponent
  ],
  templateUrl: './vault.component.html',
  styleUrl: './vault.component.css',
  providers: [VaultStore],
  standalone: true,
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
