import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtTrackerComponent } from './debt-tracker.component';

describe('DebtTrackerComponent', () => {
  let component: DebtTrackerComponent;
  let fixture: ComponentFixture<DebtTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
