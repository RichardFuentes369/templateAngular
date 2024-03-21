import { Component, Renderer2, HostListener, OnInit  } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  constructor(private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.responsiveMenu()
  }

  ngOnInit(event:any) {
    this.responsiveMenu()
  }

  responsiveMenu(){
    if(window.innerWidth <= 991){
      const elements = document.querySelectorAll('.divider');
      elements.forEach(element => {
        this.renderer.addClass(element, 'd-none');
      });

      const container = document.querySelectorAll('.navbarPersonalizado');
      container.forEach(element => {
        this.renderer.removeClass(element, 'row');
      });
    }else{
      const elements = document.querySelectorAll('.divider');
      elements.forEach(element => {
        this.renderer.removeClass(element, 'd-none');
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

}
