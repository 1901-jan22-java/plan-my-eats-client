import { Component, OnInit, ViewChild } from '@angular/core';
import { MapService } from 'src/app/services/map/map.service';
import { MapLocation } from 'src/app/models/map-location.model';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  show: boolean = false;

  currentLocation: MapLocation;
  locations: MapLocation[];
  showAllLocations: boolean = false;

  @ViewChild(AgmMap)
  public agmMap: AgmMap;

  constructor(private map: MapService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(resp => {
      this.currentLocation = {
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude
      }
    });

    this.map.show$.subscribe(resp => {
      this.show = resp
    });

    this.map.location$.subscribe(resp => {
      this.currentLocation = resp;
    });
    this.map.locations$.subscribe(resp =>{
      this.locations = resp;
    })
  }

}
