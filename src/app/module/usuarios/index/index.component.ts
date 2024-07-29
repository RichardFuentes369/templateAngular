import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PipesModule } from '../../../pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { AuthService } from '../../../guards/service/auth.service';
import { PermisosService } from '../../../services/globales/permisos/permisos.service';

interface PermisoInterface {
  id: number;
  moduloId: number;
  nombre: string;
  tipo: number;
  userId: number;
}

@Component({
  selector: 'app-menu-usuarios-index',
  standalone: true,
  imports: [CommonModule, PipesModule, TranslateModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit{

  constructor(
    private router: Router,
    private userService :AuthService,
    private permisosService :PermisosService
  ) { }

  menu: PermisoInterface[] = []

  async ngOnInit() {
    const { data } = await this.userService.getUser('authadmin')
    const modulo = await this.permisosService.getIdPermiso(data.id,'usuarios')
    console.log(modulo)
    const response = await this.permisosService.permisos(data.id,modulo.data[0].moduloId,2,0)
    for (const iterator of response.data) {
      this.menu.push(iterator)
    }
  }

  tienePermiso(nombre: string): boolean {
    return this.menu.some((permiso: PermisoInterface) => permiso.nombre === nombre);
  }

  goTo(url: string){
    this.router.navigate([window.location.pathname+'/'+url]);
  }


}
