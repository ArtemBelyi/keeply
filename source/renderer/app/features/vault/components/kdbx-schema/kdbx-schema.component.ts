import { Component, ChangeDetectionStrategy } from '@angular/core';
import { KdbxService } from "../../../../core/services/kdbx.service";
import { TreeNode } from "../../../../core/models/kdbx.model";
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
  styleUrl: './kdbx-schema.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KdbxSchemaComponent {

  public readonly kdbxData: ArrayDataSource<TreeNode>;

  /** Function to access children of a tree node */
  public readonly childrenAccessor = (dataNode: TreeNode): TreeNode[] => dataNode.children;

  /** Function to determine if a node has children */
  public readonly hasChild = (_: number, node: TreeNode): boolean =>
    Array.isArray(node.children) && node.children.length > 0;

  constructor(private readonly kdbxService: KdbxService) {
    this.kdbxData = new ArrayDataSource<TreeNode>(this.kdbxService.kdbxData);
  }
}
