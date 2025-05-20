import { Component } from '@angular/core';
import { ContentComponent } from "./layout/content/content/content.component";

@Component({
  selector: 'app-root',
  imports: [ContentComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
}
