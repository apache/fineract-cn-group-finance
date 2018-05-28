import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-payrolls',
  templateUrl: './payrolls.component.html',
  styleUrls: ['./payrolls.component.scss']
})
export class PayrollsComponent implements OnInit {
  displayedColumns = ['createdby','createdon','accountno'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  createdby: string;
  createdon: Date;
  accountno: number;
  
}

const ELEMENT_DATA: Element[] = [
  
];
