import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactionTypeComponent } from './add-transaction-type.component';

describe('AddTransactionTypeComponent', () => {
  let component: AddTransactionTypeComponent;
  let fixture: ComponentFixture<AddTransactionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTransactionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransactionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
