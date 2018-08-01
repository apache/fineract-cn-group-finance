import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Employee} from '../services/office/domain/employee.model';
import {FetchRequest} from '../services/domain/paging/fetch-request.model';
import {TableData} from '../common/data-table/data-table.component';
import {Store} from '@ngrx/store';
import * as fromRoot from '../store';
import {Observable} from 'rxjs/Observable';
import {SEARCH} from '../store/employee/employee.actions';



@Component({
  selector: 'fims-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {
  
  employeeData$: Observable<TableData>;

  loading$: Observable<boolean>;

  columns: any[] = [
    { name: 'name', label: 'Name' },
    { name: 'accountNumber', label: 'Account #' },
    { name: 'id', label: 'External Id' },
    { name: 'status', label: 'Status' },
    { name: 'office', label: 'Office' }
  ];

  searchTerm: string;

  private lastFetchRequest: FetchRequest = {};

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<fromRoot.State>) {}

  ngOnInit(): void {

    this.employeeData$ = this.store.select(fromRoot.getEmployeeSearchResults)
      .map(employeePage => ({
        data: employeePage.employees,
        totalElements: employeePage.totalElements,
        totalPages: employeePage.totalPages
      }));

    this.loading$ = this.store.select(fromRoot.getEmployeeSearchLoading);

    this.route.queryParams.subscribe((params: Params) => {
      this.search(params['term']);
    });
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.fetchEmployees();
  }

  rowSelect(row: Employee): void {
    this.router.navigate(['detail', row.identifier], { relativeTo: this.route });
  }

  fetchEmployees(fetchRequest?: FetchRequest) {
    if (fetchRequest) {
      this.lastFetchRequest = fetchRequest;
    }

    this.lastFetchRequest.searchTerm = this.searchTerm;

    this.store.dispatch({ type: SEARCH, payload: this.lastFetchRequest });
  }
}
