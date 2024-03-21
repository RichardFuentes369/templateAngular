import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutes } from './admin-layout.routing';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ],
  exports: [
  ]
})
export class AdminLayoutModule { }
