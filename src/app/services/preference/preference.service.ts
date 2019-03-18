import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  url: string = 'http://ec2-52-90-151-107.compute-1.amazonaws.com:8080/PlanMyEats/preference';

  constructor(private http: HttpClient) { httpOptions.headers.append('Authorization', `Bearer ${localStorage.currentUser.token}`);}

  public updatePreferences(user: User) {
    return this.http.put<User>(`${this.url}`, user, httpOptions);
  }

}
