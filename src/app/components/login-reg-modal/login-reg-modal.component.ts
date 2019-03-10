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

  logging: User = new User();
  registering: User = new User();

  constructor(private _navService: ModalService, private loginService: LoginService,
    private registerService: RegisterService, private router: Router) {

  }

  ngOnInit() {
    this._navService.showItem$.subscribe(showModal => this.display = showModal);
  }

  closeModal() {
    this.notReg = true;
    this._navService.log();
  }

  reg() {
    this.notReg = !this.notReg;
  }

  logUser() {
    this.loginService.login(this.logging).subscribe(resp => {
      console.log(resp);
      if (resp != null && resp instanceof User) {
        this.router.navigate(['user-home']);
        this.loginService.sendUser(resp);
      }
    });
  }

  regUser() {
    this.registerService.register(this.registering).subscribe(resp => {
      console.log(resp);
      if (resp != null && resp instanceof User) {
        this.router.navigate(['user-home']);
        this.registerService.sendUser(resp)
      }
    });
  }
}
