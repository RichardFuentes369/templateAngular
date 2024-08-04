import { Component, OnInit } from '@angular/core';
import { TablecrudComponent } from '../../../components/globales/tablecrud/tablecrud.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../guards/service/auth.service';
import { PermisosService } from '../../../services/globales/permisos/permisos.service';

@Component({
  selector: 'app-permisos',
  standalone: true,
  imports: [TranslateModule, TablecrudComponent],
  templateUrl: './permisos.component.html',
  styleUrl: './permisos.component.scss'
})
export class PermisosComponent implements OnInit{

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService :AuthService,
    private permisosService :PermisosService,
    private translate: TranslateService
  ) { }

  permisos: any[] = []
  moduloPadre: any = 0

  async ngOnInit() {
    this.moduloPadre = localStorage.getItem('submodulo')

    if(!this.moduloPadre){
      this.router.navigate([`/admin/menu/index-modulos`]);
    }

    await this.userService.refreshToken('authadmin');
    const userData = await this.userService.getUser('authadmin');
    const modulo = await this.permisosService.permisos(userData.data.id)
    const response1 = modulo.data.find((e: any) => e.permiso_nombre_permiso == 'modulo').permisosSubmodulos
    for (const iterator of response1) {
      this.permisos.push(iterator.nombre_permiso)
    }
  }

  // inicio datos que envio al componente
  showcampoFiltro = true
  endPoint = `modulos/lista/${localStorage.getItem('submodulo')}`
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

}
