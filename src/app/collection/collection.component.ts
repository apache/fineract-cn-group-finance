import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../store';
import {Observable} from 'rxjs/Observable';
import { Staff } from '../services/domain/center/staff';
import { Office } from '../services/office/domain/office.model';
import { Group } from '../services/domain/group/group';
import {Center} from '../services/center/domain/center.model'

@Component({
  selector: 'fims-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

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
