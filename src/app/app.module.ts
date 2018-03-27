import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatFormFieldModule} from '@angular/material';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component'


@NgModule({
  declarations: [
    AppComponent,LoginComponent
  ],
  imports: [
    BrowserModule,MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
