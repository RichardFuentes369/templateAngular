import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  async validarToken(){
    let complemento = 'authadmin'
    let urlCopleta = environment.apiUrl+complemento+'/profile'
    let token = localStorage.getItem('token')

    return await axios.request({
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

}
