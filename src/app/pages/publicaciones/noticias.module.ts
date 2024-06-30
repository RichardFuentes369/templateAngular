import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { SeccionesComponent } from './index/secciones/secciones.component';
import { TagsComponent } from './index/tags/tags.component';

@NgModule({
  declarations: [
    SeccionesComponent,
    TagsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class PublicacionesModule { }
