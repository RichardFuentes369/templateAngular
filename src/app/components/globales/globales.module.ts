import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import {
  LangChangeEvent,
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';

import { DataTablesModule } from "angular-datatables";

import { LoginComponent } from './login/login.component'
import { LoginServiceService } from './login/service/login-service.service';
import { IdiomaComponent } from './idioma/idioma.component';
import { IndexnotFoundComponent } from './notfound/index/index.component';
import { AdminnotFoundComponent } from './notfound/admin/admin.component';
import { UsernotFoundComponent } from './notfound/user/user.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TablecrudComponent } from './tablecrud/tablecrud.component';
import { LoadingComponent } from './loading/loading.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/global/', '.json');
}
@NgModule({
  declarations: [
    LoginComponent,
    IdiomaComponent,
    IndexnotFoundComponent,
    AdminnotFoundComponent,
    UsernotFoundComponent,
    BreadcrumbComponent,
    TablecrudComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    DataTablesModule,
  ],
  exports: [
    IdiomaComponent,
    LoginComponent,
    BreadcrumbComponent,
    TablecrudComponent,
    LoadingComponent
  ],
  providers: [
    LoginServiceService
  ]
})
export class GlobalesModule {

  constructor(public translationService: TranslateService) {
    const currentLang = this.translationService.currentLang;
    this.translationService.currentLang = '';
    this.translationService.store.onLangChange.subscribe(
      (lang: LangChangeEvent) => {
        // console.log(lang);
        this.translationService.use(lang.lang);
      }
    );
  }

}
