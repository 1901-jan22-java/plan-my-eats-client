import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { APIurl } from 'src/environments/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = APIurl;

  private _user: BehaviorSubject<User>;
  private _loggedIn: BehaviorSubject<boolean>;

  public user$: Observable<User>;
  public loggedIn$: Observable<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this._user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this._loggedIn = new BehaviorSubject<boolean>(false);

    this.user$ = this._user.asObservable();
    this.loggedIn$ = this._loggedIn.asObservable();

    if (this._user.getValue() && this._user.getValue().token != '') {
      httpOptions.headers.append('Authorization', `Bearer ${localStorage.currentUser.token}`);
      this._loggedIn.next(true);
    }
  }

  public get user(): User {
    return this._user.getValue();
  }

  public update(user: User) {
    console.log('Updating User: ' + user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this._user.next(user);
    this.router.navigate(['home']);
  }

  public login(user: User) {
    console.log('Logging in User: ' + user);
    return this.authenticate(`${this.url}login`, user);
  }

  public register(user: User) {
    console.log('Registering User: ' + user);
    return this.authenticate(`${this.url}register`, user);
  }

  private authenticate(paramURL: string, user: User) {
    return this.http.post<User>(paramURL, user, httpOptions)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log("User returned: " + user);
          this._loggedIn.next(true);
          this._user.next(user);
        }
        return user;
      }));
  }

  public logout() {
    console.log("Logging out user: " + this._user.getValue());

    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this._user.next(new User());
    this._loggedIn.next(false);
    this.router.navigate(['home']);
  }

}
