import { Routes } from '@angular/router';

import { adminGuard } from '../../../guards/roles/admin/admin.guard';

// componentes
import { IndexComponent } from '../admin/index/index.component';
import { PrincipalComponent } from '../admin/principal/principal.component';
import { FinalesComponent } from '../admin/finales/finales.component';

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
