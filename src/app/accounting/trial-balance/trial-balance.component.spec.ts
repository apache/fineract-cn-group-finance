import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialBalanceComponent } from './trial-balance.component';

describe('TrialBalanceComponent', () => {
  let component: TrialBalanceComponent;
  let fixture: ComponentFixture<TrialBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
