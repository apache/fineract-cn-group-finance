import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selected = 'English';

 

  constructor(private _router: Router){}

  onLogin(): void{
    this._router.navigate(['/navbar']);
  }

  ngOnInit() {
  }

}
