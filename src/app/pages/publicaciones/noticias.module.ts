import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionesComponent } from './index/publicaciones/publicaciones.component';
import { SeccionesComponent } from './index/secciones/secciones.component';
import { TagsComponent } from './index/tags/tags.component';



@NgModule({
  declarations: [
    PublicacionesComponent,
    SeccionesComponent,
    TagsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicacionesModule { }
