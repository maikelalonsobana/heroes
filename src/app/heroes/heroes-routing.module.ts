import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesFormComponent } from './views/heroes-form/heroes-form.component';
import { HeroesListComponent } from './views/heroes-list/heroes-list.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'heroes-list', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'heroes-list', component: HeroesListComponent },
  { path: 'heroes-create', component: HeroesFormComponent },
  { path: 'heroes-edit/:id', component: HeroesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
