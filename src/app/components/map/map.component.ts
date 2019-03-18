import { Component, OnInit, ViewChild } from '@angular/core';
import { MapService } from 'src/app/services/map/map.service';
import { MapLocation } from 'src/app/models/map-location.model';
import { AgmMap } from '@agm/core';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  show: boolean = false;

  currentLocation: MapLocation;
  locations: Set<MapLocation>;

  @ViewChild(AgmMap)
  public agmMap: AgmMap;

  constructor(private map: MapService) { }

  ngOnInit() {
    // this.map.getLocation().subscribe(data => {
    //   this.currentLocation = data;
    // });
    this.map.show$.subscribe(resp => {
      this.show = resp
    });
    this.map.restaurant$.subscribe(resp => {
      this.currentLocation = resp;
    });
  }

}
