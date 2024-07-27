import { Routes } from '@angular/router';

import { adminGuard } from '../../../guards/roles/admin/admin.guard';

// componentes
import { PrincipalComponent } from '../principal/principal.component';
import { CrearPrincipalComponent } from '../principal/components/crear-principal/crear-principal.component';
import { EditarPrincipalComponent } from '../principal/components/editar-principal/editar-principal.component';
import { VerPrincipalComponent } from '../principal/components/ver-principal/ver-principal.component';

export const UsuariosAdministradoresRoutes: Routes = [
  {
    path: '',
    title: 'Administradores',
    component: PrincipalComponent,
  },
  {
    path: 'crear-administrador',
    title: 'Crear administrador',
    component: CrearPrincipalComponent,
  },
  {
    path: 'ver-administrador',
    title: 'Crear administrador',
    component: VerPrincipalComponent,
  },
  {
    path: 'editar-administrador',
    title: 'Crear administrador',
    component: EditarPrincipalComponent,
  },
  {
    path: 'asignar-administrador',
    title: 'Crear administrador',
    component: EditarPrincipalComponent,
  },
];
