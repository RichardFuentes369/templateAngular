import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
  ) { }


  async validarToken(rol: string){
    let urlCopleta = environment.apiUrl+rol+'/profile'
    let token = localStorage.getItem('token')

    return axios.request({
      method: 'get',
      url: urlCopleta,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

  }

  async refreshToken(token: any){
    let complemento = 'authadmin'
    let urlCopleta = environment.apiUrl+complemento+'/refresh'

    return await axios.request({
      method: 'post',
      url: urlCopleta,
      data: {
        "token": token,
      },
    })

  }

  async isAuth(rol: string){
    let token = localStorage.getItem('token')

    if(!token){
      return false
    }

    const response = await this.validarToken(rol)
    .then(response => {
      return true
    })
    .catch(err =>{
      if(err.response.status == 401){
        this.refreshToken(token).then(response => {
          localStorage.setItem('token', response.data)
          return true
        }).catch(err => {
          localStorage.removeItem('token')
          return false
        })
      }
    })

    return response;

  }

}
