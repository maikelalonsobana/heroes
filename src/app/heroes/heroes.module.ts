
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeroesFormComponent } from './views/heroes-form/heroes-form.component';
import { HeroesListComponent } from './views/heroes-list/heroes-list.component';
import { HomeComponent } from './views/home/home.component';
//import { AppModule } from "../../app.module";


@NgModule({
    declarations: [HeroesListComponent, HeroesFormComponent, HomeComponent],
    imports: [
        HeroesRoutingModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule
    ]
})
export class HeroesModule {}
