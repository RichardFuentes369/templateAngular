import { Routes } from '@angular/router';

import { adminGuard } from '@guard/roles/admin/admin.guard';

// componentes
import { IndexComponent } from '../admin/index/index.component';

export const PublicacionesRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Index' },
    canActivate: [
      adminGuard
    ],
    component: IndexComponent,
  },
  {
    path: 'secciones',
    title: 'Secciones',
    data: { breadcrumb: 'Secciones' },
    loadChildren: () => import('./secciones.routing').then(x=>x.SeccionesRoutes)
  },
  {
    path: 'tags',
    title: 'Tags',
    data: { breadcrumb: 'Etiquetas' },
    loadChildren: () => import('./tags.routing').then(x=>x.TagsRoutes)
  },
  {
    path: 'publicaciones',
    title: 'Publicaciones',
    data: { breadcrumb: 'Mis Publicaciones' },
    loadChildren: () => import('./publicaciones.routing').then(x=>x.PublicacionesRoutes)
  },
];
