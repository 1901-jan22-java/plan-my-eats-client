import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapLocation } from 'src/app/models/map-location.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public _show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public show$: Observable<boolean> = this._show.asObservable();
  public _locations: BehaviorSubject<Set<Restaurant>> = new BehaviorSubject<Set<Restaurant>>(new Set<Restaurant>());
  public locations$: Observable<Set<Restaurant>> = this._locations.asObservable();
  
  constructor(private http: HttpClient) {
    this.show$ = this._show.asObservable();
  }

  getLocation() {
    return this.http.get<MapLocation>('https://ipapi.co/json');
  }

  toggleShow() {
    this._show.next(!this._show.getValue());
  }

  addLocation(newLoc: Restaurant) {
    this._locations.next(this._locations.getValue().add(newLoc));
  }

}
