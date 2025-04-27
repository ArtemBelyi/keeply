import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TreeNode } from "../../types/kdbx-schema";
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
  styleUrl: './kdbx-schema.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KdbxSchemaComponent implements OnInit {

  private readonly path: string = "TEST_PATH";
  private readonly password: string = "QWERTY";

  public readonly kdbxData: ArrayDataSource<TreeNode>;

  /** Function to access children of a tree node */
  public readonly childrenAccessor = (dataNode: TreeNode): TreeNode[] => dataNode.children;

  /** Function to determine if a node has children */
  public readonly hasChild = (_: number, node: TreeNode): boolean =>
    Array.isArray(node.children) && node.children.length > 0;

  constructor(private readonly kdbxService: KdbxService) {
    this.kdbxData = new ArrayDataSource<TreeNode>(this.kdbxService.kdbxData);
  }

  ngOnInit() {
    this.kdbxService.openDatabase(this.path, this.password).then(res => console.log(res));
  }
}
