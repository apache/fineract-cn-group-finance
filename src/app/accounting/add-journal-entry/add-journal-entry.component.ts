import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-journal-entry',
  templateUrl: './add-journal-entry.component.html',
  styleUrls: ['./add-journal-entry.component.scss']
})
export class AddJournalEntryComponent implements OnInit {

  startDate = new Date(1990, 0, 1);
  show=false;

  myControl: FormControl = new FormControl();
  
  options = [
    {value: 'mor', viewValue: 'Morogoro branch'},
    {value: 'kat', viewValue: 'Katuba'},
    {value:'loan',viewValue:'Loan Officer'}
  ];

  currencies = [
    {value:'afgh',viewValue:'Afghanistan Afghani()'},
    {value:'alba',viewValue:'Albanian lek()'},
    {value:'alg',viewValue:'Algerian Dinar()'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
