import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-globales-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

  private routerSubscription: Subscription = new Subscription(); // Inicializar aquí

  constructor(private router: Router) {}

  rutaOrdenada :string[] = []

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onUrlChange();
      }
    });

    let url = window.location.pathname
    let nuevaUrl = url.split('/')
    nuevaUrl.shift()
    nuevaUrl.shift()
    for (const item of nuevaUrl) {
      this.rutaOrdenada.push(item)
    }
  }

  onUrlChange() {
    this.rutaOrdenada = []
    let url = window.location.pathname
    let nuevaUrl = url.split('/')
    nuevaUrl.shift()
    nuevaUrl.shift()
    for (const item of nuevaUrl) {
      this.rutaOrdenada.push(item)
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  goTo(url: string){
    let pathCompleto = window.location.pathname
    let quedeHasta = url
    let startIndex = pathCompleto.indexOf(quedeHasta);
    if (startIndex !== -1) {
        let newUrl = pathCompleto.substring(0, startIndex);
        let urlReal = newUrl+quedeHasta
        this.router.navigate([urlReal]);
    }
  }
}
