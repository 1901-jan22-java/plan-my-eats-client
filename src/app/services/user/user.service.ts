import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
  user$: Observable<User>;
  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loggedIn$: Observable<boolean>;

  private loginUrl: string = 'http://localhost:8085/plan-my-eats/login';
  private registerUrl: string = 'http://localhost:8085/plan-my-eats/register';

  constructor(private http: HttpClient, private router: Router) {
    this.user$ = this._user.asObservable();
    this.loggedIn$ = this._loggedIn.asObservable();
  }

  public update(user: User) {
    this._user.next(user);
  }

  public login(user: User) {
    console.log("Logging in user: " + user);
    this._loggedIn.next(true);
    this._user.next(user);
    this.router.navigate(['user-home']);
  }

  public logout() {
    console.log("Logging out user: " + this._user.getValue());
    this._loggedIn.next(false);
    this._user.next(new User());
    this.router.navigate(['home']);
  }

  public requestLogin(user: User) {
    // console.log(user);
    return this.http.post<User>(`${this.loginUrl}`, user, httpOptions);
  }

  public register(user: User) {
    // console.log(user);
    return this.http.post<User>(`${this.registerUrl}`, user, httpOptions);
  }


}
