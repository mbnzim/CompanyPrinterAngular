import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPrinterComponent } from './add-edit-printer.component';

describe('AddEditPrinterComponent', () => {
  let component: AddEditPrinterComponent;
  let fixture: ComponentFixture<AddEditPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
