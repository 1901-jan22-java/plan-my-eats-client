import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav-options',
  templateUrl: './user-nav-options.component.html',
  styleUrls: ['./user-nav-options.component.css']
})
export class UserNavOptionsComponent implements OnInit {

  loggedIn: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.loggedIn$.subscribe(resp => {
      this.loggedIn = resp;
    });
  }

  goToHome() {
    this.router.navigate(['home'])
  }

  goToTest() {
    this.router.navigate(['test']);
  }

  goToRestaurantHistory() {
    this.router.navigate(['history/restaurant']);
  }

  goToRecipeHistory() {
    this.router.navigate(['history/recipe']);
  }

  goToPreferences() {
    this.router.navigate(['preferences']);
  }
  
  goToEatIn() {
    this.router.navigate(['eat-in']);
  }

  goToEatOut() {
    this.router.navigate(['eat-out']);
  }

}
