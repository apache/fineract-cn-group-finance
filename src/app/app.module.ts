import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes} from '@angular/router';
import {HttpModule, Http} from '@angular/http';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateStore} from '@ngx-translate/core';
import {CovalentLoadingModule} from '@covalent/core';

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
 

import {LOCALE_ID, NgModule } from '@angular/core';


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
import { ManageEmployeeComponent } from './employee/manage-employee/manage-employee.component';
import { AddOfficeComponent } from './office/add-office/add-office.component';
import { ViewOfficesComponent } from './office/view-offices/view-offices.component';
import { AddLedgerComponent } from './accounting/add-ledger/add-ledger.component';
import { AccountPayableComponent } from './accounting/account-payable/account-payable.component';
import { AddChequeComponent } from './accounting/add-cheque/add-cheque.component';
import { AddPayrollComponent } from './accounting/add-payroll/add-payroll.component';

import {HttpClient} from './sevices/http/http.service';
import {IdentityService} from './sevices/identity/identity.service';
import {OfficeService} from './sevices/office/office.service';
import {CustomerService} from './sevices/customer/customer.service';
import {AuthenticationService} from './sevices/security/authn/authentication.service';
import {CatalogService} from './sevices/catalog/catalog.service';
import {AccountingService} from './sevices/accounting/accounting.service';
import {PortfolioService} from './sevices/portfolio/portfolio.service';
import {TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {PermittableGroupIdMapper} from './sevices/security/authz/permittable-group-id-mapper';
import {reducer} from './store';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {NotificationService} from './sevices/notification/notification.service';
import {OfficeSearchApiEffects} from './store/office/effects/service.effects';
import {EmployeeSearchApiEffects} from './store/employee/effects/service.effects';
import {RoleSearchApiEffects} from './store/role/effects/service.effects';
import {CustomerSearchApiEffects} from './store/customer/effects/service.effects';
import {AccountSearchApiEffects} from './store/account/effects/service.effects';
import {SecurityRouteEffects} from './store/security/effects/route.effects';
import {SecurityApiEffects} from './store/security/effects/service.effects';
import {SecurityNotificationEffects} from './store/security/effects/notification.effects';
import {LedgerSearchApiEffects} from './store/ledger/effects/service.effects';
//import {ExistsGuardService} from './common/guards/exists-guard';
import {ImageService} from './sevices/image/image.service';
import {DepositAccountService} from './sevices/depositAccount/deposit-account.service';
import {CurrencyService} from './sevices/currency/currency.service';
import {TellerService} from './sevices/teller/teller-service';
import {ReportingService} from './sevices/reporting/reporting.service';
import {getSelectedLanguage} from './common/i18n/translate';
import {ChequeService} from './sevices/cheque/cheque.service';
import {PayrollService} from './sevices/payroll/payroll.service';
import { CountryService } from './sevices/country/country.service';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


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
        { path: 'view_offices', component: ViewOfficesComponent },
        { path: 'add_office', component: AddOfficeComponent },
        { path: 'add_ledger', component: AddLedgerComponent },
        { path: 'account_payable', component: AccountPayableComponent },
        { path: 'add_cheque', component: AddChequeComponent },
        { path: 'add_payroll', component: AddPayrollComponent },
  ]
}
];


@NgModule({
  declarations: [
    AppComponent,LoginComponent, NavbarComponent, DashboardComponent,
     AccountingComponent, GeneralLedgerComponent, AddJournalEntryComponent, 
     PayrollsComponent, ChartOfAccountsComponent, AddTransactionTypeComponent, 
     TrialBalanceComponent, ChequeClearingComponent, TransactionTypeComponent,
      AddMemberComponent, ManageMembersComponent, AddEmployeeComponent, ManageEmployeeComponent, AddOfficeComponent,
       ViewOfficesComponent, AddLedgerComponent, AccountPayableComponent, AddChequeComponent, AddPayrollComponent,
       
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, BrowserAnimationsModule,
    CommonModule, TranslateModule,CovalentLoadingModule,
    FormsModule, ReactiveFormsModule,HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    StoreModule.provideStore(reducer),

    /**
     * Root effects
     */
    EffectsModule.run(SecurityApiEffects),
    EffectsModule.run(SecurityRouteEffects),
    EffectsModule.run(SecurityNotificationEffects),

    EffectsModule.run(OfficeSearchApiEffects),
    EffectsModule.run(EmployeeSearchApiEffects),
    EffectsModule.run(CustomerSearchApiEffects),
    EffectsModule.run(AccountSearchApiEffects),
    EffectsModule.run(RoleSearchApiEffects),
    EffectsModule.run(LedgerSearchApiEffects),

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
  providers: [ HttpClient,
    AuthenticationService,
    PermittableGroupIdMapper,
    IdentityService,
    OfficeService,
    CustomerService,
    CatalogService,
    AccountingService,
    PortfolioService,
    DepositAccountService,
    TellerService,
    ReportingService,
    ChequeService,
    PayrollService,
    CountryService,
    CurrencyService,
    NotificationService,
    TranslateService,
    
   // ExistsGuardService,
   // ...appRoutingProviders,
    ImageService,
    {
      provide: LOCALE_ID, useFactory: getSelectedLanguage, deps: [TranslateService],
    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
