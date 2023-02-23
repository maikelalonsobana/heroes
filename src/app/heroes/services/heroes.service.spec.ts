import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';

import { Heroe } from '../types/heroe';
import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let heroesHttpSpy: jasmine.SpyObj<HeroesService>;
  let expectedHeroes = {
    totalItems: 5,
    data: [
      {
        id: 2,
        name: 'Superman',
        age: 35,
        nacionality: 'Cryptonian',
        power: 'Super strength',
      },
      {
        id: 3,
        name: 'Spiderman',
        age: 25,
        nacionality: 'American',
        power: 'Spider sense',
      },
      {
        id: 5,
        name: 'Green Lantern',
        age: 30,
        nacionality: 'American',
        power: 'Green energy',
      },
      {
        id: 6,
        name: 'Wolverine',
        age: 40,
        nacionality: 'Canadian',
        power: 'Regeneration',
      },
      {
        id: 7,
        name: 'Capitán América',
        age: 22,
        nacionality: 'American',
        power: 'Lucha y fuerza',
      },
    ],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: HeroesService, useValue: heroesHttpSpy }],
    });

    heroesHttpSpy = jasmine.createSpyObj<HeroesService>('HeroesService', [
      'getHeroes',
      'getHeroe',
      'addHeroe',
      'updateHeroe',
      'deleteHeroe',
    ]);
  });

  it('Check if getHeroes returns a list of heroes.', (done: DoneFn) => {
    heroesHttpSpy.getHeroes.and.returnValue(of(expectedHeroes));

    heroesHttpSpy.getHeroes({ page: 1, limit: 5, totalItems: 7 }).subscribe({
      next: (heroes) => {
        expect(heroes.data.length).toBeGreaterThan(1);
        done();
      },
      error: (fail) => fail,
    });
  });

  it('Check if getHeroe returns one hero.', (done: DoneFn) => {
    const expectedHeroe: Observable<Heroe> = of({
      id: 3,
      name: 'Spiderman',
      age: 25,
      nacionality: 'American',
      power: 'Spider sense',
    });

    heroesHttpSpy.getHeroe.and.returnValue(expectedHeroe);
    heroesHttpSpy.getHeroe(3).subscribe({
      next: (hero) => {
        expect(hero).toEqual({
          id: 3,
          name: 'Spiderman',
          age: 25,
          nacionality: 'American',
          power: 'Spider sense',
        });
        done();
      },
      error: (fail) => fail,
    });
  });

  it('Check if addHeroe insert a new hero', (done: DoneFn) => {
    const newHero: Observable<Heroe> = of({
      id: 11,
      name: 'Thor',
      age: 29,
      nacionality: 'Asgardian',
      power: 'Big hammer',
    });

    heroesHttpSpy.addHeroe.and.returnValue(newHero);

    heroesHttpSpy
      .addHeroe({
        id: 11,
        name: 'Thor',
        age: 29,
        nacionality: 'Asgardian',
        power: 'Big hammer',
      })
      .subscribe({
        next: (hero) => {
          expect(hero).toBeTruthy();
          done();
        },
        error: (fail) => fail,
      });
  });

  it('Check if updateHeroe update a hero.)', (done: DoneFn) => {
    const updateHeroe: Observable<Heroe> = of({
      id: 11,
      name: 'Thor',
      age: 29,
      nacionality: 'Asgardian',
      power: 'Big hammer',
    });
    heroesHttpSpy.updateHeroe.and.returnValue(updateHeroe);
    heroesHttpSpy
      .updateHeroe(11, {
        id: 11,
        name: 'Robin',
        age: 16,
        nacionality: 'English',
        power: 'Batman assistant',
      })
      .subscribe({
        next: (hero) => {
          expect(hero).toBeTruthy();
          done();
        },
        error: (fail) => fail,
      });
  });

   it('Check if deleteHeroe removes one hero.)', (done: DoneFn) => {
    heroesHttpSpy.deleteHeroe.and.returnValue(of({statusCode: 200}));
    heroesHttpSpy
      .deleteHeroe(9)
      .subscribe({
        next: (result) => {
          expect(result).toEqual({statusCode: 200});
          done();
        },
        error: (fail) => fail,
      });
   });

});
