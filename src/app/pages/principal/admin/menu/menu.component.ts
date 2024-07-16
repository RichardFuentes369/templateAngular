import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { Component, OnInit, Pipe } from '@angular/core';
import { PipesModule } from '../../../../pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

import Swal from 'sweetalert2'
import { MenuService } from './service/menu.service';

interface MenuItem {
  name: string;
  icon: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, PipesModule, HttpClientModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  constructor(
    private router: Router,
    private menuService :MenuService
  ) { }

  menu: MenuItem[] = []

  async ngOnInit() {

    const userId = await this.menuService.getUser('authadmin')
    const response = await this.menuService.menuPermisos(userId.data.id)

    for (const itemMenu of response.data) {
      let obj: MenuItem = {
        name: itemMenu.modulo.nombre,
        icon: itemMenu.modulo.icono,
        title: itemMenu.modulo.nombre,
        url: itemMenu.modulo.url
      };

      this.menu.push(obj);
    }

  }

  goTo(url: string){
    this.router.navigate([window.location.pathname+url]);
  }


}
