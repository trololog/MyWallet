import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtTrackerComponentComponent } from './debt-tracker-component.component';

describe('DebtTrackerComponentComponent', () => {
  let component: DebtTrackerComponentComponent;
  let fixture: ComponentFixture<DebtTrackerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtTrackerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtTrackerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
