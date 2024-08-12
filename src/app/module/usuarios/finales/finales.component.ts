import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';

import { openCloseModal } from '../../../functions/System'
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AuthService } from '@guard/service/auth.service';
import { PermisosService } from '@service/globales/permisos/permisos.service';
import { TablecrudComponent } from '@component/globales/tablecrud/tablecrud.component';

import { Permisos } from '@functions/System'
import { LoadingComponent } from '@component/globales/loading/loading.component';
import { FinalService } from './service/final.service';

@Component({
  selector: 'app-menu-usuarios-finales',
  standalone: true,
  imports: [
    TranslateModule,
    TablecrudComponent,
    LoadingComponent
  ],
  templateUrl: './finales.component.html',
  styleUrl: './finales.component.scss'
})
export class FinalesComponent implements OnInit{

  constructor(
    private router: Router,
    private userService :AuthService,
    private permisosService :PermisosService,
    private finalService :FinalService,
    private translate: TranslateService
  ) { }

  permisos: any[] = []

  async ngOnInit() {
    await this.userService.refreshToken('authadmin');
    const userData = await this.userService.getUser('authadmin');
    const modulo = await this.permisosService.permisos(userData.data.id)
    for (const iterator of Permisos(modulo, 'usuarios','finales')) {
      this.permisos.push(iterator.nombre_permiso)
    }
  }

  // inicio datos que envio al componente
  showcampoFiltro = true
  endPoint = 'user'
  columnas = [
    {
      title: 'ID',
      data: 'id',
    },
    {
      title: 'Email',
      data: 'email',
    },
    {
      title: 'First name',
      data: 'firstName',
    },
    {
      title: 'Last name',
      data: 'lastName',
    },
    {
      title: 'Status',
      data: 'isActive',
    }
  ]
  permisosAcciones = this.permisos
  // fin datos que envio al componente

  verData (_id: string){
    console.log("verData "+_id)
    this.router.navigate([`/admin/menu/index-usuarios/finales/ver-finales/`], { queryParams: { id: _id } });
  }
  crearData (_id: string){
    console.log("crearData "+_id)
    this.router.navigate(['/admin/menu/index-usuarios/finales/crear-finales/']);
  }
  editarData (_id: string){
    console.log("editarData "+_id)
    this.router.navigate(['/admin/menu/index-usuarios/finales/editar-finales/'], { queryParams: { id: _id } });
  }

  @ViewChild(TablecrudComponent)
  someInput!: TablecrudComponent
  eliminarData (_id: string){
    console.log("eliminarData "+_id)
    this.translate.get('pages-usuarios.Swal.TitleAreYouSure').subscribe((translatedTitle: string) => {
      Swal.fire({
        title: translatedTitle,
        text: this.translate.instant('pages-usuarios.Swal.TitleWarnigRevert'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: this.translate.instant('pages-usuarios.Swal.TitleDelete'),
        cancelButtonText: this.translate.instant('pages-usuarios.Swal.TitleCancel')
      }).then(async (result) => {
        if (result.isConfirmed) {
            if (result.isConfirmed) {
              await this.finalService.deleteUser(_id)
              await this.someInput.reload()
              Swal.fire({
                title: this.translate.instant('pages-usuarios.Swal.TitleDelete'),
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
    this.translate.get('pages-usuarios.Swal.TitleAreYouSure').subscribe((translatedTitle: string) => {
      Swal.fire({
        title: this.translate.instant('pages-usuarios.Swal.TitleAreYouSure'),
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: this.translate.instant('pages-usuarios.Swal.TitleActived'),
        cancelButtonText: this.translate.instant('pages-usuarios.Swal.TitleCancel'),
        denyButtonText: this.translate.instant('pages-usuarios.Swal.TitleInactived')
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          await this.finalService.updateUser(
            {"isActive": true},
            _id
          )
          await this.someInput.reload()
          Swal.fire({
            title: this.translate.instant('pages-usuarios.Swal.TitleActived'),
            text: this.translate.instant('pages-usuarios.Swal.TitleRegisterActived'),
            icon: "success"
          });
        } else if (result.isDenied) {
          await this.finalService.updateUser(
            {"isActive": false},
            _id
          )
          await this.someInput.reload()
          Swal.fire({
            title: this.translate.instant('pages-usuarios.Swal.TitleInactived'),
            text: this.translate.instant('pages-usuarios.Swal.TitleRegisterInactived'),
            icon: "success"
          });
        }
      });
    });
  }

}
