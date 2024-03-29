import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  constructor(
    private router: Router,
  ) {}

  minimizarSliderbar: boolean = false;

  cerrarSession(){
    localStorage.removeItem('token')
    this.router.navigate(['/inicio/ingreso/admin']);
  }

  mostrarMenuLateral(){
    this.minimizarSliderbar = !this.minimizarSliderbar
  }

}
