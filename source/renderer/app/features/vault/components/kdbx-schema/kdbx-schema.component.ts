import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Group } from "../../../../core/models/kdbx.model";
import { CdkNestedTreeNode, CdkTree, CdkTreeNodeDef, CdkTreeNodeOutlet, CdkTreeNodeToggle } from "@angular/cdk/tree";
import { ArrayDataSource } from "@angular/cdk/collections";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { VaultStore } from "../../store/vault.store";
import { computed } from "@angular/core";

@Component({
  selector: 'app-kdbx-schema',
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
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KdbxSchemaComponent {
  private readonly store = inject(VaultStore);

  public readonly kdbxData = computed(() =>
    new ArrayDataSource<Group>(this.store.groups())
  );

  /** Function to access children of a tree node */
  public readonly childrenAccessor = (dataNode: Group): Group[] => dataNode.groups;

  /** Function to determine if a node has children */
  public readonly hasChild = (_: number, node: Group): boolean =>
    Array.isArray(node.groups) && node.groups.length > 0;
}
