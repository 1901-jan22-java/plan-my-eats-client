import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {LoginService} from '../../services/login.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  display='none';
  notReg: boolean = true;
  subscription:Subscription;

  constructor(private _navService: LoginService) { }

  ngOnInit() {
    this.subscription = this._navService.loggedItem$.subscribe(loggedIn => this.display = loggedIn);
  }

  closeModal() {
    this._navService.log();
    if(this.notReg == false) {
      this.notReg = !this.notReg;
    }
  }

  reg() {
    this.notReg = !this.notReg;
    console.log(this.notReg);
  }
}
