import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor() { }

  async listaPermisos(){
    let complemento = `modulos`
    let urlCopleta = environment.apiUrl+complemento
    const data = axios.get(urlCopleta)
    return data
  }

  async permisos(idUsuario: number){
    let complemento = `asignacion/mis-permisos/${idUsuario}`
    let urlCopleta = environment.apiUrl+complemento
    const data = axios.get(urlCopleta)
    return data
  }

  async getIdPermiso(id: number, permiso: string){
    let complemento = `permisos-modulos/mis-permisos/${permiso}/${id}`
    let urlCopleta = environment.apiUrl+complemento
    const data = axios.get(urlCopleta)
    return data
  }

}
