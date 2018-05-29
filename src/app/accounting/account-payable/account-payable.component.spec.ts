import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPayableComponent } from './account-payable.component';

describe('AccountPayableComponent', () => {
  let component: AccountPayableComponent;
  let fixture: ComponentFixture<AccountPayableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPayableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
