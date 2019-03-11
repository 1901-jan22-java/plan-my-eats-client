import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-nav-options',
  templateUrl: './nav-options.component.html',
  styleUrls: ['./nav-options.component.css']
})
export class NavOptionsComponent implements OnInit {

  loggedIn: boolean;

  constructor(private modalService: ModalService) { }

  ngOnInit() {

  }

  goToLogin() {
    this.modalService.goToModalView('login');
  }

  goToRegister() {
    this.modalService.goToModalView('register');
  }

}
