import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../../../../guards/service/auth.service';
import { PermisosService } from '../../../../../services/globales/permisos/permisos.service';
import { PrincipalService } from '../../service/principal.service';
import { CommonModule } from '@angular/common';

interface AdministradorInterface {
  'id': number,
  'firstName': string,
  'lastName': string,
  'email': string,
  'password': string,
  'isActive': boolean,
}

@Component({
  selector: 'app-editar-principal',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './editar-principal.component.html',
  styleUrl: './editar-principal.component.scss'
})
export class EditarPrincipalComponent implements OnInit{

  constructor(
    private route :ActivatedRoute,
    private userPrincipalService :PrincipalService
  ) { }

  user: AdministradorInterface[] = []

  async ngOnInit() {
    let usuarioReal = await this.userPrincipalService.getDataUser(
      this.route.snapshot.queryParams?.['id']
    )
    this.user.push(usuarioReal.data)
  }

}
