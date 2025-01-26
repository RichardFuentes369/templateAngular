import { Routes } from '@angular/router';

import { adminGuard } from '@guard/roles/admin/admin.guard';

// componentes
import { PublicacionComponent as IndexComponent } from '../admin/publicacion/publicacion.component';

export const PublicacionesRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Index' },
    canActivate: [
      adminGuard
    ],
    component: IndexComponent,
  },
];
