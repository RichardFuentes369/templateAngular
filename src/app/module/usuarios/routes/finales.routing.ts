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
    data: { breadcrumb: 'index' },
    title: 'Usuarios',
    component: FinalesComponent,
  },
  {
    path: 'crear-finales',
    title: 'Crear usuario final',
    component: CrearFinalesComponent,
  },
  {
    path: 'ver-finales',
    title: 'Ver usuario final',
    component: VerFinalesComponent,
  },
  {
    path: 'editar-finales',
    title: 'Editar usuario final',
    component: EditarFinalesComponent,
  },
];
