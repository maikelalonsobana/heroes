import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from '../types/user';

/***
 * Servicio que gestiona los cambios en el usuario y el loader
 */
@Injectable({
  providedIn: 'root'
})
export class MainStoreService {
  public user: User | undefined = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : undefined;
  public $user: Subject<User> = new Subject<User>();

  public showSpinner: boolean = false;
  public $showSpinner: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  public setUser(user: User) {
    this.user = user;
    this.$user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  public setShowSpinner(show: boolean) {
    this.showSpinner = show;
    this.$showSpinner.next(show);
  }

  public logout() {
    this.user = undefined;
    this.$user.next(undefined as any);
    localStorage.removeItem('user');
  }

}
