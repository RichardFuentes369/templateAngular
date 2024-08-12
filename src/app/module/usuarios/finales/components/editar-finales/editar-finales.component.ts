import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FinalService } from '../../service/final.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import Swal from 'sweetalert2'

interface FinalInterface {
  'id': number,
  'firstName': string,
  'lastName': string,
  'email': string,
  'password': string,
  'isActive': boolean,
}

@Component({
  selector: 'app-editar-finales',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './editar-finales.component.html',
  styleUrl: './editar-finales.component.scss'
})
export class EditarFinalesComponent implements OnInit{

  constructor(
    private router: Router,
    private route :ActivatedRoute,
    private userFinalService :FinalService,
    private translate: TranslateService
  ) { }

  model = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isActive: 0
  }

  user: FinalInterface[] = []

  async ngOnInit() {
    this.user = []
    let usuarioReal = await this.userFinalService.getDataUser(
      this.route.snapshot.queryParams?.['id']
    )
    this.user.push(usuarioReal.data)

    this.model.id = usuarioReal.data.id
    this.model.firstName = usuarioReal.data.firstName
    this.model.lastName = usuarioReal.data.lastName
    this.model.email = usuarioReal.data.email
    this.model.password = usuarioReal.data.password
    this.model.isActive = usuarioReal.data.isActive
  }

  goTo (url: string, _id: number){

    if(_id != 0){
      this.router.navigate([url], { queryParams: { id: _id } });
    }else{
      this.router.navigate([url]);
    }

  }

  actualizarData(){
    this.userFinalService.updateUser(
      {
        "firstName": this.model.firstName,
        "lastName": this.model.lastName,
        "email": this.model.email,
        "password": this.model.password,
        "isActive": this.model.isActive
      },
      this.model.id
    ).then((response) =>{
      this.translate.get('pages-usuarios.Swal.TitleAreYouSure').subscribe((translatedTitle: string) => {
        Swal.fire(
          this.translate.instant('pages-usuarios.Swal.TitleRegisterUpdated')
        );
      })
    }).catch(async error => {
      this.ngOnInit()
      if(typeof(error.response.data.message) == 'string'){
        Swal.fire(error.response.data.message);
      }else{
        Swal.fire(error.response.data.message[0]);
      }
    })
  }

}
