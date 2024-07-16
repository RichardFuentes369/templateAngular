import { Routes } from '@angular/router';

import { adminGuard } from '../../guards/roles/admin/admin.guard'

//componentes
import { PerfilComponent } from '../../pages/principal/admin/perfil/perfil.component'
import { ConfiguracionComponent } from '../../pages/principal/admin/configuracion/configuracion.component'
import { MenuComponent } from '../../pages/principal/admin/menu/menu.component'


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

  // Modulos

  // >> Menu
  {
    path: 'menu',
    title: 'Menu',
    component: MenuComponent,
    canActivate: [
      adminGuard
    ],
  },

];
