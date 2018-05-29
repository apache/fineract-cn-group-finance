import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  hide = true;

  offices = [
    {value: 'office-1', viewValue: 'Head office'},
   
  ];

  employees = [
    {value: '', viewValue: ''},
   
  ];

  constructor() { }

  ngOnInit() {
  }

}
