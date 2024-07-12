import { CommonModule } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { PipesModule } from '../../../../pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, PipesModule, HttpClientModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  ngOnInit() {

  }

  menu = [
    {
      'name': "Publicaciones",
      'icon': "ico-pub",
      'title': "Publicaciones",
      'url': ""
    },
    {
      'name': "Usuarios",
      'icon': "ico-user",
      'title': "Usuarios",
      'url': ""
    },
    {
      'name': "Globales",
      'icon': "ico-glb",
      'title': "Globales",
      'url': ""
    },
  ]


}
