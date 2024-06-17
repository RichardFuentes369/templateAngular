import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'

import Swal from 'sweetalert2'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {}

  idiomaCambiar(valor: string){
    this.translate.use(valor)
  }

  cerrarSession(){
    localStorage.removeItem('token')
    this.router.navigate(['/inicio/ingreso/user']);
  }

}
