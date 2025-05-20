import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsTreeComponent } from './groups-tree.component';

describe('KdbxSchemaComponent', () => {
  let component: GroupsTreeComponent;
  let fixture: ComponentFixture<GroupsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupsTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
