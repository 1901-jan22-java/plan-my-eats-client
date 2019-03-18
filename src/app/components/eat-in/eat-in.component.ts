import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-eat-in',
  templateUrl: './eat-in.component.html',
  styleUrls: ['./eat-in.component.css']
})
export class EatInComponent implements OnInit {

  user: User;

  tableColumns: string[] = [
    'ingredients',
    'recipeName',
    'calories',
    'types',
  ];
  dataSource: MatTableDataSource<Recipe> = new MatTableDataSource<Recipe>();

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private recipeService: RecipeService, private userService: UserService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.dataSource = new MatTableDataSource<Recipe>(recipes);
    });
    this.user = this.userService.user;
  }

  surprise() {
    
  }
}
