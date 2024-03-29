import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*
* Layout
*/
import { IndexComponent } from './layout/index/index.component';
import { AdminComponent } from './layout/admin/admin.component';
import { UserComponent } from './layout/user/user.component';


import { GlobalesModule } from './globales/globales.module';
import { IndexPagesModule } from './pages/index/index.module';
import { NotfoundComponent } from './pages/notfound/admin/notfound/notfound.component';
import { ConfiguracionComponent } from './pages/principal/admin/configuracion/configuracion.component';
import { PerfilComponent } from './pages/principal/admin/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,

    IndexComponent,
    AdminComponent,
    UserComponent,
    NotfoundComponent,
    ConfiguracionComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GlobalesModule,

    // Pages
    IndexPagesModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
