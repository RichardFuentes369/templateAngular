import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// Paquete para peticiones http
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Paquete para traducción
import {
  TranslateModule,
  TranslateLoader,
} from '@ngx-translate/core';
import {
  ModuleTranslateLoader,
  IModuleTranslationOptions
} from '@larscom/ngx-translate-module-loader';

// Paquete para formularios
import { FormsModule } from '@angular/forms';

// Configuración de rutas
import { AppRoutingModule } from './app-routing.module';

// Plantillas
import { IndexComponent } from './layout/index/index.component';
import { AdminComponent } from './layout/admin/admin.component';
import { UserComponent } from './layout/user/user.component';

import { AppComponent } from './app.component';

// Modulos globales
import { GlobalesModule } from './components/globales/globales.module';

import { IndexPagesModule } from './module/basico/index/index.module';
import { ConfiguracionComponent } from './module/basico/principal/admin/configuracion/configuracion.component';
import { PerfilComponent } from './module/basico/principal/admin/perfil/perfil.component';

export function createTranslateLoader(http: HttpClient) {
  const baseTranslateUrl = './assets/i18n';
  const options: IModuleTranslationOptions = {
    modules: [
      { baseTranslateUrl },
      // inicio globales
      { baseTranslateUrl, moduleName: 'components/globales/breadcrumb', namespace: 'global-breadcrumb' },
      { baseTranslateUrl, moduleName: 'components/globales/idioma', namespace: 'global-idioma' },
      { baseTranslateUrl, moduleName: 'components/globales/login', namespace: 'global-login' },
      { baseTranslateUrl, moduleName: 'components/globales/notfound', namespace: 'global-notfound' },
      // breadcrumb
      // fin globales

      // inicio layout
      { baseTranslateUrl, moduleName: 'layout/admin', namespace: 'layout-admin' },
      { baseTranslateUrl, moduleName: 'layout/index', namespace: 'layout-index' },
      { baseTranslateUrl, moduleName: 'layout/user', namespace: 'layout-user' },
      // fin layout

      // inicio modulos
      { baseTranslateUrl, moduleName: 'module/basico', namespace: 'pages-basico'},
      { baseTranslateUrl, moduleName: 'module/publicaciones', namespace: 'pages-publicaciones'},
      { baseTranslateUrl, moduleName: 'module/usuarios', namespace: 'pages-usuarios'},
      // fin modulos
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
