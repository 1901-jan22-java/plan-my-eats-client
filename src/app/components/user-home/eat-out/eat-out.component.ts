import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
@Component({
  selector: 'app-eat-out',
  templateUrl: './eat-out.component.html',
  styleUrls: ['./eat-out.component.css']
})
export class EatOutComponent implements OnInit {
  user: User = null;
  tableColumns: string[] = ['name', 'type', 'location'];
  dataSource = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(restaurant =>{
      this.dataSource=restaurant;
    });

  }

}
