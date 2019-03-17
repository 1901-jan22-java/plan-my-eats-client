import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.loggedIn$.subscribe(resp =>{
      this.loggedIn = resp;
    })
  }
}
