import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapLocation } from 'src/app/models/map-location.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantService } from '../restaurant/restaurant.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public _show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public show$: Observable<boolean> = this._show.asObservable();

  public _locations: BehaviorSubject<Set<MapLocation>> = new BehaviorSubject<Set<MapLocation>>(new Set<MapLocation>());
  public locations$: Observable<Set<MapLocation>> = this._locations.asObservable();

  public _restaurant: BehaviorSubject<MapLocation> = new BehaviorSubject<MapLocation>(new MapLocation());
  public restaurant$: Observable<MapLocation> = this._restaurant.asObservable();

  constructor(private http: HttpClient, private userService: UserService) {
    this.show$ = this._show.asObservable();
    this.userService.user$.subscribe(resp =>{
      resp.restaurants.forEach(res => {
        this.addLocation(res);
      });
    });
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

  setLocation(lat: string, lon: string) {
    let loc = new MapLocation();
    loc.latitude = lat;
    loc.longitude = lon;
    this._restaurant.next(loc);
  }

  addRestaurant(newLoc: Restaurant) {
    this._locations.next(this._locations.getValue().add(newLoc));
  }

  addLocation(newLoc: MapLocation) {
    this._locations.next(this._locations.getValue().add(newLoc));
  }

}
