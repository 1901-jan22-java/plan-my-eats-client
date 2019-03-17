import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, 
    private router: Router,
    private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.userService.user$.subscribe(resp => this.user = resp);
  }

  public eatIn() {
    this.router.navigate(['eat-in']);
  }

  public eatOut() {
    this.router.navigate(['eat-out']);
  }

}