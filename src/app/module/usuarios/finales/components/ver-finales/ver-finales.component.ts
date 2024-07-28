import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FinalesService } from '../../service/finales.service';

interface AdministradorInterface {
  'id': number,
  'firstName': string,
  'lastName': string,
  'email': string,
  'password': string,
  'isActive': boolean,
}

@Component({
  selector: 'app-ver-finales',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './ver-finales.component.html',
  styleUrl: './ver-finales.component.scss'
})
export class VerFinalesComponent implements OnInit{

  constructor(
    private route :ActivatedRoute,
    private userFinalService :FinalesService
  ) { }

  user: AdministradorInterface[] = []

  async ngOnInit() {
    let usuarioReal = await this.userFinalService.getDataUser(
      this.route.snapshot.queryParams?.['id']
    )
    this.user.push(usuarioReal.data)
  }

}
