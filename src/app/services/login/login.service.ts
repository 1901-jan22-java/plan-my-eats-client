import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../../models/user.model'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  url: string = 'http://localhost:8085/plan-my-eats/login'

  constructor(private http: HttpClient) { }

  public login(user: User) {
    return this.http.post<User>(`${this.url}`, user, httpOptions);
  }
}
