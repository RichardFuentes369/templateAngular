import { Routes } from '@angular/router';

import { adminGuard } from '../../../guards/roles/admin/admin.guard';

// componentes
import { SubmodulosComponent as SubmoduloIndex } from '../submodulos/submodulos.component';

export const SubModulosRoutes: Routes = [
  {
    path: '',
    canActivate: [
      adminGuard
    ],
    component: SubmoduloIndex,
  },
  {
    path: 'index-permisos',
    title: 'Permisos',
    loadChildren: () => import('./permisos.routing').then(x=>x.PermisosRoutes)
  },
];
