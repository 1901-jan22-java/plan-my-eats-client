import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Observable, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user$: Observable<User>;
  private userSubject: Subject<User> = new Subject<User>();

  url: string = 'http://localhost:8081/plan-my-eats/login';

  constructor(private http: HttpClient) {
    this.user$ = this.userSubject.asObservable();
  }

  public login(user: User) {
    return this.http.post<User>(`${this.url}`, user, httpOptions);
  }

  public sendUser(user: User) {
    this.userSubject.next(user);
  }

}
