import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PipesModule } from '../../../../pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-usuarios-finales',
  standalone: true,
  imports: [CommonModule, PipesModule, HttpClientModule, TranslateModule],
  templateUrl: './finales.component.html',
  styleUrl: './finales.component.scss'
})
export class FinalesComponent {

}
