import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-globales-idioma',
  templateUrl: './idioma.component.html',
  styleUrl: './idioma.component.scss'
})
export class IdiomaComponent {

  languague:string = 'es'

  @Output()
  cambioIdiomaEmitt = new EventEmitter<string>()

  cambiarIdioma(){
    this.cambioIdiomaEmitt.emit(this.languague)
  }

}
