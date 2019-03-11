import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-nav-options',
  templateUrl: './nav-options.component.html',
  styleUrls: ['./nav-options.component.css']
})
export class NavOptionsComponent implements OnInit {

  loggedIn: boolean;
  manager: boolean;
  subscription1: Subscription;

  constructor(private _navService: ModalService) { }

  ngOnInit() {

  }

  changeLog() {
    this._navService.log();
  }

}
