import { Routes } from '@angular/router';

import { userGuard } from '@guard/roles/user/user.guard';

//componentes
import { PerfilComponent } from '@module/basic/principal/user/perfil/perfil.component'
import { ConfiguracionComponent } from '@module/basic/principal/user/configuracion/configuracion.component'

export const UserLayoutRoutes: Routes = [
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
      userGuard
    ]
  },
  {
    path: 'configuracion',
    title: 'Configuracion',
    component: ConfiguracionComponent,
    canActivate: [
      userGuard
    ]
  },
];
