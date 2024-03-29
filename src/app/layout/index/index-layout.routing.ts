import { Routes } from '@angular/router';

import { indexGuard } from '../../guards/roles/index/index.guard';

import { InicioComponent } from '../../pages/index/inicio/inicio.component'
import { PublicacionesComponent } from '../../pages/publicaciones/index/publicaciones/publicaciones.component'
import { IngresoComponent } from '../../pages/index/ingreso/ingreso.component'

export const IndexLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [
      indexGuard
    ]
  },
  {
    path: 'publicaciones',
    component: PublicacionesComponent,
    canActivate: [
      indexGuard
    ]
  },
  {
    path: 'ingreso/user',
    component: IngresoComponent,
    canActivate: [
      indexGuard
    ]
  },
  {
    path: 'ingreso/admin',
    component: IngresoComponent,
    canActivate: [
      indexGuard
    ]
  },
];
