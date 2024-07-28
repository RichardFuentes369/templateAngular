import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FinalesService {

  constructor() { }

  async getDataUser(id: string){

    let complemento = 'user/obtener-usuario/'
    let urlCopleta = environment.apiUrl+complemento+id

    return await axios.request({
      method: 'get',
      url: urlCopleta,
    })
  }

}
