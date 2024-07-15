import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

import axios from 'axios';
import { AuthService } from '../../../../../guards/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private authService: AuthService
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
    let complemento = 'permisos/mis-permisos/'
    let urlCopleta = environment.apiUrl+complemento+id
    const data = axios.get(urlCopleta)
    return data
  }

}
