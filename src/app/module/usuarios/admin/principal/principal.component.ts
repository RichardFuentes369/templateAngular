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
  endPoint = 'user'
  // fin datos que envio al componente

}
