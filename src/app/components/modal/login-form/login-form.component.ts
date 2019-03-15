import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../services/authentication/alert.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  logging: User = new User();
  returnUrl: string;
  loading = false;

  constructor(private loginService: LoginService, 
    private alertService: AlertService,
    private router: Router,
    private userService: UserService, 
    private modalService: ModalService,
    private authenticationServiceService: AuthenticationService) {
    
    // redirect to home if already logged in
    if (this.authenticationServiceService.currentUserValue) { 
      this.router.navigate(['/']);
  }
  }

  ngOnInit() {
  }

  loginUser() {
    this.authenticationServiceService.login(this.logging)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['user-home']);
        this.closeModal();
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
    });
  }

  closeModal() {
    this.modalService.toggle();
  }

  goToRegister() {
    this.modalService.goToModalView('register');
  }

}
