import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { LoginComponent } from './login/login.component'
import { LoginServiceService } from './login/service/login-service.service';
import { TranslateModule } from '@ngx-translate/core';
import { IdiomaComponent } from './idioma/idioma.component';

@NgModule({
  declarations: [
    LoginComponent,
    IdiomaComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    IdiomaComponent
  ],
  providers: [
    LoginServiceService
  ]
})
export class GlobalesModule { }
