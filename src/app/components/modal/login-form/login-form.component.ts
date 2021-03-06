import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  logging: User = new User();
  returnUrl: string;
  loading = false;

  constructor(
    private alertService: AlertService,
    private router: Router,
    private userService: UserService,
    private modalService: ModalService, ) {

    // redirect to home if already logged in
    if (this.userService.user) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

  loginUser() {
    this.userService.login(this.logging)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['home']);
          this.closeModal();
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  closeModal() {
    this.modalService.close();
  }

  goToRegister() {
    this.modalService.goToModalView('register');
  }

}
