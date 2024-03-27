import { Routes } from '@angular/router';

import { AdminComponent } from '../../pages/usuarios/administrador/admin/admin.component'
import { FinalComponent } from '../../pages/usuarios/administrador/final/final.component'
import { PublicacionesComponent } from '../../pages/publicaciones/administrador/publicaciones/publicaciones.component'

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'administradores',
    component: AdminComponent,
  },
  {
    path: 'finales',
    component: FinalComponent,
  },
  {
    path: 'publicaciones',
    component: PublicacionesComponent,
  },
];
