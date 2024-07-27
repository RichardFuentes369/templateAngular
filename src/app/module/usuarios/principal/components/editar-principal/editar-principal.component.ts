import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UserService } from '../../../../../services/globales/user/user.service';
import { PermisosService } from '../../../../../services/globales/permisos/permisos.service';
import { PrincipalService } from '../../service/principal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-principal',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './editar-principal.component.html',
  styleUrl: './editar-principal.component.scss'
})
export class EditarPrincipalComponent implements OnInit{

  constructor(
    private router: Router,
    private userServide :UserService,
    private permisosService :PermisosService,
    private route :ActivatedRoute,
    private userPrincipalService :PrincipalService
  ) { }

  user: any[] = []

  async ngOnInit() {
    // const userId = await this.userServide.getUser('authadmin')
    // const response = await this.permisosService.permisos(userId.data.id,1,3,2)
    let usuarioReal = await this.userPrincipalService.getDataUser(
      this.route.snapshot.queryParams?.['id']
    )
    this.user.push(usuarioReal.data)
  }

}
