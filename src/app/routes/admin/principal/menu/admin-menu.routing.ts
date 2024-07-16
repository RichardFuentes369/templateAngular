import { Routes } from '@angular/router';

import { adminGuard } from '../../../../guards/roles/admin/admin.guard';

// componentes
import { IndexComponent } from '../../../../module/usuarios/admin/index/index.component';
import { PrincipalComponent } from '../../../../module/usuarios/admin/principal/principal.component';
import { FinalesComponent } from '../../../../module/usuarios/admin/finales/finales.component';

export const AdminMenuRoutes: Routes = [
  {
    path: 'index-usuarios',
    title: 'Usuarios',
    component: IndexComponent,
    canActivate: [
      adminGuard
    ],
  },
  {
    path: 'index-usuarios/principal',
    title: 'Administradores',
    component: PrincipalComponent,
    canActivate: [
      adminGuard
    ],
  },
  {
    path: 'index-usuarios/finales',
    title: 'Usuarios',
    component: FinalesComponent,
    canActivate: [
      adminGuard
    ],
  },

];
