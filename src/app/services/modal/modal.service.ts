import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { User } from '../../models/user.model';
import { parseWebDriverCommand } from 'blocking-proxy/built/lib/webdriver_commands';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _showModal = new BehaviorSubject<string>('none');

  showItem$ = this._showModal.asObservable();


  constructor() { }

  log() {
    if(this._showModal.getValue() == 'none') {
      this._showModal.next('block');
    } else {
      this._showModal.next('none');
    }
  }
}