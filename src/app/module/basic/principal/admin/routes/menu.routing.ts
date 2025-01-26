import { Routes } from '@angular/router';

import { adminGuard } from '@guard/roles/admin/admin.guard';

// componentes
import { IndexComponent as PublicacionesIndex } from '@module/posts/index/index.component';

export const MenuRoutes: Routes = [
  // Modulo Usuarios
  {
    path: 'index-usuarios',
    title: 'Principal',
    data: { breadcrumb: 'Principal' },
    loadChildren: () => import('@module/users/routes/index.routing').then(x=>x.UsuariosRoutes)
  },

  // Modulo Modulos
  {
    path: 'index-modulos',
    title: 'Modulos',
    data: { breadcrumb: 'Modulos' },
    loadChildren: () => import('@module/modules/routes/modulos.routing').then(x=>x.ModulosRoutes)
  },

  // Modulo Publicaciones
  {
    path: 'index-publicaciones',
    title: 'Publicaciones',
    data: { breadcrumb: 'Publicaciones' },
    loadChildren: () => import('@module/posts/routes/index.routing').then(x=>x.PublicacionesRoutes)
  },
];
