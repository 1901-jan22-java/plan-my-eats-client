import { Recipe } from './recipe.model';
import { Restaurant } from './restaurant.model';
import { Preference } from './preference.model';

// This is going to be a class that represents our user objects
export class User {
    username: string;
    password: string;
    height: number;
    weight: number;
    age: number;
    gender: string;
    recipes: Recipe[];
    restaurants: Restaurant[];
    preferences: Preference[];
    token: string;
}
