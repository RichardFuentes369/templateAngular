import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor() { }

  async getDataUser(id: string){

    let complemento = 'admin/obtener-administrador/'
    let urlCopleta = environment.apiUrl+complemento+id

    return await axios.request({
      method: 'get',
      url: urlCopleta,
    })
  }

}



