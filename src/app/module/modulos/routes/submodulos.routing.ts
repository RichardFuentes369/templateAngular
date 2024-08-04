import { Routes } from '@angular/router';

import { adminGuard } from '../../../guards/roles/admin/admin.guard';

// componentes
import { SubmodulosComponent as SubmoduloIndex } from '../submodulos/submodulos.component';

export const SubModulosRoutes: Routes = [
  {
    path: ':idModulo',
    data: { breadcrumb: 'Index' },
    canActivate: [
      adminGuard
    ],
    component: SubmoduloIndex,
  },
  {
    path: ':idModulo/index-permisos',
    title: 'Permisos',
    data: { breadcrumb: 'Permisos' },
    loadChildren: () => import('./permisos.routing').then(x=>x.PermisosRoutes)
  },
];
