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
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '../http/http.service';
import {Error} from '../domain/error.model';
import {RequestOptionsArgs, URLSearchParams,} from '@angular/http';
import {Office} from './domain/office.model';
import {FetchRequest} from '../domain/paging/fetch-request.model';
import {OfficePage} from './domain/office-page.model';
import {EmployeePage} from './domain/employee-page.model';
import {Employee} from './domain/employee.model';
import {buildSearchParams} from '../domain/paging/search-param.builder';
import {ContactDetail} from '../domain/contact/contact-detail.model';

@Injectable()
export class OfficeService {

  constructor(private http: HttpClient, @Inject('officeBaseUrl') private baseUrl: string) {
  }

  createOffice(office: Office): Observable<Office> {
    return this.http.post(this.baseUrl + '/offices', office)
      
  }

  addBranch(id: string, office: Office): Observable<Office> {
    return this.http.post(this.baseUrl + '/offices/' + id, office)
      
  }

  updateOffice(office: Office): Observable<Office> {
    return this.http.put(this.baseUrl + '/offices/' + office.identifier, office)
      
  }

  deleteOffice(id: String): Observable<Office> {
    return this.http.delete(this.baseUrl + '/offices/' + id, {})
      
  }

  listOffices(fetchRequest?: FetchRequest): Observable<OfficePage> {
    const params: URLSearchParams = buildSearchParams(fetchRequest);

    const requestOptions: RequestOptionsArgs = {
      search: params
    };
    return this.http.get(this.baseUrl + '/offices', requestOptions)
      
  }

  listBranches(parentIdentifier: string, fetchRequest?: FetchRequest): Observable<OfficePage> {
    const params: URLSearchParams = buildSearchParams(fetchRequest);

    const requestOptions: RequestOptionsArgs = {
      search: params
    };
    return this.http.get(this.baseUrl + '/offices/' + parentIdentifier + '/branches', requestOptions)
      
  }

  getOffice(id: string): Observable<Office> {
    return this.http.get(this.baseUrl + '/offices/' + id)
      
  }

  listEmployees(fetchRequest?: FetchRequest): Observable<EmployeePage> {
    const params: URLSearchParams = buildSearchParams(fetchRequest);

    const requestOptions: RequestOptionsArgs = {
      search: params
    };

    return this.http.get(this.baseUrl + '/employees', requestOptions)
      
  }

  getEmployee(id: string, silent?: true): Observable<Employee> {
    return this.http.get(this.baseUrl + '/employees/' + id, {}, silent)
      
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post(this.baseUrl + '/employees', employee)
     
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put(this.baseUrl + '/employees/' + employee.identifier, employee)
      
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete(this.baseUrl + '/employees/' + id, {})
      
  }

  setContactDetails(id: string, contactDetails: ContactDetail[]): Observable<void> {
    return this.http.put(this.baseUrl + '/employees/' + id + '/contacts', contactDetails);
  }

}
