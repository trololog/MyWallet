import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsTrackerComponentComponent } from './savings-tracker-component.component';

describe('SavingsTrackerComponentComponent', () => {
  let component: SavingsTrackerComponentComponent;
  let fixture: ComponentFixture<SavingsTrackerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsTrackerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsTrackerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
