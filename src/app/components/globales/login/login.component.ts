import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import Swal from 'sweetalert2'
import { LoginServiceService } from './service/login-service.service'

@Component({
  selector: 'app-globales-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService :LoginServiceService
  ) { }

  isLoginAdmin = false
  urlPeticion = ''

  model = {
    email: '',
    password: ''
  }

  ngOnInit() {
    this.urlPeticion = this.router.url
    this.isLoginAdmin = this.urlPeticion.split('/').find(e => e == 'admin') ? true : false

    if(this.isLoginAdmin){
      this.model.email = 'admin1@correo.com'
      this.model.password = 'Qwerty9601'
    }else{
      this.model.email = 'user1@gmail.com'
      this.model.password = 'Qwerty9601'
    }
  }

  async ingresar(){
    let rol = this.urlPeticion.split('/').find(e => e == 'admin') ? 0 : 1
    let data = {
      'email': this.model.email,
      'pass': this.model.password,
      'rol': rol
    }

    await this.loginService.login(data).then(response=>{
      localStorage.setItem('token', response.data.access_token)
      if(rol == 0){
        this.router.navigate(['/admin']);
      }else{
        this.router.navigate(['/user']);
      }
    }).catch(err =>{
      Swal.fire({
        title: err.response.data.message,
        text: err.response.data.error,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    })
  }

}
