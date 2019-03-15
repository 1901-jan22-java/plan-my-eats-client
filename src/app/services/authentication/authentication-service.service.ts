import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentuserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User> = this.currentuserSubject.asObservable();

  constructor(private http: HttpClient) {
    this.currentuserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentuserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentuserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`http://localhost:8085/plan-my-eats/login`, { username, password }).pipe(map(user => {
      //login successful if there is a JWT token in the response
      if (user && user.token) {
        //store user details and JWT token in local storage to keep user loggin in between refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentuserSubject.next(user);
      }
      return user;
    }));
  }

  logout() {
    //remove user from local storage to log out
    localStorage.removeItem('currentUser');
    this.currentuserSubject.next(null);
  }

}
