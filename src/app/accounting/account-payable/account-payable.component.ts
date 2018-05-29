import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-account-payable',
  templateUrl: './account-payable.component.html',
  styleUrls: ['./account-payable.component.scss']
})
export class AccountPayableComponent implements OnInit {

  displayedColumns = ['name','branch','bankAccount','payableAccount','payee','currency','amount'];
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
  name: string;
  branch:string;
  bankAccount: string;
  payableAccount:string;
  payee: number;
  currency:Date;
  amount:string;
  
}

const ELEMENT_DATA: Element[] = [
  
];
