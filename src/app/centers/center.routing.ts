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
import {Routes} from '@angular/router';
import {CenterComponent} from './center.component';
import {CreateCenterFormComponent} from './form/create/create.form.component';
import {CenterDetailComponent} from './detail/center.detail.component';
import {EditCenterFormComponent} from './form/edit/edit.form.component';
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
    path: 'detail',
    component: EditCenterFormComponent,
   
  },
  {
    path: 'detail/:id',
    component: CenterDetailComponent,
    canActivate: [CenterExistsGuard],
    resolve: {user: UserResolver},
    data: {title: 'View Employee', hasPermission: {id: 'office_employees', accessLevel: 'READ'}}
  }
];
