/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, EventEmitter, ViewChild} from '@angular/core';
import {Center} from '../../services/center/domain/center.model';
import {CenterFormComponent, CenterFormData, CenterSaveEvent} from './form.component';
import {User} from '../../services/identity/domain/user.model';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CovalentStepsModule} from '@covalent/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FimsSharedModule} from '../../common/common.module';
import {MatIconModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';

const centerTemplate: Center = {
  identifier: 'test',
  givenName: 'test',
  middleName: 'test',
  surname: 'test',
  contactDetails: [{
    type: 'EMAIL',
    group: 'BUSINESS',
    value: 'test@test.de',
    preferenceLevel: 0
  }],

  assignedOffice: 'test'
};

const userTemplate: User = {
  identifier: 'test',
  role: 'test'
};

describe('Test center form component', () => {

  let fixture: ComponentFixture<TestComponent>;

  let testComponent: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        CenterFormComponent
      ],
      imports: [
        TranslateModule.forRoot(),
        FimsSharedModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatOptionModule,
        MatIconModule,
        MatInputModule,
        CovalentStepsModule,
        NoopAnimationsModule
      ],
      providers: [
        {
          provide: Store, useClass: class {
          dispatch = jasmine.createSpy('dispatch');
          select = jasmine.createSpy('select').and.returnValue(Observable.empty());
        }}
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
  });

  it('should test if the form save the original values', () => {
    fixture.detectChanges();

    testComponent.saveEmitter.subscribe((saveEvent: CenterSaveEvent) => {
      expect(centerTemplate.identifier).toEqual(saveEvent.detailForm.identifier);
      expect(centerTemplate.givenName).toEqual(saveEvent.detailForm.firstName);
      expect(centerTemplate.middleName).toEqual(saveEvent.detailForm.middleName);
      expect(centerTemplate.surname).toEqual(saveEvent.detailForm.lastName);
      expect(saveEvent.detailForm.password).toEqual('');

      expect(centerTemplate.assignedOffice).toEqual(saveEvent.officeForm.assignedOffice);

      expect(centerTemplate.contactDetails.length).toEqual(1);
      expect(centerTemplate.contactDetails[0].value).toEqual(saveEvent.contactForm.email);

      expect(userTemplate.role).toEqual(saveEvent.detailForm.role);
    });

    testComponent.triggerSave();

  });
});

@Component({
  template: `
    <fims-center-form-component #form (onSave)="onSave($event)" (onCancel)="onCancel($event)" [formData]="employeeFormData">
    </fims-center-form-component>`
})
class TestComponent {

  saveEmitter = new EventEmitter<CenterSaveEvent>();

  @ViewChild('form') formComponent: CenterFormComponent;

  employeeFormData: CenterFormData = {
    employee: centerTemplate,
    user: userTemplate
  };

  triggerSave(): void {
    this.formComponent.save();
  }

  onSave(event: CenterSaveEvent): void {
    this.saveEmitter.emit(event);

  }
}
