import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
};

@Injectable({
  providedIn: 'root'
})

export class TestApiService {

  serverUrl: string = 'http://ec2-52-90-151-107.compute-1.amazonaws.com:8080/PlanMyEats/testing';
  url: string = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';

  radius: string = '&radius=1500';
  type: string = '&type=restaurant';
  key: string = '&key=AIzaSyAv7FWb5nyCLZw9fxrpkaKLc3NS1BRGeXM';

  constructor(private http: HttpClient) { }

  public getData(location: string, keyword: string) {
    return this.http.post<string>(`${this.serverUrl}`,
      `${this.url}&location=${location}${this.radius}${this.type}&keyword=${keyword}${this.key}`,
      httpOptions);
  }

  public test() {
    return this.http.get<string>(`${this.serverUrl}`, httpOptions);
  }

}
