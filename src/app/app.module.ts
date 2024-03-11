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
*/
import { GlobalesModule } from './globales/globales.module';
import { IndexPagesModule } from './pages/index/index.module';
import { AdminPagesModule } from './pages/admin/admin.module';
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
    IndexPagesModule,
    AdminPagesModule,
    UserPagesModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
