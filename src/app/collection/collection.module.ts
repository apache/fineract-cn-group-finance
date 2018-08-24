import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CollectionComponent} from './collection.component';
import {CollectionRoutes} from './collection.routing';
import {UserResolver} from './user.resolver';
import {FimsSharedModule} from '../common/common.module';
import {Store} from '@ngrx/store';

import {EffectsModule} from '@ngrx/effects';

import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {CovalentSearchModule, CovalentStepsModule} from '@covalent/core';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild(CollectionRoutes),
    FimsSharedModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CovalentSearchModule,
    CovalentStepsModule,

  ],
  declarations: [
    CollectionComponent,
  
  ],
  providers: [
    UserResolver,
   
  ]
})
    export class CollectionModule {}