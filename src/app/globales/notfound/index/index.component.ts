import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexnotFoundComponent {

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {}

  calculateMinHeight(): number {
    let data = window.innerHeight - (window.innerHeight/5)
    console.log(data)
    return data;
  }

  idiomaCambiar(valor: string){
    this.translate.use(valor)
  }
}
