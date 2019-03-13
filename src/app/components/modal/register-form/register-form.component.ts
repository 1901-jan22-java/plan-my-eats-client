import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';

import { UserService } from 'src/app/services/user/user.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registering: User = new User();

  constructor(private userService: UserService,
    private modalService: ModalService) {
  }

  ngOnInit() {
  }

  registerUser() {
    this.userService.register(this.registering).subscribe(resp => {
      if (resp != null) {
        this.closeModal();
        this.userService.login(resp);
      }
    });
  }

  closeModal() {
    this.modalService.close();
  }

  goToLogin() {
    this.modalService.goToModalView('login');
  }

}
