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
    title: 'Administradores',
    component: PrincipalComponent,
  },
  {
    path: 'crear-administrador',
    title: 'Crear usuario administrador',
    component: CrearPrincipalComponent,
  },
  {
    path: 'ver-administrador',
    title: 'Ver usuario administrador',
    component: VerPrincipalComponent,
  },
  {
    path: 'editar-administrador',
    title: 'Editar usuario administrador',
    component: EditarPrincipalComponent,
  },
  {
    path: 'asignar-administrador',
    title: 'Asignar usuario administrador',
    component: AsignarPrincipalComponent,
  },
];
