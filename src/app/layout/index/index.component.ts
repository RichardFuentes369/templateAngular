import { Component, Renderer2, HostListener, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  constructor(private renderer: Renderer2, private translate: TranslateService,) {}

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.responsiveMenu()
  }

  ngOnInit(event:any) {
    this.responsiveMenu()
  }

  responsiveMenu(){
    if(window.innerWidth <= 991){
      const elements = document.querySelectorAll('.menuIndex');
      elements.forEach(element => {
        this.renderer.removeClass(element, 'borde-menu');
      });

      const container = document.querySelectorAll('.navbarPersonalizado');
      container.forEach(element => {
        this.renderer.removeClass(element, 'row');
      });
    }else{
      const elements = document.querySelectorAll('.menuIndex');
      elements.forEach(element => {
        this.renderer.addClass(element, 'borde-menu');
      });

      const container = document.querySelectorAll('.navbarPersonalizado');
      container.forEach(element => {
        this.renderer.addClass(element, 'row');
      });
    }
  }

  minimizarSliderbar: boolean = false;

  mostrarMenuLateral(){
    this.minimizarSliderbar = !this.minimizarSliderbar
    console.log(this.minimizarSliderbar)
  }

  idiomaCambiar(valor: string){
    this.translate.use(valor)
  }


}
