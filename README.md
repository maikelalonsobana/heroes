## Finalidad

Prueba técnica frontend de aplicación SPA que permite hacer un mantenimiento de superhéroes. Se utiliza Angular Material para el diseño de la aplicación, rutas protegidas con guardas, interceptor para mostrar un loader mientras se realizan peticiones a un servidor de mocks (json-server), directiva para personalizar el comportamiento de un input, etc... El proyecto está estructurado de manera ordenada. Se simula la obligación de iniciar sesión para que estén protegidas las rutas privadas. Se ha utilizado compodoc para la generación de la documentación de la aplicación.

El proyecto cuenta con vistas para mostrar un listado de héroes o eliminar alguno de ellos, un formulario para añadir/editar héroes, un servicio que gestiona las peticiones al servidor de mocks y una guarda que controla que el usuario esté logueado.


## Estructura del proyecto

La estrucura del proyecto es una muestra de cómo se puede estructurar un proyecto de angular de manera organizada.. El contenido de las carpetas sería el siguiente:

- src: Contiene el código fuente de la aplicación
  - core: Módulo central de la aplicación
    - guards          
    - interceptors
  - heroes: Contiene los servicios, interfaces y vistas del módulo privado que gestiona las acciones sobre el formulario y listado de héroes
  - services: Contiene los servicios heroes, login y main-store
  - shared: Contiene el módulo con información compartida en toda la aplicación
    - components         
    - directives   
  - types: Contiene las interfaces que se utilizan en la aplicación
  - views: Contiene la vistas principales de la aplicación
- documentation
  - Contiene los recursos usados en los archivos de documentación resultado de la ejecución de compodoc.
- json-server:
  - Contiene el servidor de mocks, formado por un archivo db.json que hace de base de datos, en el archivo routes podemos añadir pequeñas expresiones regulares para poder conseguir diferentes rutas, para cosas más complejas tenemos el index.js que es un servidor de node con `express`.


```bash

.
├── angular.json
├── build-docker.sh
├── conf
│   └── nginx.conf
├── Dockerfile
├── karma.conf.js
├── mockserver
│   ├── db.json
│   ├── index.js
│   └── routes.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── core
│   │   │   ├── customPaginator.ts
│   │   │   ├── guards
│   │   │   │   ├── auth.guard.spec.ts
│   │   │   │   └── auth.guard.ts
│   │   │   └── interceptors
│   │   │       ├── loader.interceptor.spec.ts
│   │   │       └── loader.interceptor.ts
│   │   ├── heroes
│   │   │   ├── heroes.module.ts
│   │   │   ├── heroes-routing.module.ts
│   │   │   ├── services
│   │   │   │   ├── heroes.service.spec.ts
│   │   │   │   └── heroes.service.ts
│   │   │   ├── types
│   │   │   │   ├── heroe.ts
│   │   │   │   ├── paginated-heroes.ts
│   │   │   │   └── query.ts
│   │   │   └── views
│   │   │       ├── heroes-form
│   │   │       │   ├── heroes-form.component.html
│   │   │       │   ├── heroes-form.component.scss
│   │   │       │   ├── heroes-form.component.spec.ts
│   │   │       │   └── heroes-form.component.ts
│   │   │       ├── heroes-list
│   │   │       │   ├── heroes-list.component.html
│   │   │       │   ├── heroes-list.component.scss
│   │   │       │   ├── heroes-list.component.spec.ts
│   │   │       │   └── heroes-list.component.ts
│   │   │       └── home
│   │   │           ├── home.component.html
│   │   │           ├── home.component.scss
│   │   │           ├── home.component.spec.ts
│   │   │           └── home.component.ts
│   │   ├── services
│   │   │   ├── login.service.spec.ts
│   │   │   ├── login.service.ts
│   │   │   ├── main-store.service.spec.ts
│   │   │   └── main-store.service.ts
│   │   ├── shared
│   │   │   ├── components
│   │   │   │   └── dialog-content
│   │   │   │       ├── dialog-content.component.html
│   │   │   │       ├── dialog-content.component.scss
│   │   │   │       ├── dialog-content.component.spec.ts
│   │   │   │       └── dialog-content.component.ts
│   │   │   ├── directives
│   │   │   │   ├── custom-uppercase.directive.spec.ts
│   │   │   │   └── custom-uppercase.directive.ts
│   │   │   └── shared.module.ts
│   │   ├── types
│   │   │   ├── error.ts
│   │   │   ├── login-rq.ts
│   │   │   └── user.ts
│   │   └── views
│   │       ├── login
│   │       │   ├── login.component.html
│   │       │   ├── login.component.scss
│   │       │   ├── login.component.spec.ts
│   │       │   └── login.component.ts
│   │       └── not-found
│   │           ├── not-found.component.html
│   │           ├── not-found.component.scss
│   │           ├── not-found.component.spec.ts
│   │           └── not-found.component.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   └── test.ts
├── tsconfig.app.json
├── tsconfig.doc.json
├── tsconfig.json
└── tsconfig.spec.json

```

## Stack tecnológico

### Angular    
```sh
Angular CLI: 14.2.10
Node: 16.17.0
Package Manager: npm 8.15.0 
OS: linux x64

Angular: 14.2.12
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version

@angular-devkit/architect       0.1402.10
@angular-devkit/build-angular   14.2.10
@angular-devkit/core            14.2.10
@angular-devkit/schematics      14.2.10
@angular/cdk                    13.0.0
@angular/cli                    14.2.10
@angular/material               13.0.0
@schematics/angular             14.2.10
rxjs                            7.5.7
typescript                      4.7.4
```

### Utilidades de desarrollo


#### JSON Server

[https://github.com/typicode/json-server](https://github.com/typicode/json-server)

Es una utilidad que permite levantar un complejo servidor de desarrollo para "mockear" nuestras respuestas, con la ventaja de ser sencillo de implementar

#### Compodoc

[https://compodoc.app/](https://compodoc.app/)
Es una herramienta que nos permite generar documentación de nuestra aplicación de angular, con la ventaja de que podemos generarla en formato markdown, html, json, etc.


## Cómo arrancar el proyecto

  ```sh
    git clone https://github.com/maikelalonsobana/world2meet.git
    cd world2meet
    npm install
    npm run start:dev
  ```
## Cómo generar y mostrar la documentación con compodoc

  ```sh
    npm run opendoc
  ```

## Cómo generar el docker

  ```sh
    npm run build
    # Cambiamos en conf/nginx.conf la línea 78 por la url del servidor de producción
    # proxy_pass http://localhost:8080/ se cambiaría por la url de producción
    docker build -t world2meet .
  ```
