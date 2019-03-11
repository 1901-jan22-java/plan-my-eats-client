import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registering: User = new User();

  constructor(private registerService: RegisterService, private userService: UserService,
    private modalService: ModalService, private router: Router) {
  }

  ngOnInit() {
  }

  registerUser() {
    this.registerService.register(this.registering).subscribe(resp => {
      console.log(resp);
      if (resp != null && resp instanceof User) {
        this.router.navigate(['user-home']);
        this.userService.update(resp)
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
