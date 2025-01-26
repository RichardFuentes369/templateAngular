import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '@guard/service/auth.service';
import { ModulosService } from '@module/modulos/service/modulos.service';
import { PermisosService } from '@service/globales/permisos/permisos.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asignar-permisos',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './asignar-permisos.component.html',
  styleUrl: './asignar-permisos.component.scss'
})
export class AsignarPermisosComponent implements OnInit{

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService :AuthService,
    private modulosService :ModulosService,
    private PermisosService :PermisosService,
    private translate: TranslateService
  ) { }

  permisos: any[] = []

  async ngOnInit() {
    await this.userService.refreshToken('authadmin');
    const userData = await this.userService.getUser('authadmin');
    const modulo = await this.modulosService.listaPermisos(this.route.snapshot.queryParams['id'])
    this.permisos = modulo.data
  }

  async actualizarPermiso(idPermiso: string, idPadre: string, opcion: number){
    console.log(idPermiso)
    console.log(idPadre)
    console.log(opcion)
  }

  toggleCollapse(nombrePermiso: string, isToggle: boolean) {

    const response  = this.permisos.find((e: any) => e.mpm_nombre_permiso == nombrePermiso)
    response.mpm_toogle = !isToggle

  }

}
