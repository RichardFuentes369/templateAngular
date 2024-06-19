import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-globales-idioma',
  templateUrl: './idioma.component.html',
  styleUrl: './idioma.component.scss'
})
export class IdiomaComponent implements OnInit{

  languague = this._cookies.get('languague')

  constructor(
    private translate: TranslateService,
    private _cookies: CookieService
  ){
  }

  ngOnInit() {
    console.log(this._cookies.get('languague'))
  }

  @Output()
  cambioIdiomaEmitt = new EventEmitter<string>()

  cambiarIdioma(){
    this._cookies.set('languague', this.languague)
    this.cambioIdiomaEmitt.emit(this.languague)
  }

}
