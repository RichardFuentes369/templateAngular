import { Component, OnInit } from '@angular/core';
import { TablecrudComponent } from '../../../components/globales/tablecrud/tablecrud.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../guards/service/auth.service';
import { PermisosService } from '../../../services/globales/permisos/permisos.service';
import { ModulosService } from '../service/modulos.service';

import { Permisos } from '@functions/System'
@Component({
  selector: 'app-submodulos',
  standalone: true,
  imports: [TranslateModule, TablecrudComponent],
  templateUrl: './submodulos.component.html',
  styleUrl: './submodulos.component.scss'
})
export class SubmodulosComponent implements OnInit{

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService :AuthService,
    private permisosService :PermisosService,
    private translate: TranslateService,
    private module: ModulosService,
  ) { }

  permisos: any[] = []
  moduloPadre: any = 0
  isModule: boolean = false

  async ngOnInit() {
    localStorage.removeItem('submodulo')
    this.moduloPadre = localStorage.getItem('modulo')
    if(!this.moduloPadre){
      this.router.navigate([`/admin/menu/index-modulos`]);
    }
    const idPermisoModulo = (await this.module.buscarPermiso(0,'modulo')).data.id
    if(this.moduloPadre == idPermisoModulo){
      this.isModule = true
    }
    await this.userService.refreshToken('authadmin');
    const userData = await this.userService.getUser('authadmin');
    const modulo = await this.permisosService.permisos(userData.data.id,'')
    for (const iterator of Permisos(modulo, 'modulo','')) {
      this.permisos.push(iterator.nombre_permiso)
    }
  }

  // inicio datos que envio al componente
  showcampoFiltro = true
  endPoint = `modulos/lista/${localStorage.getItem('modulo')}`
  columnas = [
    {
      title: 'ID',
      data: 'id',
    },
    {
      title: 'First name',
      data: 'nombre_permiso',
    }
  ]
  permisosAcciones = this.permisos
  // fin datos que envio al componente

  verData (_id: string){
    console.log("verData "+_id)
    localStorage.setItem('submodulo', _id)
    this.router.navigate([`/admin/menu/index-modulos/index-submodulos/index-permisos`]);
  }
}
