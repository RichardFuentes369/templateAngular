import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { LoginComponent } from './login/login.component'
import { LoginServiceService } from './login/service/login-service.service';
import { TranslateModule } from '@ngx-translate/core';
import { IdiomaComponent } from './idioma/idioma.component';
import { IndexnotFoundComponent } from './notfound/index/index.component';
import { AdminnotFoundComponent } from './notfound/admin/admin.component';
import { UsernotFoundComponent } from './notfound/user/user.component';

@NgModule({
  declarations: [
    LoginComponent,
    IdiomaComponent,
    IndexnotFoundComponent,
    AdminnotFoundComponent,
    UsernotFoundComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    IdiomaComponent,
  ],
  providers: [
    LoginServiceService
  ]
})
export class GlobalesModule { }
