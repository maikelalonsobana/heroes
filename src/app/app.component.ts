import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

import { MainStoreService } from './services/main-store.service';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  form: FormGroup;
  public showSpinner: boolean = false;
  public user: User | undefined = undefined;
  constructor(
    private loginService: LoginService,
    private mainStore: MainStoreService,
    private snackBar: MatSnackBar,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.required]),
    });
  }

  ngOnInit(): void {
    this.user = this.mainStore.user;
    this.mainStore.$user.subscribe((user: User) => {
      this.user = user;
    });

    this.mainStore.$showSpinner.subscribe((showSpinner: boolean) => {
      this.showSpinner = showSpinner;
      this.changeDetectorRef.markForCheck();
    });
  }

  toggleSession() {
    this.mainStore.logout();
    this.router.navigate(['/']);
  }
}
