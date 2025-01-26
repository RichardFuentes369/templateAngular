import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ModulosService {

  constructor() { }

  async listaPermisos(id: any){
    let complemento = `modulos/getPermisosPorUsuario?userId=${id}`
    let urlCopleta = environment.apiUrl+complemento
    const data = axios.get(urlCopleta)
    return data
  }

  async buscarPermiso(padreId:number, nombrePermiso: string){
    let complemento = `modulos/getPermisoExistente?idModulo=${padreId}&nombre=${nombrePermiso}`
    let urlCopleta = environment.apiUrl+complemento

    return await axios.request({
      method: 'get',
      url: urlCopleta,
    })
  }

}
