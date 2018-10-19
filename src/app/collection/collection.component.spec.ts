import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionComponent } from './collection.component';
import {FimsSharedModule} from '.././common/common.module';
import {MatIconModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {CovalentStepsModule} from '@covalent/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule} from '@ngx-translate/core';



describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionComponent ],

      imports: [
        TranslateModule.forRoot(),
        FimsSharedModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatOptionModule,
        MatIconModule,
        MatInputModule,
        CovalentStepsModule,
        NoopAnimationsModule,
        

      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
