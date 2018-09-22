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
import {Action} from '@ngrx/store';
import {type} from '../../store/util';
import {Employee} from '../../services/office/domain/employee.model';
import {Error} from '../../services/domain/error.model';
import {ContactDetail} from '../../services/domain/contact/contact-detail.model';
import {UserWithPassword} from '../../services/identity/domain/user-with-password.model';
import {RoutePayload} from '../../common/store/route-payload';
import {
  CreateResourceSuccessPayload,
  DeleteResourceSuccessPayload,
  LoadResourcePayload,
  SelectResourcePayload,
  UpdateResourceSuccessPayload
} from '../../common/store/resource.reducer';

export const LOAD = type('[Center] Load');
export const SELECT = type('[Center] Select');

export const CREATE = type('[Center] Create');
export const CREATE_SUCCESS = type('[Center] Create Success');
export const CREATE_FAIL = type('[Center] Create Fail');

export const UPDATE = type('[Center] Update');
export const UPDATE_SUCCESS = type('[Center] Update Success');
export const UPDATE_FAIL = type('[Center] Update Fail');

export const DELETE = type('[Center] Delete');
export const DELETE_SUCCESS = type('[Center] Delete Success');
export const DELETE_FAIL = type('[Center] Delete Fail');

export const RESET_FORM = type('[Center] Reset Form');

export interface EmployeeRoutePayload extends RoutePayload {
  employee: Employee;
}

export interface CreateEmployeePayload extends EmployeeRoutePayload {
  user: UserWithPassword;
}

export interface UpdateEmployeePayload extends EmployeeRoutePayload {
  contactDetails?: ContactDetail[];
  password?: string;
  role?: string;
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: LoadResourcePayload) { }
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: SelectResourcePayload) { }
}

export class CreateEmployeeAction implements Action {
  readonly type = CREATE;

  constructor(public payload: CreateEmployeePayload) { }
}

export class CreateEmployeeSuccessAction implements Action {
  readonly type = CREATE_SUCCESS;

  constructor(public payload: CreateResourceSuccessPayload) { }
}

export class CreateEmployeeFailAction implements Action {
  readonly type = CREATE_FAIL;

  constructor(public payload: Error) { }
}

export class UpdateEmployeeAction implements Action {
  readonly type = UPDATE;

  constructor(public payload: UpdateEmployeePayload) { }
}

export class UpdateEmployeeSuccessAction implements Action {
  readonly type = UPDATE_SUCCESS;

  constructor(public payload: UpdateResourceSuccessPayload) { }
}

export class UpdateEmployeeFailAction implements Action {
  readonly type = UPDATE_FAIL;

  constructor(public payload: Error) { }
}

export class DeleteEmployeeAction implements Action {
  readonly type = DELETE;

  constructor(public payload: EmployeeRoutePayload) { }
}

export class DeleteEmployeeSuccessAction implements Action {
  readonly type = DELETE_SUCCESS;

  constructor(public payload: DeleteResourceSuccessPayload) { }
}

export class DeleteEmployeeFailAction implements Action {
  readonly type = DELETE_FAIL;

  constructor(public payload: Error) { }
}

export class ResetEmployeeFormAction implements Action {
  readonly type = RESET_FORM;

  constructor() { }
}

export type Actions
  = LoadAction
  | SelectAction
  | CreateEmployeeAction
  | CreateEmployeeSuccessAction
  | CreateEmployeeFailAction
  | UpdateEmployeeAction
  | UpdateEmployeeSuccessAction
  | UpdateEmployeeFailAction
  | DeleteEmployeeAction
  | DeleteEmployeeSuccessAction
  | DeleteEmployeeFailAction
  | ResetEmployeeFormAction;
