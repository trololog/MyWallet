import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataComponentComponent } from './master-data-component.component';

describe('MasterDataComponentComponent', () => {
  let component: MasterDataComponentComponent;
  let fixture: ComponentFixture<MasterDataComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDataComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
