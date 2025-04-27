import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { MenuItem } from "../../../types/menu-item";
import { NgForOf, NgIf } from "@angular/common";
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from "@angular/cdk/menu";

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [ NgForOf, NgIf, CdkMenuItem, CdkMenu, CdkMenuTrigger],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css'
})
export class MenuItemsComponent {
  @Input() menuItems: MenuItem[] = [];
  @ViewChild("menu", { static: true }) menu!: TemplateRef<MenuItemsComponent>;
}
