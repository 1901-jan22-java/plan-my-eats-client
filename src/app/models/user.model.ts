import { Preference } from './preference.model';
import {Restaurant} from './restaurant.model';
//This is going to be a class that represents our user objects
export class User {
    username: string;
    password: string;
    height: number;
    weight: number;
    age: number;
    gender: string;   
    recipes: string[];
    restaurants: Set<Restaurant>;
    preferences: Set<Preference>;
}
