import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  selected = 'English';

 hide= true;

  constructor(private _router: Router){}

  onLogin(): void{
    this._router.navigate(['/navbar']);
  }

  ngOnInit() {
  }

}
