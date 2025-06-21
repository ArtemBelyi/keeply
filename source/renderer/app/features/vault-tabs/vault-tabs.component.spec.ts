import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultTabsComponent } from './vault-tabs.component';

describe('TabsComponent', () => {
  let component: VaultTabsComponent;
  let fixture: ComponentFixture<VaultTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaultTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaultTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
