import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '@pipe/pipes.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '@guard/service/auth.service';
import { PermisosService } from '@service/globales/permisos/permisos.service';

import { Permisos } from '@functions/System'
@Component({
  selector: 'app-index',
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

  menu: any[] = []

  async ngOnInit() {
    const userData = await this.userService.getUser('authadmin')
    const modulo = await this.permisosService.permisos(userData.data.id, '')
    const response  = Permisos(modulo, 'publicaciones','')
console.log(response)
    for (const iterator of response) {
      this.menu.push(iterator)
    }
  }

  tienePermiso(nombre: string): boolean {
    return this.menu.some((permiso) => permiso.nombre_permiso === nombre);
  }

  goTo(url: string){
    this.router.navigate([window.location.pathname+'/'+url]);
  }

}
