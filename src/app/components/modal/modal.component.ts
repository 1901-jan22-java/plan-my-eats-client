import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';
import { Router } from "@angular/router";
import { ModalService } from 'src/app/services/modal/modal.service';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  display = 'none';
  modalView: string = 'login';

  logging: User = new User();
  registering: User = new User();

  constructor(private _navService: ModalService, private loginService: LoginService,
    private registerService: RegisterService, private router: Router) {

  }

  ngOnInit() {
    this._navService.showItem$.subscribe(showModal => this.display = showModal);
  }

  closeModal() {
    this.modalView = 'login';
    this._navService.log();
  }

  reg() {
    if(this.modalView == 'login'){
      this.modalView = "register";
    }
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
