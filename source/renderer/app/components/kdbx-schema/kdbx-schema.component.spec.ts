import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdbxSchemaComponent } from './kdbx-schema.component';

describe('KdbxSchemaComponent', () => {
  let component: KdbxSchemaComponent;
  let fixture: ComponentFixture<KdbxSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KdbxSchemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KdbxSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
