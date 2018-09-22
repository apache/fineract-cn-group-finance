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
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CenterComponent} from './center.component';
import {CenterRoutes} from './center.routing';
import {CenterFormComponent} from './form/form.component';
import {CreateCenterFormComponent} from './form/create/create.form.component';
import {CenterDetailComponent} from './detail/center.detail.component';
import {EditCenterFormComponent} from './form/edit/edit.form.component';
import {UserResolver} from './user.resolver';
import {FimsSharedModule} from '../common/common.module';
import {CenterExistsGuard} from './center-exists.guard';
import {Store} from '@ngrx/store';
import {EmployeesStore, employeeStoreFactory} from './store/index';
import {EmployeeNotificationEffects} from './store/effects/notification.effects';
import {EffectsModule} from '@ngrx/effects';
import {EmployeeApiEffects} from './store/effects/service.effects';
import {EmployeeRouteEffects} from './store/effects/route.effects';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {CovalentSearchModule, CovalentStepsModule} from '@covalent/core';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild(CenterRoutes),
    FimsSharedModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CovalentSearchModule,
    CovalentStepsModule,

    EffectsModule.run(EmployeeApiEffects),
    EffectsModule.run(EmployeeRouteEffects),
    EffectsModule.run(EmployeeNotificationEffects)
  ],
  declarations: [
    CenterComponent,
    CenterFormComponent,
    CreateCenterFormComponent,
    EditCenterFormComponent,
    CenterDetailComponent
  ],
  providers: [
    UserResolver,
    CenterExistsGuard,
    { provide: EmployeesStore, useFactory: employeeStoreFactory, deps: [Store]}
  ]
})
export class CenterModule {}
