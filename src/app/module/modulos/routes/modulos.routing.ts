import { Routes } from '@angular/router';

import { adminGuard } from '@guard/roles/admin/admin.guard';

// componentes
import { ModulosComponent as ModulosIndex } from '../modulos/modulos.component';
import { CrearModuloComponent } from '../modulos/components/crear-modulo/crear-modulo.component';
import { EditarModuloComponent } from '../modulos/components/editar-modulo/editar-modulo.component';
import { VerModuloComponent } from '../modulos/components/ver-modulo/ver-modulo.component';


export const ModulosRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Index' },
    canActivate: [
      adminGuard
    ],
    component: ModulosIndex,
  },
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
  {
    path: 'index-submodulos',
    title: 'Submodulos',
    data: { breadcrumb: 'Submodulos' },
    loadChildren: () => import('./submodulos.routing').then(x=>x.SubModulosRoutes)
  },
];
