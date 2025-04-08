import { Component } from '@angular/core';
import { ToolbarComponent } from "../../../components/toolbar/toolbar/toolbar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ ToolbarComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
