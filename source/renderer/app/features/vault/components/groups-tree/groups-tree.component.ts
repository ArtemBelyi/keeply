import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Group } from "../../../../core/models/kdbx.model";
import { GroupNode } from "../../models/vault.model";
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
  selectedGroup!: GroupNode;
  private readonly store = inject(VaultStore);

  public readonly groupsData = computed(() => {
    return this.store.groups().map(this.transformGroupToNode);
  });

  private transformGroupToNode = (group: Group): GroupNode => {
    return {
      key: group.uuid.id,
      label: group.name,
      data: group,
      entries: group.entries,
      children: group.groups?.map(this.transformGroupToNode) ?? []
    };
  };
}
