import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ModalService} from '../../services/modal/modal.service'

@Component({
  selector: 'app-login-reg-modal',
  templateUrl: './login-reg-modal.component.html',
  styleUrls: ['./login-reg-modal.component.css']
})
export class LoginRegModalComponent implements OnInit {
  display='none';
  notReg: boolean = true;
  subscription:Subscription;

  constructor(private _navService: ModalService) { }

  ngOnInit() {
    this.subscription = this._navService.showItem$.subscribe(showModal => this.display = showModal);
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
