import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { openCloseModal } from '../../../functions/System'
import { TranslateModule } from '@ngx-translate/core';

import { Router } from '@angular/router';
import { AuthService } from '@guards/service/auth.service';
import { PermisosService } from '@services/globales/permisos/permisos.service';
import { TablecrudComponent } from '@components/globales/tablecrud/tablecrud.component';

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
    const userData = await this.userService.getUser('authadmin');
    const modulo = await this.permisosService.permisos(userData.data.id)
    const response1 = modulo.data.find((e: any) => e.permiso_nombre_permiso == 'usuarios').permisosSubmodulos
    const response2 = response1.find((e: any) => e.nombre_permiso == 'finales').permisosAcciones
    for (const iterator of response2) {
      this.permisos.push(iterator.nombre_permiso)
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
