import { Routes } from '@angular/router';

import { adminGuard } from '../../guards/roles/admin/admin.guard'

//componentes
import { AdminComponent } from '../../pages/usuarios/administrador/admin/admin.component'
import { FinalComponent } from '../../pages/usuarios/administrador/final/final.component'
import { PublicacionesComponent } from '../../pages/publicaciones/administrador/publicaciones/publicaciones.component'
import { PerfilComponent } from '../../pages/principal/admin/perfil/perfil.component'
import { ConfiguracionComponent } from '../../pages/principal/admin/configuracion/configuracion.component'

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'perfil',
    pathMatch: 'full',
  },
  {
    path: 'administradores',
    component: AdminComponent,
    canActivate: [
      adminGuard
    ]
  },
  {
    path: 'finales',
    component: FinalComponent,
    canActivate: [
      adminGuard
    ]
  },
  {
    path: 'publicaciones',
    component: PublicacionesComponent,
    canActivate: [
      adminGuard
    ]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [
      adminGuard
    ]
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent,
    canActivate: [
      adminGuard
    ]
  },
];
