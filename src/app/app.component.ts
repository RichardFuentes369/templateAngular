import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'template01';

  constructor(
    private translate: TranslateService,
    private _cookies: CookieService
  ){
    this._cookies.set('languague', 'es')
    this.translate.use('es');
  }

}
