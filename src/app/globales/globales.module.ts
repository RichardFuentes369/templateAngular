import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { LoginComponent } from './login/login.component'
import { LoginServiceService } from './login/service/login-service.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginServiceService
  ]
})
export class GlobalesModule { }
