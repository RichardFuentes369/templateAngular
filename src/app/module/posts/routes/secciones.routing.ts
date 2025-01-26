import { Routes } from '@angular/router';

import { adminGuard } from '@guard/roles/admin/admin.guard';

// componentes
import { SeccionesComponent as IndexComponent } from '../admin/secciones/secciones.component';

export const SeccionesRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Index' },
    canActivate: [
      adminGuard
    ],
    component: IndexComponent,
  },
];
