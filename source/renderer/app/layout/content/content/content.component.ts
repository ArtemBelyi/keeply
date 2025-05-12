import { Component } from '@angular/core';
import { VaultComponent } from "../../../features/vault/vault.component";

@Component({
    selector: 'app-content',
    imports: [VaultComponent],
    templateUrl: './content.component.html',
    standalone: true,
    styleUrl: './content.component.css'
})
export class ContentComponent {}
