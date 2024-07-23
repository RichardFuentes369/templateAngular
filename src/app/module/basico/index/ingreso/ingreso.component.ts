import { Component } from '@angular/core';
import { LoginComponent } from '../../../../components/globales/login/login.component';

@Component({
  selector: 'app-pages-index-ingreso',
  standalone: true,
  imports: [
    LoginComponent
  ],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.scss',
})
export class IngresoComponent {

}
