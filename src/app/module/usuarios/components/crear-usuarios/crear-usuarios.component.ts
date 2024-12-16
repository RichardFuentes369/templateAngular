import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import Swal from 'sweetalert2'
import { PrincipalService } from '../../principal/service/principal.service';
import { Router } from '@angular/router';
import { ocultarModalOscura } from '@functions/System'
import { TablecrudComponent } from '@component/globales/tablecrud/tablecrud.component';

interface crearUsuario {
  "firstName": string,
  "lastName": string,
  "password": string,
  "email": string,
  "isActive": string
}

@Component({
  selector: 'app-crear-usuarios',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './crear-usuarios.component.html',
  styleUrl: './crear-usuarios.component.scss'
})

export class CrearUsuariosComponent {

  constructor(
    private router: Router,
    private principalService: PrincipalService,
    private translate: TranslateService
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

  async crearPrincipal(){
    await this.principalService.createUser(this.model)
    .then(response=>{
      ocultarModalOscura()
      this.translate.get('pages-usuarios.Swal.TitleAreYouSure').subscribe((translatedTitle: string) => {
        Swal.fire({
          title: this.translate.instant('pages-usuarios.Swal.TitleCreate'),
          text: this.translate.instant('pages-usuarios.Swal.TitleRegisterCreate'),
          icon: "success"
        });
      });
    }).catch(err =>{
      console.log(err)
      Swal.fire({
        title: err.response.data.message,
        text: err.response.data.error,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    })

  }

}
