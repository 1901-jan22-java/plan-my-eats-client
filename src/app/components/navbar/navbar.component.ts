import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ModalService} from '../../services/modal/modal.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;
  manager: boolean;
  subscription1:Subscription;

  constructor(private _navService: ModalService) { }

  ngOnInit() {
    
  }

}
