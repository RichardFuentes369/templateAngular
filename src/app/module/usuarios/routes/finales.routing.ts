import { Routes } from '@angular/router';

import { adminGuard } from '../../../guards/roles/admin/admin.guard';

// componentes
import { FinalesComponent } from '../finales/finales.component';
import { CrearFinalesComponent } from '../finales/components/crear-finales/crear-finales.component';
import { EditarFinalesComponent } from '../finales/components/editar-finales/editar-finales.component';
import { VerFinalesComponent } from '../finales/components/ver-finales/ver-finales.component';

export const UsuariosFinalesRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Lista' },
    title: 'Usuarios',
    canActivate: [
      adminGuard
    ],
    component: FinalesComponent,
  },
  {
    path: 'crear-finales',
    data: { breadcrumb: 'Crear' },
    title: 'Crear usuario final',
    canActivate: [
      adminGuard
    ],
    component: CrearFinalesComponent,
  },
  {
    path: 'ver-finales',
    data: { breadcrumb: 'Ver' },
    title: 'Ver usuario final',
    canActivate: [
      adminGuard
    ],
    component: VerFinalesComponent,
  },
  {
    path: 'editar-finales',
    data: { breadcrumb: 'Editar' },
    title: 'Editar usuario final',
    canActivate: [
      adminGuard
    ],
    component: EditarFinalesComponent,
  },
];
