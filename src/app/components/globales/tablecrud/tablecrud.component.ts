import { Component,  Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import Swal from 'sweetalert2'
import { TablecrudService } from './service/tablecrud.service';

@Component({
  selector: 'app-globales-tablecrud',
  templateUrl: './tablecrud.component.html',
  styleUrl: './tablecrud.component.scss'
})
export class TablecrudComponent implements OnInit {

  @Input()
  buttonActivar : boolean = false
  @Input()
  buttonVer : boolean = false
  @Input()
  buttonAsignar : boolean = false
  @Input()
  buttonCrear : boolean = false
  @Input()
  buttonEditar : boolean = false
  @Input()
  buttonEliminar : boolean = false
  @Input()
  campoFiltro : boolean = false
  @Input()
  endPoint : string = ''

  constructor(
    private router: Router,
    private tableCrudService: TablecrudService
  ) { }

  page: number = 1
  limit: number = 5
  previousPage: boolean = true
  nextPage: boolean = true

  ngOnInit() {
    this.listarData(this.page, this.limit)
  }

  previous(){
    this.page -= 1
    this.listarData(this.page, this.limit)
  }

  next(){
    this.page += 1
    this.listarData(this.page, this.limit)
  }

  async listarData(nroPage: number, limitPerPage: number){

    await this.tableCrudService.getData(this.endPoint, nroPage, limitPerPage).then(response=>{
      this.previousPage = (response.data[0].pagination.previou === null) ? true : false
      this.nextPage = (response.data[0].pagination.next === null) ? true : false

      console.log(response.data[0].order)
      console.log(response.data[0].pagination)
      console.log(response.data[0].result)
    }).catch(err => {
      Swal.fire({
        title: err.response.data.message,
        text: err.response.data.error,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    })

  }
}
