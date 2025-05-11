import { Injectable } from '@angular/core';
import { MenuItem } from "../../commons/components/models/menu-item.model";

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor() { }

  fileItemsBtn: MenuItem[] = [
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
