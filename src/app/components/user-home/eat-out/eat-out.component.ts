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

  user: User = new User();
  tableColumns: string[] = ['name', 'address', 'imgRef'];
  dataSource = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(restaurant =>{
      this.dataSource=restaurant;
    });

  }

}
