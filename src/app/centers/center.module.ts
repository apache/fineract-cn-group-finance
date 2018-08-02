import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CenterComponent} from './center.component';
import {CenterRoutes} from './center.routing';
import {CenterFormComponent} from './form/form.component';
import {CreateCenterFormComponent} from './form/create/create.form.component';
import {EmployeeDetailComponent} from './detail/employee.detail.component';
import {EditEmployeeFormComponent} from './form/edit/edit.form.component';
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
    EditEmployeeFormComponent,
    EmployeeDetailComponent
  ],
  providers: [
    UserResolver,
    CenterExistsGuard,
    { provide: EmployeesStore, useFactory: employeeStoreFactory, deps: [Store]}
  ]
})
    export class CenterModule {}