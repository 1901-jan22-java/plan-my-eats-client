import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/models/recipe.model';

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

  public search(search: string){
    var healthSearch: string = '?';
    for(let s of search.split(' ')){
      if(s && s.length > 0){
        healthSearch += '&health=' + s;
      }
    }
    return this.http.get<Recipe[]>(`${this.url}/search${healthSearch}`);
  }

}
