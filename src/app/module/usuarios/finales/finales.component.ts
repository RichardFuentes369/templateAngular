import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { openCloseModal } from '../../../functions/System'
import { TranslateModule } from '@ngx-translate/core';

import { Router } from '@angular/router';
import { AuthService } from '../../../guards/service/auth.service';
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
    private userService :AuthService,
    private permisosService :PermisosService
  ) { }

  permisos: any[] = []

  async ngOnInit() {
    await this.userService.refreshToken('authadmin');
    const {data} = await this.userService.getUser('authadmin');
    const modulo = await this.permisosService.getIdPermiso(data.id,'usuarios')
    const submodulo = await this.permisosService.getIdPermiso(data.id,'finales')
    const response = await this.permisosService.permisos(data.id, modulo.data[0].moduloId, 3, submodulo.data[0].id);
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

  verData (_id: string){
    console.log("verData "+_id)
    this.router.navigate([`/admin/menu/index-usuarios/finales/ver-finales/`], { queryParams: { id: _id } });
  }
  crearData (_id: string){
    console.log("crearData "+_id)
    this.router.navigate(['/admin/menu/index-usuarios/finales/crear-finales/']);
  }
  editarData (_id: string){
    console.log("editarData "+_id)
    this.router.navigate(['/admin/menu/index-usuarios/finales/editar-finales/'], { queryParams: { id: _id } });
  }
  eliminarData (_id: string){
    console.log("eliminarData "+_id)
  }
  activarData (_id: string){
    console.log("activarData "+_id)
  }

}
