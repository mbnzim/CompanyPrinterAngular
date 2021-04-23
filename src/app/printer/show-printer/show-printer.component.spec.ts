import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPrinterComponent } from './show-printer.component';

describe('ShowPrinterComponent', () => {
  let component: ShowPrinterComponent;
  let fixture: ComponentFixture<ShowPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
