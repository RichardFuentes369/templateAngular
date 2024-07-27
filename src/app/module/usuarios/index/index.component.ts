import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PipesModule } from '../../../pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { UserService } from '../../../services/globales/user/user.service';
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
    private userServide :UserService,
    private permisosService :PermisosService
  ) { }

  menu: PermisoInterface[] = []

  async ngOnInit() {
    const userId = await this.userServide.getUser('authadmin')
    const response = await this.permisosService.permisos(userId.data.id,1,2,0)
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
