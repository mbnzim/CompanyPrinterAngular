import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEddPrintermakeComponent } from './add-edd-printermake.component';

describe('AddEddPrintermakeComponent', () => {
  let component: AddEddPrintermakeComponent;
  let fixture: ComponentFixture<AddEddPrintermakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEddPrintermakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEddPrintermakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
