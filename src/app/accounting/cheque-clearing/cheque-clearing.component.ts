import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-cheque-clearing',
  templateUrl: './cheque-clearing.component.html',
  styleUrls: ['./cheque-clearing.component.scss']
})
export class ChequeClearingComponent implements OnInit {

  displayedColumns = ['identifier','drawer','drawee','payee','amount','dateissued','state','approve','cancel'];
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
  identifier: number;
  drawee:string;
  drawer: string;
  payee:string;
  amount: number;
  dateissued:Date;
  state:string;
  approve:boolean;
  cancel:boolean;
  
}

const ELEMENT_DATA: Element[] = [
  
];
