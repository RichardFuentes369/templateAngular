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
    let headers = {
      'Authorization': `Bearer ${token}`
    }

    try {
      await axios.get(urlCopleta, {headers})
      return true
    } catch(error) {
      return false
    }

  }

  async refreshToken(rol:string, token: any){
    let urlCopleta = environment.apiUrl+rol+'/refresh'
    let post = {
      'token': token
    }

    try {
      let data = (await axios.post(urlCopleta, post)).data
      return data
    } catch(error) {
      localStorage.removeItem('token');
      return false
    }

  }

  async isAuth(rol: string){
    let token = localStorage.getItem('token')

    if(token == null){
      return false;
    }

    if(!token){
      return false
    }

    if(await this.validarToken(rol)){
      return true;
    }

    let refreshTokenResponse = await this.refreshToken(rol, token)

    if(refreshTokenResponse){
      localStorage.setItem('token', refreshTokenResponse);
      return true
    }else{
      localStorage.removeItem('token');
      return false
    }

  }

}
