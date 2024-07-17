import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PipesModule } from '../../../../pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, PipesModule, HttpClientModule, TranslateModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
