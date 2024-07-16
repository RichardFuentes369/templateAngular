import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-usuarios-index',
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
