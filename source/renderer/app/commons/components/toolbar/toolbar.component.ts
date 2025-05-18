import { Component } from '@angular/core';
import { MenuItemsComponent } from "../menu-items/menu-items.component";
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

  fileBtnItems: MenuItem[] = [
    { label: "New..." },
    {
      label: 'Open',
      children: [
        { label: 'Open file' },
        { label: 'Open URL' },
        { label: 'Find files' },
        { label: 'Find files (In Folder)' }
      ],
    },
    { label: 'Close' },
    { label: "Save" },
    { label: "Save as", children: [
        { label: "Save to File" },
        { label: "Save to URL" },
        { label: "Save Copy to File" }
      ]
    },
    { label: "Synchronize", children: [
        { label: "Synchronize with file" },
        { label: "Synchronize with URL" },
        { label: "Recent Files", children: [
            { label: "File_1" },
            { label: "File_2" },
            { label: "File_3" },
          ]}
      ]}
  ]
}
