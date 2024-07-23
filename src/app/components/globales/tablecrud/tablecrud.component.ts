import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { Config } from 'datatables.net';

import { TablecrudService } from './service/tablecrud.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-globales-tablecrud',
  standalone: true,
  imports: [],
  templateUrl: './tablecrud.component.html',
  styleUrl: './tablecrud.component.scss',
})
export class TablecrudComponent implements OnInit {
  @Input()
  campoFiltro: boolean = false;
  @Input()
  endPoint: string = '';
  @Input()
  columnas: any;
  @Input()
  permisosAcciones: any[] = [];

  idSeleccionado: string = '';

  constructor(
    private tableCrudService: TablecrudService,
    private http: HttpClient
  ) {}

  dtOptions: Config = {};

  ngOnInit() {
    this.listar();
  }

  tienePermiso(nombre: string): boolean {
    return this.permisosAcciones.some((permiso) => permiso.nombre === nombre);
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


          this.idSeleccionado = ''
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
      rowCallback: (row: Node, data: any | Object, index: number) => {
        const self = this;
        $('td', row).on('click', () => {
          this.idSeleccionado = ''
          $('tr').css({'background-color':'','color':'black'});

          this.idSeleccionado = data.id
          $('tr').eq(index+2).css({'background-color':'red','color':'white'});
        });
        return row;
      }
    };
  }

  limpiarSeleccion(){
    this.idSeleccionado = ''
    $('tr').css({'background-color':'','color':'black'});
  }

  // ver(){
  //   console.log(this.idSeleccionado)
  //   console.log('aqui estoy viendo')
  // }

  // activar(){
  //   console.log(this.idSeleccionado)
  //   console.log('aqui estoy activar')
  // }

  // asignar(){
  //   console.log(this.idSeleccionado)
  //   console.log('aqui estoy asignar')
  // }

  // crear(){
  //   this.idSeleccionado = ''
  //   $('tr').css({'background-color':'','color':'black'});
  //   console.log('aqui estoy creando')
  // }

  // editar(){
  //   console.log(this.idSeleccionado)
  //   console.log('aqui estoy editando')
  // }

  // eliminar(){
  //   console.log(this.idSeleccionado)
  //   console.log('aqui estoy elimnando')
  // }
}
