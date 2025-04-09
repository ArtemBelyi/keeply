import { Component } from '@angular/core';
import { MenuItemsComponent } from "../../../commons/components/menu-items/menu-items.component";
import { ToolbarService } from "../../../services/toolbar.service";
import { MenuItem } from "../../../models/menu-item.model";
import { MatButton } from "@angular/material/button";
import { CdkMenuTrigger } from "@angular/cdk/menu";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MenuItemsComponent, MatButton, CdkMenuTrigger],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  fileBtnLabel: string = "File";
  fileBtnItems: MenuItem[] = [];

  constructor(private toolbarService: ToolbarService) {
    this.fileBtnItems = this.toolbarService.fileItemsBtn;
  }
}
