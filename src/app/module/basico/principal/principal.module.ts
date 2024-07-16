import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminMenuRoutes } from './../../../routes/admin/principal/menu/admin-menu.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminMenuRoutes),
  ]
})
export class PrincipalModule { }
