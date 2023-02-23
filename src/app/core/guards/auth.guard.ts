import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MainStoreService } from './../../services/main-store.service';

/***
 ** Contiene la guarda que controla que el usuario esté logueado
 ***/
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private mainStore: MainStoreService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {

    const hasAccess = this.mainStore.user !== undefined;

    if (!hasAccess) {
      this.router.navigate(['/']);
      this.snackBar.open('No tienes acceso a esta ruta', 'Cerrar', {
        duration: 3000,
      });
    }

    return hasAccess;
  }
}
