import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPrintermakeComponent } from './show-printermake.component';

describe('ShowPrintermakeComponent', () => {
  let component: ShowPrintermakeComponent;
  let fixture: ComponentFixture<ShowPrintermakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPrintermakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPrintermakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
