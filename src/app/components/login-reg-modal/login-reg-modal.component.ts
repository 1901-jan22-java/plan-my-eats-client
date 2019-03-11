import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal/modal.service'
import { User } from '../../models/user.model'
import { LoginService } from '../../services/login/login.service'
import { RegisterService } from 'src/app/services/register/register.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-reg-modal',
  templateUrl: './login-reg-modal.component.html',
  styleUrls: ['./login-reg-modal.component.css']
})
export class LoginRegModalComponent implements OnInit {

  display = 'none';
  notReg: boolean = true;
  subscription: Subscription;
  un: string;
  pw: string;
  logUn: string;
  logPw: string;
  hi: number;
  we: number;
  age: number;
  sex: string;

  logging: User = null;
  registering: User = null;

  

  

  constructor(private _navService: ModalService, private loginService: LoginService, private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.subscription = this._navService.showItem$.subscribe(showModal => this.display = showModal);
  }

  closeModal() {
    this._navService.log();
    if (this.notReg == false) {
      this.notReg = !this.notReg;
    }
  }

  reg() {
    this.notReg = !this.notReg;
  }

  logUser() {
    this.logging = {
      username: this.logUn,
      password: this.logPw,
      height: this.hi,
      weight: this.we,
      age: this.age,
      gender: 'Male',
      recipes: [],
      restaurants: [],
      preferences: [],
      token: ''
    };
    this.loginService.login(this.logging).subscribe(
      resp => {
        if(resp != null) {
          console.log(resp);
          this.router.navigate(['logged']);
        }
      }
    );
  }

  regUser() {
    this.registering = {
      username: this.un,
      password: this.pw,
      height: this.hi,
      weight: this.we,
      age: this.age,
      gender: 'Male',
      recipes: [],
      restaurants: [],
      preferences: [],
      token: ''
    };
    this.registerService.register(this.registering).subscribe(
      resp => {
        if(resp != null) {
          console.log(resp);
          this.router.navigate(['logged']);
        }
      }
    );
  }
}
