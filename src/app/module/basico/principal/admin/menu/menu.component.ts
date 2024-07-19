import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { Component, OnInit, Pipe } from '@angular/core';
import { PipesModule } from './../../../../../pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

import Swal from 'sweetalert2'
import { UserService } from '../../../../../services/globales/user/user.service';
import { PermisosService } from '../../../../../services/globales/permisos/permisos.service';

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
    private userService: UserService,
    private permisosService :PermisosService
  ) { }

  menu: [] = []

  async ngOnInit() {
    const userId = await this.userService.getUser('authadmin')
    const response = await this.permisosService.permisos(userId.data.id,0,1)
    this.menu = response.data
  }

  goTo(url: string){
    this.router.navigate([window.location.pathname+url]);
  }


}
