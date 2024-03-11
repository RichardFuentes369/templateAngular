import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IndexLayoutRoutes } from './index-layout.routing';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(IndexLayoutRoutes),
  ]
})
export class IndexLayoutModule { }
