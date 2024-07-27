import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { openCloseModal } from '../../../functions/System'
import { TranslateModule } from '@ngx-translate/core';

import { Router } from '@angular/router';
import { UserService } from '../../../services/globales/user/user.service';
import { PermisosService } from '../../../services/globales/permisos/permisos.service';
import { TablecrudComponent } from '../../../components/globales/tablecrud/tablecrud.component';

@Component({
  selector: 'app-menu-usuarios-finales',
  standalone: true,
  imports: [
    TranslateModule,
    TablecrudComponent
  ],
  templateUrl: './finales.component.html',
  styleUrl: './finales.component.scss'
})
export class FinalesComponent implements OnInit{

  constructor(
    private router: Router,
    private userServide :UserService,
    private permisosService :PermisosService
  ) { }

  permisos: any[] = []

  async ngOnInit() {
    const userId = await this.userServide.getUser('authadmin')
    const response = await this.permisosService.permisos(userId.data.id,1,3,3)
    for (const iterator of response.data) {
      this.permisos.push(iterator)
    }
  }

  // inicio datos que envio al componente
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
  permisosAcciones = this.permisos
  // fin datos que envio al componente

  abrirCerrar (){
    openCloseModal('exampleModal')
  }
  verData (_id: string){
    console.log("verData "+_id)
    openCloseModal('exampleModal')
  }
  crearData (_id: string){
    openCloseModal('exampleModal')
    console.log("crearData "+_id)
  }
  editarData (_id: string){
    openCloseModal('exampleModal')
    console.log("editarData "+_id)
  }
  eliminarData (_id: string){
    openCloseModal('exampleModal')
    console.log("eliminarData "+_id)
  }
  activarData (_id: string){
    openCloseModal('exampleModal')
    console.log("activarData "+_id)
  }
  asignarData (_id: string){
    openCloseModal('exampleModal')
    console.log("asignarData "+_id)
  }

}
