import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { Component, OnInit, Pipe } from '@angular/core';


import Swal from 'sweetalert2'
import { UserService } from '../../../../../services/globales/user/user.service';
import { PermisosService } from '../../../../../services/globales/permisos/permisos.service';

import { BuscadorComponent } from '../../../../../components/globales/buscador/buscador.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    BuscadorComponent,
    TranslateModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  constructor(
    private router: Router,
    private userService: UserService,
    private permisosService :PermisosService
  ) { }

  menu: any[] = []
  // tiempoCarga = 2500

  async ngOnInit() {
    const userId = await this.userService.getUser('authadmin')
    const response = await this.permisosService.permisos(userId.data.id,0,1,0)
    this.menu = response.data
    // this.tiempoCarga = 0
  }

  tienePermiso(nombre: string): boolean {
    return this.menu.some((permiso) => permiso.nombre === nombre);
  }

  goTo(url: string){
    this.router.navigate([window.location.pathname+url]);
  }

}
