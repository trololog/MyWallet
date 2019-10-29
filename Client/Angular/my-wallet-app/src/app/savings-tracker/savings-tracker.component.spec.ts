import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsTrackerComponent } from './savings-tracker.component';

describe('SavingsTrackerComponent', () => {
  let component: SavingsTrackerComponent;
  let fixture: ComponentFixture<SavingsTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
