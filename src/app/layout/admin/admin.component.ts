import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {}

  minimizarSliderbar: boolean = false;
  nombreModulo: string = '';

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    let nombreModulo = window.location.pathname.split('/')[2]
    this.nombreModulo = this.upperFirst(nombreModulo)
  }

  upperFirst(texto: string) {
    if (!texto) return texto; // Verifica si la cadena está vacía o es nula
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  idiomaCambiar(valor: string){
    this.translate.use(valor)
  }

  cerrarSession(){
    localStorage.removeItem('token')
    this.router.navigate(['/inicio/ingreso/admin']);
  }

  mostrarMenuLateral(){
    this.minimizarSliderbar = !this.minimizarSliderbar
  }

}
