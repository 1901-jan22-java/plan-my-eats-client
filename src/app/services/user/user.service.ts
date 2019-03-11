import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$: Observable<User>;
  loggedIn: boolean = false;
  private userSubject: Subject<User> = new Subject<User>();

  constructor() { 
    this.user$ = this.userSubject.asObservable();
  }

  public update(user: User) {
    this.loggedIn = true;
    this.userSubject.next(user);
  }

}
