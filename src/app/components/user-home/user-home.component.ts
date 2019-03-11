import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/modal/login/login.service';
import { RegisterService } from 'src/app/services/modal/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  user: User = null;

  constructor(private loginService: LoginService, private registerService: RegisterService,
    private router: Router) {

  }

  ngOnInit() {
    this.loginService.user$.subscribe(resp => this.user = resp);
    this.registerService.user$.subscribe(resp => this.user = resp);
  }

  public eatIn() {
    this.router.navigate(['eat-in']);
  }

  public eatOut() {
    this.router.navigate(['eat-out']);
  }

}
