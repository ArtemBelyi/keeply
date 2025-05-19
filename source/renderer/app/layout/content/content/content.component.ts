import { Component } from '@angular/core';
import { VaultComponent } from "../../../features/vault/vault.component";
import { LabelListComponent } from "../../../features/label-list/label-list.component";

@Component({
  selector: 'app-content',
  imports: [VaultComponent, LabelListComponent],
  templateUrl: './content.component.html',
  standalone: true,
  styleUrl: './content.component.css'
})
export class ContentComponent {}
