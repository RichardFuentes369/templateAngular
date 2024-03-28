import { Routes } from '@angular/router';

import { InicioComponent } from '../../pages/index/inicio/inicio.component'
import { PublicacionesComponent } from '../../pages/index/publicaciones/publicaciones.component'
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
  },
  {
    path: 'publicaciones',
    component: PublicacionesComponent,
  },
  {
    path: 'ingreso/user',
    component: IngresoComponent,
  },
  {
    path: 'ingreso/admin',
    component: IngresoComponent,
  },
];
