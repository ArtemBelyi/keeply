import { Component } from '@angular/core';
import { FooterComponent } from "../../layout/footer/footer/footer.component";
import { HeaderComponent } from "../../layout/header/header/header.component";
import { SplitAreaComponent, SplitComponent } from "angular-split";
import { KdbxSchemaComponent } from "./components/kdbx-schema/kdbx-schema.component";
import { KdbxService } from "../../core/services/kdbx.service";

@Component({
  selector: 'app-vault',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    SplitAreaComponent,
    SplitComponent,
    KdbxSchemaComponent
  ],
  templateUrl: './vault.component.html',
  styleUrl: './vault.component.css'
})
export class VaultComponent {
  private readonly path: string = "D:/test_database.kdbx";
  private readonly password: string = "qwerty";

  constructor(private readonly kdbxService: KdbxService) {
  }

  public connectToBd() {
    this.kdbxService.openDatabase(this.path, this.password).then(res => console.log(res));
  }
}
