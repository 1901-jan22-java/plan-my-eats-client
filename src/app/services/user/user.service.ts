import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

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

  private url: string = 'http://localhost:8085/plan-my-eats/';

  constructor(private http: HttpClient, private router: Router) {
    this.user$ = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser'))).asObservable();
    this.loggedIn$ = this._loggedIn.asObservable();
    console.log("WE ARE HERE!");
    if(this._user.value.token != '') {
      this._loggedIn.next(true);
    }
  }

  public update(user: User) {
    console.log('Updating user: ' + user);
    this._user.next(user);
  }

  public login(user: User) {
    console.log('Logging in user: ' + user);
    return this.http.post<any>('http://localhost:8085/plan-my-eats/login', user)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log(user);
                    this._user.next(user);
                    this._loggedIn.next(true);
                    this.router.navigate(['user-home']);
                }
                return user;
            }));
  }

  public logout() {
    console.log("Logging out user: " + this._user.getValue());
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this._user.next(null);
    this._loggedIn.next(false);
    this.router.navigate(['home']);
  }

  public requestLogin(user: User) {
    // console.log(user);
    return this.http.post<User>(`${this.url}login`, user, httpOptions);
  }

  public register(user: User) {
    // console.log(user);
    return this.http.post<User>(`${this.url}register`, user, httpOptions);
  }


}
