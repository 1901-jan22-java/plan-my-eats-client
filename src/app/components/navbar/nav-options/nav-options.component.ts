import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-nav-options',
  templateUrl: './nav-options.component.html',
  styleUrls: ['./nav-options.component.css']
})
export class NavOptionsComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(private userService: UserService,
    private modalService: ModalService) {
      
  }

  ngOnInit() {
    this.userService.loggedIn$.subscribe(resp => this.loggedIn = resp);
  }

  goToLogin() {
    this.modalService.goToModalView('login');
  }

  goToRegister() {
    this.modalService.goToModalView('register');
  }

  logoutUser() {
    this.userService.logout();
  }

}
