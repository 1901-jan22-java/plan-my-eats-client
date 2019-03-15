import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from 'src/app/models/restaurant.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  url: string = 'http://localhost:8085/plan-my-eats/restaurant';

  constructor(private http: HttpClient) { }

  public getRestaurants() {
    return this.http.get<Restaurant[]>(`${this.url}`, httpOptions);
  }
  
}
