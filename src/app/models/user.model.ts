import { Preferences } from './preferences.model';

//This is going to be a class that represents our user objects
export class User {
    username: string;
    password: string;
    height: number;
    weight: number;
    age: number;
    gender: string;   
    recipes: string[];
    restaurants: string[];
    preferences: Preferences[];
    token: string;
}
