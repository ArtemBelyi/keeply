import { Component } from '@angular/core';
import { VaultComponent } from "../../../features/vault/vault.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ VaultComponent ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {}
