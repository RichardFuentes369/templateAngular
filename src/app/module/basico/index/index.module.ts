import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InicioComponent } from './inicio/inicio.component'
import { IngresoComponent } from './ingreso/ingreso.component';

@NgModule({
  exports: [
    InicioComponent,
    IngresoComponent,
  ],
  declarations: [
    InicioComponent,
    IngresoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class IndexPagesModule { }
