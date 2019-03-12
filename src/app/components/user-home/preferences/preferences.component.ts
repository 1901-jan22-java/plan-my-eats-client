import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { PreferenceService } from 'src/app/services/preferences/preference.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  
  user: User = null;

  preference= [
    {prefId: 1, name: 'Balanced', selected: true}, 
    {prefId: 2, name: 'High-Fiber', selected: false}, 
    {prefId: 3, name: 'High-Protein', selected: false}, 
    {prefId: 4, name: 'Low-Carb', selected: false}, 
    {prefId: 5, name: 'Low-Fat', selected: false}, 
    {prefId: 6, name: 'Low-Sodium', selected: false}, 
    {prefId: 7, name: 'Dairy-Free', selected: false}, 
    {prefId: 8, name: 'Egg-Free', selected: false}, 
    {prefId: 9, name: 'Fish-Free', selected: false}, 
    {prefId: 10, name: 'Gluten-Free', selected: false}, 
    {prefId: 11, name: 'Low-Potassium', selected: false}, 
    {prefId: 12, name: 'Low-Sugar', selected: false}, 
    {prefId: 13, name: 'Peanut-Free', selected: false}, 
    {prefId: 14, name: 'Pescatarian', selected: false}, 
    {prefId: 15, name: 'Pork-Free', selected: false}, 
    {prefId: 16, name: 'Red-Meat-Free', selected: false}, 
    {prefId: 17, name: 'Vegan', selected: false}, 
    {prefId: 18, name: 'Vegatarian', selected: false}, 
    {prefId: 19, name: 'Wheat-Free', selected: false}, 
  ]
  restrauntPref = [
    {prefId: 20, name: 'Chinese', selected: false}, 
    {prefId: 21, name: 'Mexican', selected: false}, 
    {prefId: 22, name: 'Italian', selected: false}, 
    {prefId: 23, name: 'Japanese', selected: false}, 
    {prefId: 24, name: 'Greek', selected: false}, 
    {prefId: 25, name: 'French', selected: false}, 
    {prefId: 26, name: 'Thai', selected: false}, 
    {prefId: 27, name: 'Spanish', selected: false}, 
    {prefId: 28, name: 'Indian', selected: false}, 
    {prefId: 29, name: 'Mediterranean', selected: false}
  ]


  constructor(private userService: UserService, private prefService: PreferenceService, private router: Router){

   }

  ngOnInit() {
    this.userService.user$.subscribe(resp => this.user = resp);
  }

  updatePreferences()
  {
    for(let i = 0; i < this.preference.length; i++)
    {
      if(this.preference[i].selected)
      {  
        this.user.preferences.push({ prefId: this.preference[i].prefId, name: this.preference[i].name });
        console.log(this.preference[i].name + " selected");
      }
    }
    for(let i = 0; i < this.restrauntPref.length; i++)
    {
      if(this.restrauntPref[i].selected)
      {
        this.user.preferences.push({prefId: this.restrauntPref[i].prefId, name: this.restrauntPref[i].name });
        console.log(this.restrauntPref[i].name + " selected");
      }
    }
    this.prefService.updatePreferences(this.user).subscribe(resp => {
      console.log(resp);
      if(resp != null)
      {
        this.router.navigate(['user-home']);
        this.userService.update(resp);
      }
    })
  }
}
