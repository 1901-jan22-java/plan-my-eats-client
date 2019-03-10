import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user$: Observable<User>;
  private userSubject: Subject<User> = new Subject<User>();
  
  url: string = 'http://localhost:8081/plan-my-eats/register'

  constructor(private http: HttpClient) { 
    this.user$ = this.userSubject.asObservable();
  }

  public register(user: User) {
    return this.http.post<User>(`${this.url}`, user, httpOptions);
  }

  public sendUser(user: User) {
    this.userSubject.next(user);
  }

}