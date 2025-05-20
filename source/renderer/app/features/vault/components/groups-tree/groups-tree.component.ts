import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Group } from "../../../../core/models/kdbx.model";
import { VaultStore } from "../../store/vault.store";
import { computed } from "@angular/core";
import { TreeModule } from 'primeng/tree';

@Component({
  selector: 'app-groups-tree',
  standalone: true,
  imports: [
    TreeModule
  ],
  templateUrl: './groups-tree.component.html',
  styleUrl: './groups-tree.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsTreeComponent {
  private readonly store = inject(VaultStore);
  selectedGroup!: Group;

  public readonly groupsData = computed(() => {
    interface TreeNode {
      key: string;
      label: string;
      data: Group;
      entries: any[];
      children: TreeNode[];
    }

    const transformGroup = (group: Group): TreeNode => ({
      key: group.uuid.id,
      label: group.name,
      data: group,
      entries: group.entries,
      children: group.groups?.map(subGroup => transformGroup(subGroup)) || []
    });

    return this.store.groups().map(group => transformGroup(group));
  });
}
