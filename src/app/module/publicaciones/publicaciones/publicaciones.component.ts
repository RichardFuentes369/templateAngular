import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';

import { PipesModule } from '../../../pipes/pipes.module'
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [ CommonModule, PipesModule, TranslateModule],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.scss'
})
export class PublicacionesComponent {

  publicaciones = [
    {
      "name_tag": "Importante",
      "news": [
        {
          "id": "1",
          "titulo": "La importancia de la educación en España",
          "contenido": `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
          `,
          "autor": "María García",
          "fecha_publicacion": "2023-01-15",
        },
        {
          "id": "1",
          "titulo": "La importancia de la educación en Colombia",
          "contenido": `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
          `,
          "autor": "María García",
          "fecha_publicacion": "2023-01-15",
        },
        {
          "id": "1",
          "titulo": "La importancia de la educación en Rusia",
          "contenido": `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?
          `,
          "autor": "María García",
          "fecha_publicacion": "2023-01-15",
        },
      ]
    },
    {
      "name_tag": "Judicial",
      "news": [
        {
          "id": "1",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "2",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "3",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "1",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "2",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "3",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "1",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "2",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        }
      ]
    },
    {
      "name_tag": "Deportes",
      "news": [
        {
          "id": "1",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "2",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "3",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },        {
          "id": "1",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "2",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "3",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },        {
          "id": "1",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "2",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
      ]
    },
    {
      "name_tag": "Internacional",
      "news": [
        {
          "id": "1",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "2",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "3",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },        {
          "id": "1",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "2",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "3",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },        {
          "id": "1",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
        {
          "id": "2",
          "titulo": "La importancia de la educación en España",
          "contenido": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur, alias dolorem nam sint corporis voluptas assumenda, eius asperiores iure tempore ipsum ipsa quae at est ullam reprehenderit quis quia?",
          "autor": "María García",
          "fecha_publicacion": "2023-01-15"
        },
      ]
    }
  ];

  imagenSliderSeleccionada = 0

  cambiarNoticia(position:number, nextOrPrevious: number){

    let tamano = this.publicaciones[0].news.length

    switch (nextOrPrevious) {
      case 1:
        if( position == (tamano - 1) ){
          this.imagenSliderSeleccionada = 0
        }else{
          this.imagenSliderSeleccionada = this.imagenSliderSeleccionada + 1
        }
        break;
      case 0:
        if( position == 0 ){
          this.imagenSliderSeleccionada = tamano - 1
        }else{
          this.imagenSliderSeleccionada = this.imagenSliderSeleccionada - 1
        }
        break;
    }

  }
}
