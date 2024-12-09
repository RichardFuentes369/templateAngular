import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoadingComponent } from '../loading/loading.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-globales-modal',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    LoadingComponent
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{

  constructor(
    private router: Router,
    private translate: TranslateService
  ) { }

  ocultar = true;

  async ngOnInit() {

  }

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
