import { Routes } from '@angular/router';

import { adminGuard } from '../../../guards/roles/admin/admin.guard';

// componentes
import { PrincipalComponent } from '../principal/principal.component';
import { CrearPrincipalComponent } from '../principal/components/crear-principal/crear-principal.component';
import { EditarPrincipalComponent } from '../principal/components/editar-principal/editar-principal.component';
import { VerPrincipalComponent } from '../principal/components/ver-principal/ver-principal.component';
import { AsignarPrincipalComponent } from '../principal/components/asignar-principal/asignar-principal.component';

export const UsuariosAdministradoresRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Lista' },
    title: 'Administradores',
    canActivate: [
      adminGuard
    ],
    component: PrincipalComponent,
  },
  {
    path: 'crear-administrador',
    data: { breadcrumb: 'Crear' },
    title: 'Crear usuario administrador',
    canActivate: [
      adminGuard
    ],
    component: CrearPrincipalComponent,
  },
  {
    path: 'ver-administrador',
    data: { breadcrumb: 'Ver' },
    title: 'Ver usuario administrador',
    canActivate: [
      adminGuard
    ],
    component: VerPrincipalComponent,
  },
  {
    path: 'editar-administrador',
    data: { breadcrumb: 'Editar' },
    title: 'Editar usuario administrador',
    canActivate: [
      adminGuard
    ],
    component: EditarPrincipalComponent,
  },
  {
    path: 'asignar-administrador',
    data: { breadcrumb: 'Asignar' },
    title: 'Asignar usuario administrador',
    canActivate: [
      adminGuard
    ],
    component: AsignarPrincipalComponent,
  },
];
