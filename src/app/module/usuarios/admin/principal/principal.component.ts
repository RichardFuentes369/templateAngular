import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { PipesModule } from '../../../../pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalesModule } from '../../../../components/globales/globales.module'

import { Router } from '@angular/router';
import { UserService } from '../../../../services/globales/user/user.service';
import { PermisosService } from '../../../../services/globales/permisos/permisos.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, PipesModule, HttpClientModule, TranslateModule, GlobalesModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent implements OnInit{

  constructor(
    private router: Router,
    private userServide :UserService,
    private permisosService :PermisosService
  ) { }

  permisos: any[] = []

  async ngOnInit() {
    const userId = await this.userServide.getUser('authadmin')
    const response = await this.permisosService.permisos(userId.data.id,1,3,2)
    for (const iterator of response.data) {
      this.permisos.push(iterator)
    }
  }

  // inicio datos que envio al componente
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
  permisosAcciones = this.permisos
  // fin datos que envio al componente

}
