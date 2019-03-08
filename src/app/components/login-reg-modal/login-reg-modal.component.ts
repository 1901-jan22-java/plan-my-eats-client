import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal/modal.service'
import { User } from '../../models/user.model'
import { LoginService } from '../../services/login/login.service'

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
  hi: number;
  we: number;
  age: number;
  sex: string;

  user: User = {
    username: this.un,
    password: this.pw,
    height: this.hi,
    weight: this.we,
    age: this.age,
    sex: this.sex
  };

  constructor(private _navService: ModalService, private loginService: LoginService) { }

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
    console.log(this.notReg);
  }

  logUser() {
    this.loginService.login(this.user).subscribe(
      resp => {
        if (resp != null) {
          console.log("We have succeeded.");
        }
      }
    );
  }

  regUser() {
    this.loginService.login(this.user).subscribe(
      resp => {
        if (resp != null) {
          console.log("We have succeeded.");
        }
      }
    );
  }



}
