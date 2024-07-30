import { Routes } from '@angular/router';

import { adminGuard } from '../../../guards/roles/admin/admin.guard';

// componentes
import { ModulosComponent } from '../modulos/modulos.component';
import { CrearModuloComponent } from '../modulos/components/crear-modulo/crear-modulo.component';
import { EditarModuloComponent } from '../modulos/components/editar-modulo/editar-modulo.component';
import { VerModuloComponent } from '../modulos/components/ver-modulo/ver-modulo.component';

export const SubModulosRoutes: Routes = [
  {
    path: 'crear-modulo',
    title: 'Crear nuevo modulo',
    component: CrearModuloComponent,
  },
  {
    path: 'ver-modulo',
    title: 'Ver modulo',
    component: EditarModuloComponent,
  },
  {
    path: 'editar-modulo',
    title: 'Editar modulo',
    component: VerModuloComponent,
  },
];
