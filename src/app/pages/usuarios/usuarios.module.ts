import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermisosComponent } from './administrador/admin/permisos/permisos.component';
import { AdminComponent } from './administrador/admin/admin.component';



@NgModule({
  declarations: [
    PermisosComponent,
    AdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
