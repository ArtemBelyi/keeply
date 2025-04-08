import { Component, Input } from '@angular/core';
import { MenuItem } from "../../../models/menu-item.model";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { NgForOf, NgIf, NgTemplateOutlet } from "@angular/common";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [MatMenu, MatMenuTrigger, NgForOf, MatMenuItem, MatButton, NgIf, NgTemplateOutlet],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css'
})
export class MenuItemsComponent {
  @Input() menuItems: MenuItem[] = [];
  @Input() buttonLabel = 'Menu';
}
