import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ModulosService {

  constructor() { }

  async listaPermisos(){
    let complemento = `modulos`
    let urlCopleta = environment.apiUrl+complemento
    const data = axios.get(urlCopleta)
    return data
  }

  async buscarPermiso(padreId:number, nombrePermiso: string){
    let complemento = `modulos/buscar-permiso/${padreId}/${nombrePermiso}`
    let urlCopleta = environment.apiUrl+complemento

    return await axios.request({
      method: 'get',
      url: urlCopleta,
    })
  }

}
