import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'text/plain'})
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
    return this.http.post<string>('http://localhost:8085/plan-my-eats/testing',`${this.url}&location=${location}${this.radius}${this.type}&keyword=${keyword}${this.key}`, httpOptions);
  }

  public hitdata(location: string, keyword: string) {
    return this.http.get<string>('http://localhost:8085/plan-my-eats/testing', httpOptions);
  }
}
