import { Injectable } from '@angular/core';
import { environment } from './../../../../../../../environments/environment';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
  ){}

  async getUser(rol: string){

    let urlCopleta = environment.apiUrl+rol+'/profile'
    const data = await axios.get(urlCopleta, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    return data
  }

  async menuPermisos(id: number){
    let complemento = `permisos/mis-permisos/${id}/por-modulo/0/por-tipo/1/permisos`
    let urlCopleta = environment.apiUrl+complemento
    const data = axios.get(urlCopleta)
    return data
  }

}
