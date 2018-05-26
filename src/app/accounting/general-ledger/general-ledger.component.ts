import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-general-ledger',
  templateUrl: './general-ledger.component.html',
  styleUrls: ['./general-ledger.component.scss']
})
export class GeneralLedgerComponent implements OnInit {
  displayedColumns = ['name','type','subtype','category','core', 'user'];
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
  type:string;
  subtype: string;
  category:string;
  core: string;
  user:string;

 
}

const ELEMENT_DATA: Element[] = [
  
];
