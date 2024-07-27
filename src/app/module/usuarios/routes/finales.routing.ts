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
    title: 'Usuarios',
    component: FinalesComponent,
  },
  {
    path: 'crear-usuario',
    title: 'Crear usuario',
    component: CrearFinalesComponent,
  },
  {
    path: 'crear-usuario',
    title: 'Crear usuario',
    component: EditarFinalesComponent,
  },
  {
    path: 'ver-usuario',
    title: 'Crear usuario',
    component: VerFinalesComponent,
  },
];
