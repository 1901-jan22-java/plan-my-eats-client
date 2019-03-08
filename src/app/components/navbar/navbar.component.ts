import { Component, OnInit, QueryList, ContentChildren, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal/modal.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  loggedIn: boolean;
  manager: boolean;
  subscription1: Subscription;
  @ContentChildren(MapComponent)
  components: QueryList<MapComponent>;

  constructor(private _navService: ModalService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    //THIS SHOULD NOT BE EMPTY
    this.components.changes.subscribe(() => console.log(this.components.toArray()));
    //console.log(this.inputComponents.toArray());
  }

  changeLog() {
    this._navService.log();
  }

}
