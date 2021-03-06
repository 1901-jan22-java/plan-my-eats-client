import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapLocation } from 'src/app/models/map-location.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public _show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public show$: Observable<boolean> = this._show.asObservable();

  public _locations: BehaviorSubject<MapLocation[]> = new BehaviorSubject<MapLocation[]>([]);
  public locations$: Observable<MapLocation[]> = this._locations.asObservable();

  public _location: BehaviorSubject<MapLocation> = new BehaviorSubject<MapLocation>(new MapLocation());
  public location$: Observable<MapLocation> = this._location.asObservable();

  constructor(private http: HttpClient, private userService: UserService) {
    this.show$ = this._show.asObservable();
    this.locations$ = this._locations.asObservable();
    this.location$ = this._location.asObservable();
    this.userService.user$.subscribe(resp => {
      for (let r of resp.restaurants) {
        this._locations.getValue().push(r);
      }
    });
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

  setLocation(lat: number, lon: number) {
    let loc = new MapLocation();
    loc.latitude = lat;
    loc.longitude = lon;
    this._location.next(loc);
  }

  setMapLocation(newLoc: MapLocation){
    this._location.next(newLoc);
  }

  addLocation(newLoc: MapLocation) {
    var locs = this._locations.getValue();
    if(locs.includes(newLoc)){
      return;
    }
    locs.push(newLoc);
    this._locations.next(locs);
  }

}
