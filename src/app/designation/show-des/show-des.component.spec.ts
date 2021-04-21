import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDesComponent } from './show-des.component';

describe('ShowDesComponent', () => {
  let component: ShowDesComponent;
  let fixture: ComponentFixture<ShowDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
