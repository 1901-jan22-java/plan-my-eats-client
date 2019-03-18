import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { APIurl } from 'src/environments/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  url: string = `${APIurl}preference/`;

  constructor(private http: HttpClient) { }

  public updatePreferences(user: User) {
    return this.http.put<User>(`${this.url}`, user, httpOptions);
  }

}
