import { Routes } from '@angular/router';

import { IndexComponent } from '../../pages/admin/index/index.component'
import { UsuariosComponent } from '../../pages/admin/usuarios/usuarios.component'
import { ConfiguracionComponent } from '../../pages/admin/configuracion/configuracion.component'

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  {
    path: 'publicaciones',
    component: ConfiguracionComponent,
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent,
  },
];
