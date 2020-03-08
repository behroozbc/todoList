import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinBtnComponent } from './pin-btn.component';

describe('PinBtnComponent', () => {
  let component: PinBtnComponent;
  let fixture: ComponentFixture<PinBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
