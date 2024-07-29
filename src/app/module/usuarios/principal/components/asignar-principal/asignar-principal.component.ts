import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../../../guards/service/auth.service';
import { PermisosService } from '../../../../../services/globales/permisos/permisos.service';
import { PrincipalService } from '../../service/principal.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asignar-principal',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './asignar-principal.component.html',
  styleUrl: './asignar-principal.component.scss'
})
export class AsignarPrincipalComponent implements OnInit{

  constructor(
    private router: Router,
    private userService :AuthService,
    private permisosService :PermisosService,
    private principalService :PrincipalService,
    private translate: TranslateService
  ) { }

  permisos: any[] = []

  async ngOnInit() {
    await this.userService.refreshToken('authadmin');
    const userData = await this.userService.getUser('authadmin');
    const modulo = await this.permisosService.listaPermisos()

    for (const iterator of modulo.data) {
      iterator['toogle'] = false
    }

    this.permisos = modulo.data
  }


  toggleCollapse(nombrePermiso: string, isToggle: boolean) {

    const response  = this.permisos.find((e: any) => e.permiso_nombre_permiso == nombrePermiso)
    response.toogle = !isToggle

  }

}
