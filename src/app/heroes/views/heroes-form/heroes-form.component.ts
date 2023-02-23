import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

/***
 * Vista con el formulario para añadir o editar un héroe
 ***/
@Component({
  selector: 'app-heroes-form',
  templateUrl: './heroes-form.component.html',
  styleUrls: ['./heroes-form.component.scss'],
})
export class HeroesFormComponent implements OnInit {
  public form: FormGroup;
  id: number |undefined;

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(0)]),
      nacionality: new FormControl('', [Validators.required]),
      power: new FormControl('', [Validators.required]),
    });

    this.id = this.activatedRoute.snapshot.params['id'] || undefined;
    if (this.id) {
      this.heroesService.getHeroe(this.id).subscribe((heroe) => {
        this.form.patchValue(heroe);
      });
    }
  }

  ngOnInit(): void {}

  addHero() {
    this.form.controls['name'].setValue(this.form.controls['name'].value.toString().toLocaleUpperCase());
    this.heroesService.addHeroe(this.form.value).subscribe({
      next: () => {
        this.snackBar.open('Héroe añadido correctamente', 'Cerrar', { duration: 3000 });
        this.router.navigate(['heroes', 'heroes-list']);
      }
      });

  }

  updateHero(id: number) {
    this.form.controls['name'].setValue(this.form.controls['name'].value.toString().toLocaleUpperCase());
    this.heroesService.updateHeroe(id, this.form.value).subscribe({
      next: () => {
        this.snackBar.open('Héroe actualizado correctamente', 'Cerrar', { duration: 3000 });
        this.router.navigate(['heroes', 'heroes-list']);
      }
      });
  }

  back(){
    this.router.navigate(['heroes', 'heroes-list']);
  }
}
