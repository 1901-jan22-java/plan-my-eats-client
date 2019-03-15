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

  public _locations: BehaviorSubject<Set<MapLocation>> = new BehaviorSubject<Set<MapLocation>>(new Set<MapLocation>());
  public locations$: Observable<Set<MapLocation>> = this._locations.asObservable();

  constructor(private http: HttpClient) {
    this.show$ = this._show.asObservable();
  }

  getLocation() {
    return this.http.get<MapLocation>('https://ipapi.co/json');
  }

  toggleShow() {
    this._show.next(!this._show.getValue());
  }

  open() {
    this._show.next(true);
  }

  close() {
    this._show.next(false);
  }

  addRestaurant(newLoc: MapLocation) {
    this._locations.next(this._locations.getValue().add(newLoc));
  }

  addLocation(newLoc: MapLocation) {
    this._locations.next(this._locations.getValue().add(newLoc));
  }

}
