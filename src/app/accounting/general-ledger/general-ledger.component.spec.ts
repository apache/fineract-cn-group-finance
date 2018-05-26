import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLedgerComponent } from './general-ledger.component';

describe('GeneralLedgerComponent', () => {
  let component: GeneralLedgerComponent;
  let fixture: ComponentFixture<GeneralLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
