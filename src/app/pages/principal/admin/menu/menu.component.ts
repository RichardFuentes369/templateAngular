import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { Component, OnInit, Pipe } from '@angular/core';
import { PipesModule } from '../../../../pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

import Swal from 'sweetalert2'
import { MenuService } from './service/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, PipesModule, HttpClientModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  constructor(
    // private router: Router,
    private menuService :MenuService
  ) { }


  menu = [
    {
      'name': "Usuarios",
      'icon': "ico-user",
      'title': "Usuarios",
      'url': ""
    },
  ]

  async ngOnInit() {

    const userId = await this.menuService.getUser('authadmin')
    const response = await this.menuService.menuPermisos(userId.data.id)

    for (const itemMenu of response.data) {
      console.log(itemMenu)
    }

  }


}
