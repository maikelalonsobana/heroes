import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

import { MainStoreService } from '../../services/main-store.service';

/***
 ** Contiene el loader-interceptor que nos permite mostrar un loader mientras se realizan peticiones al backend ficticio.
 ***/
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private mainStore: MainStoreService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    this.mainStore.setShowSpinner(true);

    return next.handle(req).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
            this.mainStore.setShowSpinner(false);
        }
      }),
      catchError((err: any) => {
        this.mainStore.setShowSpinner(false);
        return throwError(()=>err);
      })
    );
  }
}
