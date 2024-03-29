import { Routes } from '@angular/router';

import { userGuard } from '../../guards/roles/user/user.guard';

//componentes
import { ConfiguracionComponent } from '../../pages/configuracion/user/configuracion/configuracion.component'

export const UserLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'configuracion',
    pathMatch: 'full',
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent,
    canActivate: [
      userGuard
    ]
  },
];
