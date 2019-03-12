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

  url: string = 'http://localhost:8085/plan-my-eats/register'

  constructor(private http: HttpClient) { 
  }

  public register(user: User) {
    // console.log(user);
    return this.http.post<User>(`${this.url}`, user, httpOptions);
  }

}