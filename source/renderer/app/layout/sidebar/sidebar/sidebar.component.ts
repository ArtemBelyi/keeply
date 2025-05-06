import { Component } from '@angular/core';
import { KdbxSchemaComponent } from "../../../components/kdbx-schema/kdbx-schema.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ KdbxSchemaComponent ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
