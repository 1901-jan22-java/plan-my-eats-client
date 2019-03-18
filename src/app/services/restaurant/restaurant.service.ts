import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from 'src/app/models/restaurant.model';
import { User } from 'src/app/models/user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
};

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  url: string = 'http://localhost:8085/plan-my-eats/restaurant';

  constructor(private http: HttpClient) {
    httpOptions.headers.append('Authorization', `Bearer ${localStorage.currentUser.token}`);
   }
  
  public search(location: string, keywords: string) {
    return this.http.post<Restaurant[]>(`${this.url}`, `${location};${keywords}`, httpOptions);
  }

}
