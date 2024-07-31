import { Routes } from '@angular/router';
import { adminGuard } from '../../../guards/roles/admin/admin.guard';

// componentes
import { PermisosComponent } from '../permisos/permisos.component'

export const PermisosRoutes: Routes = [
  {
    path: '',
    canActivate: [
      adminGuard
    ],
    component: PermisosComponent,
  },
];
