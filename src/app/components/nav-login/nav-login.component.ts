import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.css']
})
export class NavLoginComponent implements OnInit {

  loggedIn: boolean;
  manager: boolean;
  subscription1: Subscription;

  constructor(private _navService: LoginService) { }


  ngOnInit() {
  }

  changeLog() {
    this._navService.log();
  }
}
