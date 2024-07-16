import { Routes } from '@angular/router';

import { adminGuard } from '../../guards/roles/admin/admin.guard'

//componentes
import { PerfilComponent } from '../../pages/principal/admin/perfil/perfil.component'
import { ConfiguracionComponent } from '../../pages/principal/admin/configuracion/configuracion.component'
import { MenuComponent } from '../../pages/principal/admin/menu/menu.component'

import { IndexComponent } from '../../pages/usuarios/admin/index/index.component';
import { PrincipalComponent } from '../../pages/usuarios/admin/principal/principal.component';
import { FinalesComponent } from '../../pages/usuarios/admin/finales/finales.component';

export const AdminLayoutRoutes: Routes = [

  /*
  * Template
  */
  {
    path: '',
    redirectTo: 'perfil',
    pathMatch: 'full',
  },
  {
    path: 'perfil',
    title: 'Perfil',
    component: PerfilComponent,
    canActivate: [
      adminGuard
    ]
  },
  {
    path: 'configuracion',
    title: 'Configuracion',
    component: ConfiguracionComponent,
    canActivate: [
      adminGuard
    ]
  },


  /*
  * Modulos
  */
  {
    path: 'menu',
    title: 'Menu',
    component: MenuComponent,
    canActivate: [
      adminGuard
    ],
  },

  /*
  * Usuarios
  */
  {
    path: 'menu/index-usuarios',
    title: 'Usuarios',
    component: IndexComponent,
    canActivate: [
      adminGuard
    ],
  },
  {
    path: 'menu/index-usuarios/principal',
    title: 'Administradores',
    component: PrincipalComponent,
    canActivate: [
      adminGuard
    ],
  },
  {
    path: 'menu/index-usuarios/finales',
    title: 'Usuarios',
    component: FinalesComponent,
    canActivate: [
      adminGuard
    ],
  },
];
