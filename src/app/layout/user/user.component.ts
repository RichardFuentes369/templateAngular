import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import Swal from 'sweetalert2'
import { TokenService } from './service/token.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  constructor(
    private router: Router,
    private tokenService :TokenService
  ) {}

  async ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/ingreso']);
    }else{
      await this.tokenService.validarToken().catch(err =>{
        if(err.response.status == 401){
          let token = localStorage.getItem('token')
          this.tokenService.refreshToken(token).then(response => {
            localStorage.setItem('token', response.data)
          }).catch(err => {
            localStorage.removeItem('token')
            this.router.navigate(['/ingreso']);
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
    this.router.navigate(['/ingreso']);
  }

}
