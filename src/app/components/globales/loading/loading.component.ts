import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-global-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  @Input()
  tiempo: number = 0;

}
