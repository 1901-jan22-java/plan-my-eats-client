import { Component, OnInit, QueryList, ContentChildren, AfterViewInit } from '@angular/core';
import { MapComponent } from '../user-home/map/map.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ContentChildren(MapComponent)
  components: QueryList<MapComponent>;

  loggedIn: boolean;
  manager: boolean;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    //THIS SHOULD NOT BE EMPTY
    this.components.changes.subscribe(() => console.log(this.components.toArray()));
    //console.log(this.inputComponents.toArray());
  }

}
