import {Routes} from '@angular/router';
import {CenterComponent} from './center.component';
import {CreateCenterFormComponent} from './form/create/create.form.component';
import {EmployeeDetailComponent} from './detail/employee.detail.component';
import {EditEmployeeFormComponent} from './form/edit/edit.form.component';
import {UserResolver} from './user.resolver';
import {CenterExistsGuard} from './center-exists.guard';

export const CenterRoutes: Routes = [
  {
    path: '',
    component: CenterComponent,
    data: {title: 'Manage Employees', hasPermission: {id: 'office_employees', accessLevel: 'READ'}}
  },
  {
    path: 'create',
    component: CreateCenterFormComponent,
    data: {title: 'Create Employee', hasPermission: {id: 'office_employees', accessLevel: 'CHANGE'}}
  },
  {
    path: 'detail/:id/edit',
    component: EditEmployeeFormComponent,
    canActivate: [CenterExistsGuard],
    resolve: {user: UserResolver},
    data: {title: 'Edit Employee', hasPermission: {id: 'office_employees', accessLevel: 'CHANGE'}}
  },
  {
    path: 'detail/:id',
    component: EmployeeDetailComponent,
    canActivate: [CenterExistsGuard],
    resolve: {user: UserResolver},
    data: {title: 'View Employee', hasPermission: {id: 'office_employees', accessLevel: 'READ'}}
  }
];
