import { Routes } from '@angular/router';

import { adminGuard } from '../../../guards/roles/admin/admin.guard';

// componentes
import { IndexComponent } from '../index/index.component';

export const UsuariosRoutes: Routes = [
  {
    path: '',
    title: 'Principal',
    data: { breadcrumb: 'Principal' },
    component: IndexComponent,
  },
  {
    path: 'administradores',
    title: 'Submodulos',
    data: { breadcrumb: 'Administradores' },
    loadChildren: () => import('./administradores.routing').then(x=>x.UsuariosAdministradoresRoutes)
  },
  {
    path: 'finales',
    title: 'Submodulos',
    data: { breadcrumb: 'Finales' },
    loadChildren: () => import('./finales.routing').then(x=>x.UsuariosFinalesRoutes)
  },
];
