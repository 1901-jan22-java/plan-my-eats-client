import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _loggedIn = new BehaviorSubject<string>('none');

  loggedItem$ = this._loggedIn.asObservable();

  constructor() { }

  log() {
    if(this._loggedIn.getValue() == 'none') {
      this._loggedIn.next('block');
    } else {
      this._loggedIn.next('none');
    }
  }
}
