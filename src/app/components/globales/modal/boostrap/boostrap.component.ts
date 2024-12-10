import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LoadingComponent } from '@component/globales/loading/loading.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-globales-modal-boostrap',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    LoadingComponent
  ],
  templateUrl: './boostrap.component.html',
  styleUrl: './boostrap.component.scss'
})
export class ModalBoostrapComponent {

  @Input()
  tamano: string = '';
  @Input()
  scrollable: boolean = false;
  @Input()
  title: string = '';
  @Input()
  cancel: boolean = false;
  @Input()
  buttonCancel: string = '';
  @Input()
  save: boolean = false;
  @Input()
  buttonSave: string = '';
  @Input()
  edit: boolean = false;
  @Input()
  buttonEdit: string = '';

}
