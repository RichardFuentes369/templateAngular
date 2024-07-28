import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import Swal from 'sweetalert2'
import { PrincipalService } from '../../service/principal.service';
import { Router } from '@angular/router';

interface crearUsuario {
  "firstName": string,
  "lastName": string,
  "password": string,
  "email": string,
  "isActive": string
}

@Component({
  selector: 'app-crear-principal',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './crear-principal.component.html',
  styleUrl: './crear-principal.component.scss'
})

export class CrearPrincipalComponent {

  constructor(
    private router: Router,
    private principalService: PrincipalService
  ){}

  model = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isActive: 0
  }

  async crearPrincipal(){
    await this.principalService.createUser(this.model)
    .then(response=>{
      this.router.navigate([`/admin/menu/index-usuarios/principal/`]);
    }).catch(err =>{
      Swal.fire({
        title: err.response.data.message,
        text: err.response.data.error,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    })
  }

}
