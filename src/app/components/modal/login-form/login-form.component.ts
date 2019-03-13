import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  logging: User = new User();

  constructor(private userService: UserService, 
    private modalService: ModalService) {
  }

  ngOnInit() {
  }

  loginUser() {
    this.userService.requestLogin(this.logging).subscribe(resp => {
      if (resp != null) {
        this.modalService.close();
        this.userService.login(resp);
      }
    });
  }

  closeModal() {
    this.modalService.close();
  }

  goToRegister() {
    this.modalService.goToModalView('register');
  }

}
