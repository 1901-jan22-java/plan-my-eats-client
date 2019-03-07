import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {LoginService} from '../../services/login.service'

@Component({
  selector: 'app-login-reg-modal',
  templateUrl: './login-reg-modal.component.html',
  styleUrls: ['./login-reg-modal.component.css']
})
export class LoginRegModalComponent implements OnInit {

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
