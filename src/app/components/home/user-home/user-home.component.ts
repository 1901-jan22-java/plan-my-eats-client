import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private userService: UserService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    console.log(this.user);
  }

  public eatIn() {
    this.router.navigate(['eat-in']);
  }

  public eatOut() {
    this.router.navigate(['eat-out']);
  }

}
