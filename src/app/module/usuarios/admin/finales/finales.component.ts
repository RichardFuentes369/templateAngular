import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PipesModule } from '../../../../pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalesModule } from '../../../../components/globales/globales.module'

@Component({
  selector: 'app-menu-usuarios-finales',
  standalone: true,
  imports: [CommonModule, PipesModule, HttpClientModule, TranslateModule, GlobalesModule],
  templateUrl: './finales.component.html',
  styleUrl: './finales.component.scss'
})
export class FinalesComponent {

  // inicio datos que envio al componente
  showbuttonActivar = true
  showbuttonVer = true
  showbuttonAsignar = true
  showbuttonCrear = true
  showbuttonEditar = true
  showbuttonEliminar = true
  showcampoFiltro = true
  endPoint = 'user'
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
      'permiso': 'usuarios_finales_activar_desactivar'
    },
    {
      'label': 'Ver',
      'permiso': 'usuarios_finales_ver'
    },
    {
      'label': 'Crear',
      'permiso': 'usuarios_finales_crear'
    },
    {
      'label': 'Editar',
      'permiso': 'usuarios_finales_editar'
    },
    {
      'label': 'Eliminar',
      'permiso': 'usuarios_finales_eliminar'
    },
  ]
  // fin datos que envio al componente

  constructor(){

  }

}
