import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PipesModule } from '../../../../pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalesModule } from '../../../../components/globales/globales.module'

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, PipesModule, HttpClientModule, TranslateModule, GlobalesModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  // inicio datos que envio al componente
  showbuttonActivar = true
  showbuttonVer = true
  showbuttonAsignar = true
  showbuttonCrear = true
  showbuttonEditar = true
  showbuttonEliminar = true
  showcampoFiltro = true
  endPoint = 'admin'
  columnas = [
    {
      title: 'ID',
      data: 'id',
    },
    {
      title: 'First name',
      data: 'email',
    },
    {
      title: 'First name',
      data: 'firstName',
    },
    {
      title: 'First name',
      data: 'lastName',
    }
  ]
  buttons = [
    {
      'label': 'Activar/Desactivar',
      'permiso': 'usuarios_administradores_activar_desactivar'
    },
    {
      'label': 'Ver',
      'permiso': 'usuarios_administradores_ver'
    },
    {
      'label': 'Crear',
      'permiso': 'usuarios_administradores_crear'
    },
    {
      'label': 'Editar',
      'permiso': 'usuarios_administradores_editar'
    },
    {
      'label': 'Eliminar',
      'permiso': 'usuarios_administradores_eliminar'
    },
    {
      'label': 'Asignar',
      'permiso': 'usuarios_administradores_asignar'
    },
  ]
  // fin datos que envio al componente

  constructor(){

  }

}
