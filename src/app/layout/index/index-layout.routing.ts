import { Routes } from '@angular/router';

import { indexGuard } from '../../guards/roles/index/index.guard';

import { InicioComponent } from '../../module/basico/index/inicio/inicio.component'
import { PublicacionesComponent } from '../../module/publicaciones/publicaciones/publicaciones.component'
import { IngresoComponent } from '../../module/basico/index/ingreso/ingreso.component'

export const IndexLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    title: 'Inicio',
    component: InicioComponent,
    canActivate: [
      indexGuard
    ]
  },
  {
    path: 'publicaciones',
    title: 'Publicaciones',
    component: PublicacionesComponent,
    canActivate: [
      indexGuard
    ]
  },
  {
    path: 'ingreso/user',
    title: 'Ingreso',
    component: IngresoComponent,
    canActivate: [
      indexGuard
    ]
  },
  {
    path: 'ingreso/admin',
    title: 'Ingreso Administrador',
    component: IngresoComponent,
    canActivate: [
      indexGuard
    ]
  },
];
