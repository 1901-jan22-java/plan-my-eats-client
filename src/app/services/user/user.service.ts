import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(new User);
  user$: Observable<User>;

  loggedIn: boolean = false;

  constructor(private router: Router) {
    this.user$ = this.userSubject.asObservable();
  }

  public update(user: User) {
    console.log("Logging user: " + user);
    this.loggedIn = true;
    this.userSubject.next(user);
    this.router.navigate(['user-home']);
  }

}
