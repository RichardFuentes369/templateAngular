import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './layout/index/index.component'
import { AdminComponent  } from './layout/admin/admin.component'
import { UserComponent } from './layout/user/user.component'

import { adminGuard } from './guards/roles/admin/admin.guard'
import { userGuard } from './guards/roles/user/user.guard';
import { IndexnotFoundComponent } from './components/globales/notfound/index/index.component'
import { AdminnotFoundComponent } from './components/globales/notfound/admin/admin.component'
import { UsernotFoundComponent } from './components/globales/notfound/user/user.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/index/index-layout.routing').then(x=>x.IndexLayoutRoutes)
      },
      {
        path: '**',
        component: IndexnotFoundComponent,
      },
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/admin/admin-layout.routing').then(x=>x.AdminLayoutRoutes)
      },
      {
        path: 'menu',
        loadChildren: () => import('../../src/app/module/usuarios/routes/admin.routing').then(x=>x.AdminMenuRoutes)
      },
      {
        path: '**',
        component: AdminnotFoundComponent,
        canActivate: [
          adminGuard
        ]
      },
    ]
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/user/user-layout.routing').then(x=>x.UserLayoutRoutes)
      },
      {
        path: '**',
        component: UsernotFoundComponent,
        canActivate: [
          userGuard
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

