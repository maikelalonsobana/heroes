import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { MainStoreService } from '../../services/main-store.service';
import { LoginService } from '../../services/login.service';
import { LoginRq } from '../../types/login-rq';
import { User } from '../../types/user';
import { Error } from '../../types/error';

/***
 * Pantalla de inicio de sesión
 ***/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user: User | undefined = undefined;

  title = 'W2M';
  form: FormGroup;
  constructor(
    private loginService: LoginService,
    private mainStore: MainStoreService,
    private snackBar: MatSnackBar,
    private router: Router
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
  }

  public login() {
    const login: LoginRq = this.form.value;
    this.loginService.login(login).subscribe({
      next: (user) => {
        this.mainStore.setUser(user);
        this.router.navigate(['/heroes/home']);
        this.snackBar.open('Sesión iniciada correctamente', 'Cerrar', {
          duration: 3000,
        });
      },
      error: (response) => {
        const error: Error = response.error;
        if (error.code === 500) {
          this.snackBar.open('Credenciales inválidas', 'Cerrar', {
            duration: 3000,
          });
        } else {
          this.snackBar.open(
            'Ha ocurrido un error. Inténtalo más tarde',
            'Cerrar',
            {
              duration: 3000,
            }
          );
        }
      },
    });
  }
}
