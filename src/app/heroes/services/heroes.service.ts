import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../../environments/environment';
import { PaginatedHeroes } from '../types/paginated-heroes';
import { Heroe } from '../types/heroe';
import { Query } from '../types/query';


/***
 * Servicio que gestiona las peticiones al servidor de mocks
 ***/
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  public getHeroes(queryArgs: Query): Observable<PaginatedHeroes> {
    const { limit, page, sort, order, filter } = queryArgs;
    const sendData = new Subject<PaginatedHeroes>();

    this.http
      .get(`${environment.apiHost}/heroes?_page=${page}&_limit=${limit}&_sort=${sort || 'id'}&_order=${order || 'asc'}&q=${filter}`, {
        observe: 'response',
      })
      .subscribe((response) => {
        const totalItems = Number(response.headers.get('X-Total-Count') || 0);
        const heroes = response.body as Heroe[];

        const res = {
          data: heroes,
          totalItems,
        };

        sendData.next(res);

        sendData.complete();
      });
    return sendData;
  }

  public deleteHeroe(id: number) {
    return this.http.delete(`${environment.apiHost}/heroes/${id}`);
  }

  public addHeroe(heroe: Heroe) {
    return this.http.post(`${environment.apiHost}/heroe`, heroe);
  }

  public getHeroe(id: number) {
    return this.http.get(`${environment.apiHost}/heroe/${id}`);
  }

  public updateHeroe(id: number, heroe: Heroe) {
    return this.http.put(`${environment.apiHost}/heroe/${id}`, heroe);
  }
}
