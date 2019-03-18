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

  url: string = 'http://ec2-52-90-151-107.compute-1.amazonaws.com:8080/PlanMyEats/restaurant';

  constructor(private http: HttpClient) { }

  public getAllRestaurants() {
    return this.http.get<Restaurant[]>(`${this.url}`, httpOptions);
  }
  
  public search(keywords: string) {
    return this.http.post<Restaurant[]>(`${this.url}`, keywords, httpOptions);
  }

}
