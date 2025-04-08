import { Component, OnInit } from '@angular/core';
import { MenuItemsComponent } from "../../../commons/components/menu-items/menu-items.component";
import { ToolbarService } from "../../../services/toolbar.service";
import { MenuItem } from "../../../models/menu-item.model";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ MenuItemsComponent ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {

  fileBtnLabel: string = "File";
  fileBtnItems: MenuItem[] = [];

  constructor(private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.fileBtnItems = this.toolbarService.fileItemsBtn;
  }
}
