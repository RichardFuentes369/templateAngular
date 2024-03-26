import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-globales-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router ) { }

  isLoginAdmin = false

  ngOnInit() {
    this.router.url.split('/').forEach(element => {
      (element == 'admin') ? this.isLoginAdmin = true : this.isLoginAdmin = false
    });
  }

}
