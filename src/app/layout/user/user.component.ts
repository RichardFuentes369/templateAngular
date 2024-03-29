import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import Swal from 'sweetalert2'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(
    private router: Router,
  ) {}

  cerrarSession(){
    localStorage.removeItem('token')
    this.router.navigate(['/ingreso/user']);
  }

}
