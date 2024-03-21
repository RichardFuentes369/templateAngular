import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  minimizarSliderbar: boolean = false;

  mostrarMenuLateral(){
    this.minimizarSliderbar = !this.minimizarSliderbar
    console.log(this.minimizarSliderbar)
  }

}
