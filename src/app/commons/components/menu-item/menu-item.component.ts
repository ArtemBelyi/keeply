import { Component, Input } from '@angular/core';
import { MenuItem } from "../../../models/menu-item.model";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    NgForOf,
    NgIf
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
}
