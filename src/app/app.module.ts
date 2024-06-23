import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

/*
* Http Client
*/
import { HttpClient, HttpClientModule } from '@angular/common/http';
/*
* Traslation
*/
import {
  TranslateModule,
  TranslateLoader,
  TranslateService
} from '@ngx-translate/core';
import {
  ModuleTranslateLoader,
  IModuleTranslationOptions
} from '@larscom/ngx-translate-module-loader';
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

import { GlobalesModule } from './components/globales/globales.module';
import { IndexPagesModule } from './pages/index/index.module';
import { ConfiguracionComponent } from './pages/principal/admin/configuracion/configuracion.component';
import { PerfilComponent } from './pages/principal/admin/perfil/perfil.component';
import { MenuComponent } from './pages/principal/admin/menu/menu.component';

export function createTranslateLoader(http: HttpClient) {
  const baseTranslateUrl = './assets/i18n';
  const options: IModuleTranslationOptions = {
    modules: [
      { baseTranslateUrl },
      { baseTranslateUrl, moduleName: 'components/globales/idioma', namespace: 'global-idioma' },
      { baseTranslateUrl, moduleName: 'components/globales/login', namespace: 'global-login' },
      { baseTranslateUrl, moduleName: 'components/globales/notfound', namespace: 'global-notfound' },
      { baseTranslateUrl, moduleName: 'layout/admin', namespace: 'layout-admin' },
      { baseTranslateUrl, moduleName: 'layout/index', namespace: 'layout-index' },
      { baseTranslateUrl, moduleName: 'layout/user', namespace: 'layout-user' },
    ]
  };
  return new ModuleTranslateLoader(http, options);
}

@NgModule({
  declarations: [
    AppComponent,

    IndexComponent,
    AdminComponent,
    UserComponent,
    ConfiguracionComponent,
    PerfilComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
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
