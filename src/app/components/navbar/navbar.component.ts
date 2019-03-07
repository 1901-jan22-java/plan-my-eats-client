import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {Subscription} from 'rxjs';
import {LoginService} from '../../services/login.service'
>>>>>>> Edwin

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  loggedIn: boolean;
  manager: boolean;
  subscription1:Subscription;

  constructor(private _navService: LoginService) { }
>>>>>>> Edwin

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  changeLog() {
    this._navService.log();
  }
>>>>>>> Edwin
}
