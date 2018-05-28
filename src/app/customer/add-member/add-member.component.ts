import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

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
