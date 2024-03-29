import { Routes } from '@angular/router';

import { userGuard } from '../../guards/roles/user/user.guard';

//componentes
import { PerfilComponent } from '../../pages/principal/user/perfil/perfil.component'
import { ConfiguracionComponent } from '../../pages/principal/user/configuracion/configuracion.component'

export const UserLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'perfil',
    pathMatch: 'full',
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [
      userGuard
    ]
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent,
    canActivate: [
      userGuard
    ]
  },
];
