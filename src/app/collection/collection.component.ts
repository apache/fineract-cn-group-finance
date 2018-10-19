import {Component, OnInit} from '@angular/core';

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
