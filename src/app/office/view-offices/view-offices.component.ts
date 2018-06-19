import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-view-offices',
  templateUrl: './view-offices.component.html',
  styleUrls: ['./view-offices.component.scss']
})
export class ViewOfficesComponent implements OnInit {
  displayedColumns = ['id','name','description'];
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
  id: number;
  name: string;
  description: string;
  
}

const ELEMENT_DATA: Element[] = [
  
];
