import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from './../../environments/environment';
import { LoginRq } from '../types/login-rq';
import { User } from '../types/user';

/***
 * Servicio que gestiona la sesión del usuario
 ***/
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(data: LoginRq): Observable<User> {
    return this.http.post(`${environment.apiHost}/login`, data) as Observable<User>;
  }
}
