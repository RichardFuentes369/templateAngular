import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './admin/index/index.component';
import { PrincipalComponent } from './admin/principal/principal.component';
import { FinalesComponent } from './admin/finales/finales.component';



@NgModule({
  declarations: [
    IndexComponent,
    PrincipalComponent,
    FinalesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
