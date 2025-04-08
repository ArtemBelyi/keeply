import { Component, OnInit } from '@angular/core';
import { NestedMenuComponent } from "../../../commons/components/nested-menu/nested-menu/nested-menu.component";
import { ToolbarService } from "../../../services/toolbar.service";
import { MenuItem } from "../../../models/menu-item.model";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ NestedMenuComponent ],
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
