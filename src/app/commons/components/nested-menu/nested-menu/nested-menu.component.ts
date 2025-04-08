import { Component, Input, ViewChildren, QueryList } from '@angular/core';
import { MenuItem } from "../../../../models/menu-item.model";
import { MatMenu, MatMenuItem, MatMenuTrigger, MatMenuPanel } from "@angular/material/menu";
import { NgForOf, NgIf } from "@angular/common";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-nested-menu',
  standalone: true,
  imports: [ MatMenu, MatMenuTrigger, NgForOf, MatMenuItem, MatButton, NgIf ],
  templateUrl: './nested-menu.component.html',
  styleUrl: './nested-menu.component.css'
})
export class NestedMenuComponent {
  @Input() menuItems: MenuItem[] = [];
  @Input() buttonLabel = 'Menu';

  @ViewChildren('subMenu') subMenus!: QueryList<MatMenu>;

  getSubMenu(item: MenuItem, index: number): MatMenuPanel | null {
    if (!item.children) return null;
    const menu = this.subMenus.get(index);
    return menu ? menu : null;
  }

  itemSelected(item: MenuItem): void {
    console.log('Selected:', item.label);
  }
}
