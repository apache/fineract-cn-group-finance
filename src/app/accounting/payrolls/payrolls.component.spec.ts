import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollsComponent } from './payrolls.component';

describe('PayrollsComponent', () => {
  let component: PayrollsComponent;
  let fixture: ComponentFixture<PayrollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
