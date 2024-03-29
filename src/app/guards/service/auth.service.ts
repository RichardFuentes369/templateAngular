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

  async refreshToken(rol:string, token: any){
    let urlCopleta = environment.apiUrl+rol+'/refresh'

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

    if(token == null){
      return false;
    }

    if(!token){
      return false
    }

    try {
      const response = await this.validarToken(rol);
      return true;
    } catch (err) {
        try {
          const refreshTokenResponse = await this.refreshToken(rol, token);
          localStorage.setItem('token', refreshTokenResponse.data);
          return true;
        } catch  {
          return false
        }
    }

  }

}
