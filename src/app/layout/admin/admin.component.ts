import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import Swal from 'sweetalert2'
import { TokenService } from './service/token.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router,
    private tokenService :TokenService
  ) {}

  minimizarSliderbar: boolean = false;

  async ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/ingreso/admin']);
    }else{
      await this.tokenService.validarToken().catch(err =>{
        if(err.response.status == 401){
          let token = localStorage.getItem('token')
          this.tokenService.refreshToken(token).then(response => {
            localStorage.setItem('token', response.data)
          }).catch(err => {
            localStorage.removeItem('token')
            this.router.navigate(['/ingreso/admin']);
            Swal.fire({
              title: err.response.data.message,
              text: err.response.data.error,
              icon: 'error',
              confirmButtonText: 'Cool'
            })
          })
        }
      })
    }
  }

  cerrarSession(){
    localStorage.removeItem('token')
    this.router.navigate(['/ingreso/admin']);
  }

  mostrarMenuLateral(){
    this.minimizarSliderbar = !this.minimizarSliderbar
  }

}
