import { Component } from '@angular/core';
import { LabelComponent } from "./components/label/label.component";

@Component({
  selector: 'app-label-list',
  standalone: true,
  imports: [
    LabelComponent
  ],
  templateUrl: './label-list.component.html',
  styleUrl: './label-list.component.css'
})
export class LabelListComponent {
  labels = [
    { id: 1, name: "Tab_1" },
    { id: 2, name: "Tab_2" },
    { id: 3, name: "Tab_3" },
  ]

}
