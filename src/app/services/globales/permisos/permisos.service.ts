import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor() { }

  async permisos(id: number, modulo: number, tipo: number, submodulo: number){
    let complemento = `permisos-modulos/mis-permisos/${id}/por-modulo/${modulo}/por-tipo/${tipo}/por-submodulo/${submodulo}/permisos`
    let urlCopleta = environment.apiUrl+complemento
    const data = axios.get(urlCopleta)
    return data
  }
}
