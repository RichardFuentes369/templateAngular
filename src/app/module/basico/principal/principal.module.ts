import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminMenuRoutes } from '../../usuarios/routes/admin.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminMenuRoutes),
  ]
})
export class PrincipalModule { }
