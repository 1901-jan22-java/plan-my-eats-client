import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eat-in',
  templateUrl: './eat-in.component.html',
  styleUrls: ['./eat-in.component.css']
})
export class EatInComponent implements OnInit {

  search: string;
  tableColumns: string[] = [
    'recipeId',
    'ingredients',
    'recipeName',
    'calories',
    'types',
  ];
  dataSource: MatTableDataSource<Recipe> = new MatTableDataSource<Recipe>();

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(resp => {
      this.dataSource = new MatTableDataSource<Recipe>(resp);
    });
  }

  searchForRecipe(){
    this.recipeService.search(this.search).subscribe(resp =>{
      this.dataSource = new MatTableDataSource<Recipe>(resp);
    });
  }

  goToHome(){
    this.router.navigate(['home']);
  }

}
