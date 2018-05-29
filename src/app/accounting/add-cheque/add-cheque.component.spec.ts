import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChequeComponent } from './add-cheque.component';

describe('AddChequeComponent', () => {
  let component: AddChequeComponent;
  let fixture: ComponentFixture<AddChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
