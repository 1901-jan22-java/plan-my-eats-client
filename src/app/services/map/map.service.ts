import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapLocation } from 'src/app/models/map-location.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<MapLocation>('https://ipapi.co/json');
  }

}
