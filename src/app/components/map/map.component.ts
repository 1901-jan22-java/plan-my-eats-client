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

  show: boolean = true;
  loc: MapLocation = new MapLocation();
  locations: MapLocation[] = [];

  @ViewChild(AgmMap)
  public agmMap: AgmMap;
  
  constructor(private map: MapService) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      this.loc = data;
    });
  }

  toggleShow() {
    this.show = !this.show;
  }

}
