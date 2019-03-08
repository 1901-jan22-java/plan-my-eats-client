import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class TestApiService {

  url: string = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'

  radius: string = '&radius=1500';
  type: string = '&type=restaurant';
  key: string = '&key=AIzaSyAv7FWb5nyCLZw9fxrpkaKLc3NS1BRGeXM';

  constructor(private http: HttpClient) { }

  public getData(location: string, keyword: string) {
    return this.http.post<any>('localhost:8085/plan-my-eats/testing',`${this.url}&location=${location}${this.radius}${this.type}&keyword=${keyword}${this.key}`, httpOptions);
  }
}
