import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  logging: User;

  constructor(private loginService: LoginService, 
    private userService: UserService, 
    private modalService: ModalService) {

  }

  ngOnInit() {
  }

  loginUser() {
    this.loginService.login(this.logging).subscribe(resp => {
      if (resp != null) {
        this.closeModal();
        this.userService.update(resp);
      }
    });
  }

  closeModal() {
    this.modalService.toggle();
  }

  goToRegister() {
    this.modalService.goToModalView('register');
  }

}
