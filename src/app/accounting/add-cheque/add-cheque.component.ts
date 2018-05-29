import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cheque',
  templateUrl: './add-cheque.component.html',
  styleUrls: ['./add-cheque.component.scss']
})
export class AddChequeComponent implements OnInit {

  templates = [
    {value: '', viewValue: ''},
   
  ];

  currencies = [
    {value: '', viewValue: ''},
   
  ];


  constructor() { }

  ngOnInit() {
  }

}
