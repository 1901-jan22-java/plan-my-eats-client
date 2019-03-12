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
    {name: 'Balanced', selected: true}, 
    {name: 'High-Fiber', selected: false}, 
    {name: 'High-Protein', selected: false}, 
    {name: 'Low-Carb', selected: false}, 
    {name: 'Low-Fat', selected: false}, 
    {name: 'Low-Sodium', selected: false}, 
    {name: 'Dairy-Free', selected: false}, 
    {name: 'Egg-Free', selected: false}, 
    {name: 'Fish-Free', selected: false}, 
    {name: 'Gluten-Free', selected: false}, 
    {name: 'Low-Potassium', selected: false}, 
    {name: 'Low-Sugar', selected: false}, 
    {name: 'Peanut-Free', selected: false}, 
    {name: 'Pescatarian', selected: false}, 
    {name: 'Pork-Free', selected: false}, 
    {name: 'Red-Meat-Free', selected: false}, 
    {name: 'Vegan', selected: false}, 
    {name: 'Vegatarian', selected: false}, 
    {name: 'Wheat-Free', selected: false}, 
  ]
  restrauntPref = [
    {name: 'Chinese', selected: false}, 
    {name: 'Mexican', selected: false}, 
    {name: 'Italian', selected: false}, 
    {name: 'Japanese', selected: false}, 
    {name: 'Greek', selected: false}, 
    {name: 'French', selected: false}, 
    {name: 'Thai', selected: false}, 
    {name: 'Spanish', selected: false}, 
    {name: 'Indian', selected: false}, 
    {name: 'Mediterranean', selected: false}
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
        this.user.preferences.push({ name: this.preference[i].name });
        console.log(this.preference[i].name + " selected");
      }
    }
    for(let i = 0; i < this.restrauntPref.length; i++)
    {
      if(this.restrauntPref[i].selected)
      {
        this.user.preferences.push({ name: this.restrauntPref[i].name });
        console.log(this.restrauntPref[i].name + " selected");
      }
    }
    this.prefService.updatePreferences(this.user).subscribe(resp => {
      console.log(resp);
      if(resp != null && resp instanceof User)
      {
        this.router.navigate(['user-home']);
        this.userService.update(resp);
      }
    })
  }
}
