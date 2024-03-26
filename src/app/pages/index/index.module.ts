import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GlobalesModule } from '../../globales/globales.module';

import { InicioComponent } from './inicio/inicio.component'
import { IngresoComponent } from './ingreso/ingreso.component'
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

@NgModule({
  exports: [
    InicioComponent,
    IngresoComponent,
    PublicacionesComponent,
  ],
  declarations: [
    InicioComponent,
    IngresoComponent,
    PublicacionesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GlobalesModule
  ],
})
export class IndexPagesModule { }
