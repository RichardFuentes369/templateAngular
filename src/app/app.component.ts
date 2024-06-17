import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'template01';

  constructor(
    private translate: TranslateService,
  ){
    this.translate.setDefaultLang('es');
  }

}
