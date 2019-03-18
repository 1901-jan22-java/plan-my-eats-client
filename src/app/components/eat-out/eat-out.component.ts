import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Restaurant } from 'src/app/models/restaurant.model';
import { MapService } from 'src/app/services/map/map.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-eat-out',
  templateUrl: './eat-out.component.html',
  styleUrls: ['./eat-out.component.css']
})
export class EatOutComponent implements OnInit {

  user: User;
  location: string;
  keyword: string;
  
  tableColumns: string[] = [
    'name',
    'location',
    'type',

  ];
  dataSource: MatTableDataSource<Restaurant> = new MatTableDataSource<Restaurant>();

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private restaurantService: RestaurantService, 
    private map: MapService, 
    private router: Router, 
    private userService: UserService) { }

  ngOnInit() {
    // this.restaurantService.getAllRestaurants().subscribe(restaurants => {
    //   this.dataSource = new MatTableDataSource<Restaurant>(restaurants);
    // });
    this.getLocation();
    this.user = this.userService.user;
    console.log(this.user);
  }

   //This is using an arrow function because otherwise lexical context is lost. 
   getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.location = position.coords.latitude + "," + position.coords.longitude
    });
  }

  toggleMap() {
    this.map.toggleShow();
  }
  goToHome() {
    this.router.navigate(['home']);
  }

  surprise() {
    let index = Math.floor(Math.random()*this.user.preferences.length);
    console.log(index);
    console.log(this.location);
    this.restaurantService.search(this.location, this.user.preferences[index].name).subscribe(restaurants => {
      console.log(restaurants);
      this.dataSource = new MatTableDataSource<Restaurant>(restaurants);
    });
  }
}
