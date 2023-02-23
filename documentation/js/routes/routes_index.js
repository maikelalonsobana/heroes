var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","component":"LoginComponent"},{"path":"heroes","loadChildren":"./heroes/heroes.module#HeroesModule","canActivateChild":["AuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/heroes/heroes-routing.module.ts","module":"HeroesRoutingModule","children":[{"path":"home","component":"HomeComponent"},{"path":"heroes-list","component":"HeroesListComponent"},{"path":"heroes-create","component":"HeroesFormComponent"},{"path":"heroes-edit/:id","component":"HeroesFormComponent"}],"kind":"module"}],"module":"HeroesModule"}]},{"path":"not-found","component":"NotFoundComponent"},{"path":"**","component":"NotFoundComponent"}],"kind":"module"}]}