import { Component } from '@angular/core';
import { MenuItemsComponent } from "../menu-items/menu-items.component";
import { ToolbarService } from "../../../core/services/toolbar.service";
import { MenuItem } from "../models/menu-item.model";
import { CdkMenuTrigger } from "@angular/cdk/menu";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MenuItemsComponent, CdkMenuTrigger],
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
