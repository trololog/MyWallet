import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionComponentComponent } from './transaction-component.component';

describe('TransactionComponentComponent', () => {
  let component: TransactionComponentComponent;
  let fixture: ComponentFixture<TransactionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
