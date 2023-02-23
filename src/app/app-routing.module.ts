import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
   {
      path: '',
      component: LoginComponent,
      },
    {
      path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
      canActivateChild: [AuthGuard],
    },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
