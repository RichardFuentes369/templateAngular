import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './layout/index/index.component'
import { AdminComponent  } from './layout/admin/admin.component'
import { UserComponent } from './layout/user/user.component'


import { NotfoundComponent as IndexNotFound } from './pages/notfound/index/notfound/notfound.component'
import { adminGuard } from './guards/roles/admin/admin.guard'
import { NotfoundComponent as AdminNotFound } from './pages/notfound/admin/notfound/notfound.component'
import { userGuard } from './guards/roles/user/user.guard';
import { NotfoundComponent as UserNotFound } from './pages/notfound/user/notfound/notfound.component'

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
        loadChildren: () => import('./layout/index/index.module').then(x=>x.IndexModule)
      },
      {
        path: '**',
        component: IndexNotFound,
      },
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/admin/admin.module').then(x=>x.AdminModule)
      },
      {
        path: '**',
        component: AdminNotFound,
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
        loadChildren: () => import('./layout/user/user.module').then(x=>x.UserModule)
      },
      {
        path: '**',
        component: UserNotFound,
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

