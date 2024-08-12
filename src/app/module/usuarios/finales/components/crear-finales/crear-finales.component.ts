import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import Swal from 'sweetalert2'
import { FinalService } from '../../service/final.service';
import { Router } from '@angular/router';

interface crearUsuario {
  "firstName": string,
  "lastName": string,
  "password": string,
  "email": string,
  "isActive": string
}

@Component({
  selector: 'app-crear-finales',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './crear-finales.component.html',
  styleUrl: './crear-finales.component.scss'
})
export class CrearFinalesComponent {

  constructor(
    private router: Router,
    private finalService: FinalService
  ){}

  model = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isActive: 0
  }

  goTo (url: string, _id: number){

    if(_id != 0){
      this.router.navigate([url], { queryParams: { id: _id } });
    }else{
      this.router.navigate([url]);
    }

  }

  async crearFinal(){
    await this.finalService.createUser(this.model)
    .then(response=>{
      this.router.navigate([`/admin/menu/index-usuarios/finales/`]);
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
