import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from 'src/app/models/restaurant.model';
import { APIurl } from 'src/environments/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  url: string = `${APIurl}restaurant/`;

  constructor(private http: HttpClient) { }

  public getAllRestaurants() {
    return this.http.get<Restaurant[]>(`${this.url}`, httpOptions);
  }
  
  public search(keywords: string) {
    return this.http.post<Restaurant[]>(`${this.url}`, keywords, httpOptions);
  }

}
