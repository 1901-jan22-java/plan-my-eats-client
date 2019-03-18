import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { PreferenceService } from 'src/app/services/preference/preference.service';


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  user: User = new User();

  preference = [
    { prefId: 1, name: 'Balanced', type: 'health', selected: false },
    { prefId: 2, name: 'High-Fiber', type: 'health', selected: false },
    { prefId: 3, name: 'High-Protein', type: 'health', selected: false },
    { prefId: 4, name: 'Low-Carb', type: 'health', selected: false },
    { prefId: 5, name: 'Low-Fat', type: 'health', selected: false },
    { prefId: 6, name: 'Low-Sodium', type: 'health', selected: false },
    { prefId: 7, name: 'Dairy-Free', type: 'health', selected: false },
    { prefId: 8, name: 'Egg-Free', type: 'health', selected: false },
    { prefId: 9, name: 'Fish-Free', type: 'health', selected: false },
    { prefId: 10, name: 'Gluten-Free', type: 'health', selected: false },
    { prefId: 11, name: 'Low-Potassium', type: 'health', selected: false },
    { prefId: 12, name: 'Low-Sugar', type: 'health', selected: false },
    { prefId: 13, name: 'Peanut-Free', type: 'health', selected: false },
    { prefId: 14, name: 'Pescatarian', type: 'health', selected: false },
    { prefId: 15, name: 'Pork-Free', type: 'health', selected: false },
    { prefId: 16, name: 'Red-Meat-Free', type: 'health', selected: false },
    { prefId: 17, name: 'Vegan', type: 'health', selected: false },
    { prefId: 18, name: 'Vegatarian', type: 'health', selected: false },
    { prefId: 19, name: 'Wheat-Free', type: 'health', selected: false },
  ]
  restrauntPref = [
    { prefId: 20, name: 'Chinese', type: 'cuisine', selected: false },
    { prefId: 21, name: 'Mexican', type: 'cuisine', selected: false },
    { prefId: 22, name: 'Italian', type: 'cuisine', selected: false },
    { prefId: 23, name: 'Japanese', type: 'cuisine', selected: false },
    { prefId: 24, name: 'Greek', type: 'cuisine', selected: false },
    { prefId: 25, name: 'French', type: 'cuisine', selected: false },
    { prefId: 26, name: 'Thai', type: 'cuisine', selected: false },
    { prefId: 27, name: 'Spanish', type: 'cuisine', selected: false },
    { prefId: 28, name: 'Indian', type: 'cuisine', selected: false },
    { prefId: 29, name: 'Mediterranean', type: 'cuisine', selected: false }
  ];


  constructor(private userService: UserService, private prefService: PreferenceService) {

  }

  ngOnInit() {
    this.userService.user$.subscribe(resp => this.user = resp);

    if (this.user != undefined) {
      for (let i = 0; i < this.user.preferences.length; i++) {
        for (let k = 0; k < this.preference.length; k++) {
          if (this.preference[k].prefId === this.user.preferences[i].prefId) {
            this.preference[k].selected = true;
            break;
          }
        }
        for (let k = 0; k < this.restrauntPref.length; k++) {
          if (this.restrauntPref[k].prefId === this.user.preferences[i].prefId) {
            this.restrauntPref[k].selected = true;
            break;
          }
        }
      }
    }

  }

  updatePreferences() {

    for (let i = 0; i < this.preference.length; i++) {
      if (this.preference[i].selected) {
        this.user.preferences.push({ prefId: this.preference[i].prefId, name: this.preference[i].name });
        console.log(this.preference[i].name + " selected");
      }
    }

    for (let i = 0; i < this.restrauntPref.length; i++) {
      if (this.restrauntPref[i].selected) {
        this.user.preferences.push({ prefId: this.restrauntPref[i].prefId, name: this.restrauntPref[i].name });
        console.log(this.restrauntPref[i].name + " selected");
      }
    }

    this.prefService.updatePreferences(this.user).subscribe(resp => {
      console.log(resp);
      if (resp != null) {
        this.userService.update(resp);
      }
    });

  }

}
