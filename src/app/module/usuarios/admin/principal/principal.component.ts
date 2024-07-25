import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { Router } from '@angular/router';
import { UserService } from '../../../../services/globales/user/user.service';
import { PermisosService } from '../../../../services/globales/permisos/permisos.service';
import { TablecrudComponent } from '../../../../components/globales/tablecrud/tablecrud.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    TranslateModule,
    TablecrudComponent
  ],
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

  verData (_id: string){
    console.log("verData "+_id)
  }
  crearData (_id: string){
    console.log("crearData "+_id)
  }
  editarData (_id: string){
    console.log("editarData "+_id)
  }
  eliminarData (_id: string){
    console.log("eliminarData "+_id)
  }
  activarData (_id: string){
    console.log("activarData "+_id)
  }
  asignarData (_id: string){
    console.log("asignarData "+_id)
  }

}
