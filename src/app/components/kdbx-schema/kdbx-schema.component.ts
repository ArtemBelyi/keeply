import { Component, ViewChild } from '@angular/core';
import { TreeNode } from "../../models/kdbx-schema.model";
import { KdbxService } from "../../services/kdbx.service";
import { CdkNestedTreeNode, CdkTree, CdkTreeNodeDef, CdkTreeNodeOutlet, CdkTreeNodeToggle } from "@angular/cdk/tree";
import { ArrayDataSource } from "@angular/cdk/collections";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";

@Component({
  selector: 'app-kdbx-schema',
  standalone: true,
  imports: [
    CdkTree,
    CdkNestedTreeNode,
    MatIcon,
    CdkTreeNodeOutlet,
    CdkTreeNodeToggle,
    MatIconButton,
    CdkTreeNodeDef
  ],
  templateUrl: './kdbx-schema.component.html',
  styleUrl: './kdbx-schema.component.css'
})
export class KdbxSchemaComponent {
  @ViewChild(CdkTree) tree!: CdkTree<TreeNode>;

  kdbxData: ArrayDataSource<TreeNode>;

  childrenAccessor = (dataNode: TreeNode) => dataNode.children;

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  constructor(private kdbxService: KdbxService) {
    this.kdbxData = new ArrayDataSource<TreeNode>(this.kdbxService.kdbxData);
  }
}
