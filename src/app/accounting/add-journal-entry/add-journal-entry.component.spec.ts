import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJournalEntryComponent } from './add-journal-entry.component';

describe('AddJournalEntryComponent', () => {
  let component: AddJournalEntryComponent;
  let fixture: ComponentFixture<AddJournalEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJournalEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJournalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
