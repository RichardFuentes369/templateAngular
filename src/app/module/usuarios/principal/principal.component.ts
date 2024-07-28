import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { openCloseModal } from '../../../functions/System'
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AuthService } from '../../../guards/service/auth.service';
import { PermisosService } from '../../../services/globales/permisos/permisos.service';
import { LoadingComponent } from '../../../components/globales/loading/loading.component';
import { TablecrudComponent } from '../../../components/globales/tablecrud/tablecrud.component';
import { PrincipalService } from './service/principal.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    TranslateModule,
    TablecrudComponent,
    LoadingComponent
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent implements OnInit{

  constructor(
    private router: Router,
    private userService :AuthService,
    private permisosService :PermisosService,
    private principalService :PrincipalService,
    private translate: TranslateService
  ) { }

  permisos: any[] = []

  async ngOnInit() {
    await this.userService.refreshToken('authadmin');
    const {data} = await this.userService.getUser('authadmin');
    const response = await this.permisosService.permisos(data.id, 1, 3, 2);
    for (const iterator of response.data) {
      this.permisos.push(iterator)
    }
  }

  // inicio datos que envio al componente
  showcampoFiltro = true
  endPoint = 'admin'
  columnas = [
    {
      title: 'ID',
      data: 'id',
    },
    {
      title: 'First name',
      data: 'email',
    },
    {
      title: 'First name',
      data: 'firstName',
    },
    {
      title: 'First name',
      data: 'lastName',
    }
  ]
  permisosAcciones = this.permisos
  // fin datos que envio al componente

  verData (_id: string){
    console.log("verData "+_id)
    this.router.navigate([`/admin/menu/index-usuarios/principal/ver-administrador/`], { queryParams: { id: _id } });
  }
  crearData (_id: string){
    console.log("crearData "+_id)
    this.router.navigate(['/admin/menu/index-usuarios/principal/crear-administrador/']);
  }
  editarData (_id: string){
    console.log("editarData "+_id)
    this.router.navigate(['/admin/menu/index-usuarios/principal/editar-administrador/'], { queryParams: { id: _id } });
  }
  asignarData (_id: string){
    console.log("asignarData "+_id)
    this.router.navigate(['/admin/menu/index-usuarios/principal/asignar-administrador/'], { queryParams: { id: _id } });
  }

  // {{ 'pages-usuarios.Swal.AdminWord' | translate}}
  @ViewChild(TablecrudComponent)
  someInput!: TablecrudComponent
  eliminarData (_id: string){
    console.log("eliminarData "+_id)
    this.translate.get('pages-usuarios.Swal.TitleDelete').subscribe((translatedTitle: string) => {
      Swal.fire({
        title: translatedTitle,
        text: this.translate.instant('pages-usuarios.Swal.TitleDeleteText'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: this.translate.instant('pages-usuarios.Swal.TitleDelete'),
        cancelButtonText: this.translate.instant('pages-usuarios.Swal.TitleCancel')
      }).then((result) => {
        if (result.isConfirmed) {
            if (result.isConfirmed) {
              this.principalService.deleteUser(_id)
              this.someInput.reload()
              Swal.fire({
                title: this.translate.instant('pages-usuarios.Swal.TitleDeleted'),
                text: this.translate.instant('pages-usuarios.Swal.TitleRegisterDeleted'),
                icon: "success"
              });
            }
        }
      });
    });
  }

  activarData (_id: string){
    console.log("activarData "+_id)
  }

}
