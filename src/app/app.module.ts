import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*
* Layouts personalizados
*/
import { IndexComponent } from './layout/index/index.component';
import { AdminComponent } from './layout/admin/admin.component';
import { UserComponent } from './layout/user/user.component';

/*
* Modulos personalizados
* Globales
* Admin
* Index
* User
*/
import { GlobalesModule } from './globales/globales.module';
import { AdminLayoutModule } from './layout/admin/admin.module'
import { AdminPagesModule } from './pages/admin/admin.module';

import { IndexLayoutModule } from './layout/index/index.module'
import { IndexPagesModule } from './pages/index/index.module';

import { UserLayoutModule } from './layout/user/user.module'
import { UserPagesModule } from './pages/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    GlobalesModule,

    AdminLayoutModule,
    AdminPagesModule,

    IndexLayoutModule,
    IndexPagesModule,

    UserLayoutModule,
    UserPagesModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
