import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  url: string = 'http://localhost:8085/plan-my-eats/preference';

  constructor(private http: HttpClient) { }

  public updatePreferences(user: User)
  {
    return this.http.post<User>(`${this.url}`, user, httpOptions);
  }
}
