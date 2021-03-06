import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-eat-in',
  templateUrl: './eat-in.component.html',
  styleUrls: ['./eat-in.component.css']
})
export class EatInComponent implements OnInit {

  search: string;
  user: User;

  tableColumns: string[] = [
    'recipeName',
    'ingredients',
    'calories',
    'url',
  ];
  dataSource: MatTableDataSource<Recipe> = new MatTableDataSource<Recipe>();

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private recipeService: RecipeService, private router: Router, private userService: UserService) {

  }

  ngOnInit() {
    this.user = this.userService.user;
  }

  choose(recipe: Recipe){
    this.user.recipes.push(recipe);
    this.userService.saveUser(this.user).subscribe(resp => {
      this.userService.update(resp);
    });
  }

  surprise() {
    this.recipeService.search(this.user).subscribe(recipes => {
      console.log(recipes);
      this.dataSource = new MatTableDataSource<Recipe>(recipes);
    });
  }

  searchForRecipe() {
    this.recipeService.searchByKeywords(this.search).subscribe(resp => {
      console.log(resp);
      this.dataSource = new MatTableDataSource<Recipe>(resp);
    });
  }

  goToHome() {
    this.router.navigate(['home']);
  }

}
