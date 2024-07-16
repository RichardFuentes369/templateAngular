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
  ) {}

  getToken(){
    return localStorage.getItem('token')
  }

  async validarToken(rol: string){
    let urlCopleta = environment.apiUrl+rol+'/profile'
    let headers = {
      'Authorization': `Bearer ${this.getToken()}`
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

    if(this.getToken() == null){
      return false;
    }

    if(!this.getToken()){
      return false
    }

    if(await this.validarToken(rol)){
      return true;
    }

    let refreshTokenResponse = await this.refreshToken(rol, this.getToken())

    if(refreshTokenResponse){
      localStorage.setItem('token', refreshTokenResponse);
      return true
    }else{
      localStorage.removeItem('token');
      return false
    }

  }

}
