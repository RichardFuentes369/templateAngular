import { Routes } from '@angular/router';

import { adminGuard } from '@guard/roles/admin/admin.guard';

// componentes
import { TagsComponent as IndexComponent } from '../admin/tags/tags.component';

export const TagsRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Index' },
    canActivate: [
      adminGuard
    ],
    component: IndexComponent,
  },
];
