import { Routes } from '@angular/router';

import { adminGuard } from '../../../guards/roles/admin/admin.guard';

// componentes
import { IndexComponent } from '../index/index.component';

export const UsuariosRoutes: Routes = [
  {
    path: '',
    title: 'Principal',
    component: IndexComponent,
  },
  {
    path: 'administradores',
    title: 'Submodulos',
    loadChildren: () => import('./administradores.routing').then(x=>x.UsuariosAdministradoresRoutes)
  },
  {
    path: 'finales',
    title: 'Submodulos',
    loadChildren: () => import('./finales.routing').then(x=>x.UsuariosFinalesRoutes)
  },
];
