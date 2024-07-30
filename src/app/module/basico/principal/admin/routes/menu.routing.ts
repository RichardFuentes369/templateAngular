import { Routes } from '@angular/router';

import { adminGuard } from '../../../../../guards/roles/admin/admin.guard';

// componentes
import { IndexComponent as UsuariosIndex } from '../../../../usuarios/index/index.component';
import { IndexComponent as PublicacionesIndex } from '../../../../publicaciones/index/index.component';
import { ModulosComponent as ModulosIndex } from '../../../../modulos/modulos/modulos.component';

export const MenuRoutes: Routes = [
  // Modulo Usuarios
  {
    path: 'index-usuarios',
    title: 'Usuarios',
    component: UsuariosIndex,
    canActivate: [
      adminGuard
    ],
  },
  {
    path: 'index-usuarios/principal',
    canActivate: [
      adminGuard
    ],
    loadChildren: () => import('../../../../usuarios/routes/administradores.routing').then(x=>x.UsuariosAdministradoresRoutes)
  },
  {
    path: 'index-usuarios/finales',
    canActivate: [
      adminGuard
    ],
    loadChildren: () => import('../../../../usuarios/routes/finales.routing').then(x=>x.UsuariosFinalesRoutes)
  },

  // Modulo Publicaciones
  {
    path: 'index-publicaciones',
    title: 'Publicaciones',
    component: PublicacionesIndex,
    canActivate: [
      adminGuard
    ],
  },

  // Modulo Modulos
  {
    path: 'index-modulos',
    title: 'Modulos',
    component: ModulosIndex,
    canActivate: [
      adminGuard
    ],
  },
  {
    path: 'index-modulos',
    canActivate: [
      adminGuard
    ],
    loadChildren: () => import('../../../../modulos/routes/principal.routing').then(x=>x.ModulosRoutes)
  },
];
