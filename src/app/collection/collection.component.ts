import {Component, OnInit} from '@angular/core';
<<<<<<< HEAD

import {Store} from '@ngrx/store';
import * as fromRoot from '../store';
import {Observable} from 'rxjs/Observable';



export interface Office {
  value: string;
  viewValue: string;
}

export interface Staff {
  value: string;
  viewValue: string;
}

export interface Center {
  value: string;
  viewValue: string;
}

export interface Group {
  value: string;
  viewValue: string;
}
=======
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Employee, Center} from '../services/office/domain/employee.model';
import {FetchRequest} from '../services/domain/paging/fetch-request.model';
import {TableData} from '../common/data-table/data-table.component';
import {Store} from '@ngrx/store';
import * as fromRoot from '../store';
import {Observable} from 'rxjs/Observable';
import {SEARCH} from '../store/employee/employee.actions';
import { Staff } from '../services/domain/center/staff';
import { Office } from '../services/office/domain/office.model';
import { Group } from '../services/domain/group/group';
>>>>>>> 5073d6c9e7f89e3f0f1ee761c12c19ea641afaea



@Component({
  selector: 'fims-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  offices: Office[] = [
    {value: '', viewValue: ''},
    
  ];

  staffs: Staff[] = [
    {value: '', viewValue: ''},
    
  ];

  centers: Center[] = [
    {value: '', viewValue: ''},
    
  ];

  groups: Group[] = [
    {value: '', viewValue: ''},
    
  ];



  
 

  loading$: Observable<boolean>;

  staffs: Staff[] = [];
  offices: Office[] = [];
  centers: Center[] = [];
  groups: Group[] = [];

  columns: any[] = [
    { name: 'name', label: 'Name' },
    { name: 'accountNumber', label: 'Account #' },
    { name: 'id', label: 'External Id' },
    { name: 'status', label: 'Status' },
    { name: 'office', label: 'Office' }
  ];

  searchTerm: string;

 

  constructor( private store: Store<fromRoot.State>) {}

  ngOnInit(): void {

  
    this.loading$ = this.store.select(fromRoot.getEmployeeSearchLoading);

   
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    
  }

  
}
