import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeClearingComponent } from './cheque-clearing.component';

describe('ChequeClearingComponent', () => {
  let component: ChequeClearingComponent;
  let fixture: ComponentFixture<ChequeClearingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeClearingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeClearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
