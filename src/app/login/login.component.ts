import { Component,OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router } from '@angular/router'
import { Subscription, Observable } from 'rxjs';
import { TdLoadingService, LoadingType } from '@covalent/core';
import { Store } from '@ngrx/store';
import { ITdLoadingConfig } from '@covalent/core';
import { LOGIN } from '../store/security/security.actions';
import { MatSelectChange } from '@angular/material';
import * as fromRoot from '../store';
import { TranslateService } from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TRANSLATE_STORAGE_KEY} from '../common/i18n/translate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent implements OnInit {
  private loadingSubscription: Subscription;

  currentLanguage: string;

  languageOptions: any[] = [
    {id: 'en', label: 'Welcome to fims'},
    {id: 'es', label: 'Bienvenido a fims'}
  ];
  
 hide= true;
 form: FormGroup;

  error$: Observable<string>;

  constructor(private _loadingService: TdLoadingService, private translate: TranslateService, private formBuilder: FormBuilder,
              private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.currentLanguage = this.translate.currentLang || this.translate.getDefaultLang();

    const options: ITdLoadingConfig = {
      name: 'login',
      type: LoadingType.Circular,
    };

    this._loadingService.create(options);

    this.form = this.formBuilder.group({
      tenant: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.error$ = this.store.select(fromRoot.getAuthenticationError)
      .filter(error => !!error)
      .do(() => this.form.get('password').setValue(''))
      .map(error => 'Sorry, that login did not work.');

    this.loadingSubscription = this.store.select(fromRoot.getAuthenticationLoading).subscribe(loading => {
      if (loading) {
        this._loadingService.register('login');
      } else {
        this._loadingService.resolve('login');
      }
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  login(): void {
    const tenant = this.form.get('tenant').value;
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;

    this.store.dispatch({
      type: LOGIN, payload: {
        username,
        password,
        tenant
      }
    });
  }

  selectLanguage(selectChange: MatSelectChange): void {
    sessionStorage.setItem(TRANSLATE_STORAGE_KEY, selectChange.value);
    location.reload();
  }
}
