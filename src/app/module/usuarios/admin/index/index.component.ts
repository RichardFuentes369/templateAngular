import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PipesModule } from '../../../../pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-usuarios-index',
  standalone: true,
  imports: [CommonModule, PipesModule, HttpClientModule, TranslateModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  constructor(
    private router: Router,
  ) { }

  goTo(url: string){
    this.router.navigate([window.location.pathname+'/'+url]);
  }

}
