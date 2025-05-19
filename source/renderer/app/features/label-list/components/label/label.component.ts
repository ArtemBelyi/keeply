import { Component, input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.css'
})
export class LabelComponent {
  label = input<{ id: number; name: string} | null>(null);
}
