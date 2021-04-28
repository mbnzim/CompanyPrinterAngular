import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDocComponent } from './add-edit-doc.component';

describe('AddEditDocComponent', () => {
  let component: AddEditDocComponent;
  let fixture: ComponentFixture<AddEditDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
