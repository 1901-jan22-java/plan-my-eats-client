import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/models/recipe.model';
import { APIurl } from 'src/environments/api';
import { User } from 'src/app/models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url: string = `${APIurl}recipe/`;

  constructor(private http: HttpClient) { }

  public getRecipes() {
    return this.http.get<Recipe[]>(`${this.url}`, httpOptions);
  }

  public searchBasic(search: string) {
    var healthSearch: string = '?';
    for (let s of search.split(' ')) {
      if (s && s.length > 0) {
        healthSearch += '&health=' + s;
      }
    }
    return this.http.get<Recipe[]>(`${this.url}/search${healthSearch}`);
  }
  
  public search(user: User) {
    return this.http.post<Recipe[]>(`${this.url}`, user, httpOptions);
  }

}
