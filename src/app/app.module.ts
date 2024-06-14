import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

/*
* Http Client
*/
import { HttpClient, HttpClientModule } from '@angular/common/http';
/*
* Traductor de idiomas
*/
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
/*
* Formularios
*/
import { FormsModule } from '@angular/forms';
/*
* Rutas
*/
import { AppRoutingModule } from './app-routing.module';
/*
* Templates
*/
import { IndexComponent } from './layout/index/index.component';
import { AdminComponent } from './layout/admin/admin.component';
import { UserComponent } from './layout/user/user.component';

import { AppComponent } from './app.component';

import { GlobalesModule } from './globales/globales.module';
import { IndexPagesModule } from './pages/index/index.module';
import { NotfoundComponent } from './pages/notfound/admin/notfound/notfound.component';
import { ConfiguracionComponent } from './pages/principal/admin/configuracion/configuracion.component';
import { PerfilComponent } from './pages/principal/admin/perfil/perfil.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
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
