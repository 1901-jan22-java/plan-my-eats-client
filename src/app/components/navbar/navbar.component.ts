import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {LoginService} from '../../services/login.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;
  manager: boolean;
  subscription1:Subscription;

  constructor(private _navService: LoginService) { }

  ngOnInit() {
  }

  changeLog() {
    this._navService.log();
  }
}
