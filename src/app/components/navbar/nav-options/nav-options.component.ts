import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-options',
  templateUrl: './nav-options.component.html',
  styleUrls: ['./nav-options.component.css']
})
export class NavOptionsComponent implements OnInit {

  loggedIn: boolean;

  constructor(private modalService: ModalService, private router: Router) { }

  ngOnInit() {

  }

  goToLogin() {
    this.modalService.goToModalView('login');
  }

  goToRegister() {
    this.modalService.goToModalView('register');
  }

  goToPreferences()
  {
    this.router.navigate(['preferences']);
  }

}
