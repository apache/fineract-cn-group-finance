import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes} from '@angular/router';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatStepperModule
 } from '@angular/material';
 

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountingComponent } from './accounting/accounting.component';
import { GeneralLedgerComponent } from './accounting/general-ledger/general-ledger.component';
import { AddJournalEntryComponent } from './accounting/add-journal-entry/add-journal-entry.component';

import { PayrollsComponent } from './accounting/payrolls/payrolls.component';
import { ChartOfAccountsComponent } from './accounting/chart-of-accounts/chart-of-accounts.component';
import { AddTransactionTypeComponent } from './accounting/add-transaction-type/add-transaction-type.component';
import { TrialBalanceComponent } from './accounting/trial-balance/trial-balance.component';
import { ChequeClearingComponent } from './accounting/cheque-clearing/cheque-clearing.component';
import { TransactionTypeComponent } from './accounting/transaction-type/transaction-type.component';
import { AddMemberComponent } from './customer/add-member/add-member.component';
import { ManageMembersComponent } from './customer/manage-members/manage-members.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { ManageEmployeeComponent } from './employee/manage-employee/manage-employee.component'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch:'full'  },
  
  {
    path: 'navbar', component: NavbarComponent, children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'accounting', component: AccountingComponent },
        { path: 'GL', component: GeneralLedgerComponent },
        { path: 'add_journal_entry', component: AddJournalEntryComponent },
        { path: 'payroll', component: PayrollsComponent },
        { path: 'chart_of_accounts', component: ChartOfAccountsComponent },
        { path: 'add_transaction_type', component: AddTransactionTypeComponent },
        { path: 'trial_balance', component: TrialBalanceComponent },
        { path: 'cheque_clearing', component: ChequeClearingComponent },
        { path: 'transaction_type', component: TransactionTypeComponent },
        { path: 'add_member', component: AddMemberComponent },
        { path: 'manage_members', component: ManageMembersComponent },
        { path: 'add_employee', component: AddEmployeeComponent },
        { path: 'manage_employees', component: ManageEmployeeComponent },
  ]
}
];


@NgModule({
  declarations: [
    AppComponent,LoginComponent, NavbarComponent, DashboardComponent,
     AccountingComponent, GeneralLedgerComponent, AddJournalEntryComponent, 
     PayrollsComponent, ChartOfAccountsComponent, AddTransactionTypeComponent, TrialBalanceComponent, ChequeClearingComponent, TransactionTypeComponent, AddMemberComponent, ManageMembersComponent, AddEmployeeComponent, ManageEmployeeComponent
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
