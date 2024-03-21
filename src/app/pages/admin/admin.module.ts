import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    ConfiguracionComponent,
    IndexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class AdminPagesModule { }
