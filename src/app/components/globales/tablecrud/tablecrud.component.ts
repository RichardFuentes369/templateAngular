import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { Config } from 'datatables.net';

import { TablecrudService } from './service/tablecrud.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-globales-tablecrud',
  templateUrl: './tablecrud.component.html',
  styleUrl: './tablecrud.component.scss',
})
export class TablecrudComponent implements OnInit {
  @Input()
  buttonActivar: boolean = false;
  @Input()
  buttonVer: boolean = false;
  @Input()
  buttonAsignar: boolean = false;
  @Input()
  buttonCrear: boolean = false;
  @Input()
  buttonEditar: boolean = false;
  @Input()
  buttonEliminar: boolean = false;
  @Input()
  campoFiltro: boolean = false;
  @Input()
  endPoint: string = '';
  @Input()
  columnas: any;

  constructor(
    private tableCrudService: TablecrudService,
    private http: HttpClient
  ) {}

  page: number = 1;
  limit: number = 5;
  previousPage: boolean = true;
  nextPage: boolean = true;

  dtOptions: Config = {};

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.dtOptions = {
      paging: true,
      scrollY: '400',
      ordering: false,
      processing: true,
      serverSide: true, // Set the flag
      ajax: (dataTablesParameters: any, callback) => {
        const page = parseInt(dataTablesParameters.start) / parseInt(dataTablesParameters.length) + 1;
        dataTablesParameters.PageNo = page.toString();
        dataTablesParameters.NoOfRows = dataTablesParameters.length.toString();
        // dataTablesParameters.SearchValue = dataTablesParameters.search.value;
        // dataTablesParameters.sortHeader = this.sortHeader;
        // dataTablesParameters.sortOrder = dataTablesParameters.order[0].dir;

        this.http.get<any[]>(
            `http://localhost:3000/api/${this.endPoint}?page=${page}&limit=${dataTablesParameters.length}&field=id&order=asc`
        ).subscribe((post) => {
          const recordsTotal = post[0].pagination.totalRecord;
          const recordsFiltered = post.length;

          function capitalizeFirstLetter(texto: string) {
            return texto.charAt(0).toUpperCase() + texto.slice(1);
          }

          const data: any = [];

          for (const item of post[0].result) {
            data.push(item);
          }

          callback({
            recordsTotal: recordsTotal,
            recordsFiltered: recordsTotal,
            data: data,
          });
        });
      },
      language: {
        "searchPlaceholder": "Buscar..",
        "processing": "Procesando...",
        "lengthMenu": "Mostrar _MENU_ registros",
        "zeroRecords": "No se encontraron resultados",
        "emptyTable": "Ningún dato disponible en esta tabla",
        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
        "infoFiltered": "(filtrado de un total de _MAX_ registros)",
        "search": "Buscar:",
        "loadingRecords": "Cargando...",
        "paginate": {
            "first": "Primero",
            "last": "Último",
            "next": "Siguiente",
            "previous": "Anterior"
        },
        "aria": {
            "sortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sortDescending": ": Activar para ordenar la columna de manera descendente"
        },
        "decimal": ",",
        "thousands": ".",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
      },
      columns: this.columnas,
    };
  }

  async listarData(nroPage: number, limitPerPage: number) {
    await this.tableCrudService
      .getData(this.endPoint, nroPage, limitPerPage)
      .then((response) => {
        this.previousPage =
          response.data[0].pagination.previou === null ? true : false;
        this.nextPage =
          response.data[0].pagination.next === null ? true : false;

        console.log(response.data[0].order);
        console.log(response.data[0].pagination);
        console.log(response.data[0].result);
      })
      .catch((err) => {
        Swal.fire({
          title: err.response.data.message,
          text: err.response.data.error,
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      });
  }
}

// columns: [
//   {
//     title: 'ID',
//     data: 'id',
//   },
//   {
//     title: 'First name',
//     data: 'email',
//   },
//   {
//     title: 'First name',
//     data: 'firstName',
//   },
//   {
//     title: 'First name',
//     data: 'lastName',
//   },
// ],
