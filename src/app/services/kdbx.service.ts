import { Injectable } from '@angular/core';
import { TreeNode } from "../types/kdbx-schema";
import { getWindow } from "../utils/get-window";

@Injectable({
  providedIn: 'root'
})
export class KdbxService {

  constructor() { }

  public kdbxData: TreeNode[] = [
    {
      name: 'Fruit',
      children: [
        { name: 'Apple', children: [] },
        { name: 'Banana', children: [] },
        { name: 'Apple_2', children: [] }
      ],
    },
    {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [
            { name: 'Broccoli', children: [] },
            { name: 'Brussels', children: [] }
          ],
        },
        {
          name: 'Orange',
          children: [
            { name: 'Pumpkins', children: [] },
            { name: 'Carrots', children: [] }
          ],
        },
      ],
    },
  ];

  async openDatabase(filePath: string, password: string): Promise<any> {
    return getWindow()?.kdbxApi.loadDatabase(filePath, password);
  }
}
