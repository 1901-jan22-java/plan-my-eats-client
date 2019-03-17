import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Restaurant } from 'src/app/models/restaurant.model';
import { MapService } from 'src/app/services/map/map.service';

@Component({
  selector: 'app-eat-out',
  templateUrl: './eat-out.component.html',
  styleUrls: ['./eat-out.component.css']
})
export class EatOutComponent implements OnInit {

  // user: User = new User();
  // restaurants: Set<Restaurant>;
  tableColumns: string[] = [
    'restaurantId',
    'name',
    'location',
    'type',
    'imgRef'
  ];
  dataSource: MatTableDataSource<Restaurant> = new MatTableDataSource<Restaurant>();

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private restaurantService: RestaurantService, private map: MapService) { }

  ngOnInit() {
    this.restaurantService.getAllRestaurants().subscribe(restaurants => {
      this.dataSource = new MatTableDataSource<Restaurant>(restaurants);
    });
  }
  
  toggleMap(){
    this.map.toggleShow();
  }

}
