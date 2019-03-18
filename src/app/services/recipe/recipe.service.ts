import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/models/recipe.model';
import { User } from 'src/app/models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url: string = 'http://localhost:8085/plan-my-eats/recipe';

  constructor(private http: HttpClient) { }

  public getRecipes(){
    return this.http.get<Recipe[]>(`${this.url}`, httpOptions);
  }

  public search(user: User) {
    return this.http.post<Recipe[]>(`${this.url}`, user, httpOptions);
  }

}
