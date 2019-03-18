import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { PreferenceService } from 'src/app/services/preference/preference.service';
import { Preference } from 'src/app/models/preference.model';


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
  restaurantPref = [
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
      for (let p of this.user.preferences) {
        for (let hp of this.preference) {
          if (hp.prefId === p.prefId) {
            hp.selected = true;
            break;
          }
        }
        for (let cp of this.restaurantPref) {
          if (cp.prefId === p.prefId) {
            cp.selected = true;
            break;
          }
        }
      }
    }

  }

  updatePreferences() {
    var prefs: Preference[] = [];

    for (let p of this.preference) {
      if (p.selected) {
        prefs.push({ prefId: p.prefId, name: p.name, type: p.type });
        console.log(p.name + " selected");
      }
    }

    for (let p of this.restaurantPref) {
      if (p.selected) {
        prefs.push({ prefId: p.prefId, name: p.name, type: p.type });
        console.log(p.name + " selected");
      }
    }

    this.user.preferences = prefs;

    this.prefService.updatePreferences(this.user).subscribe(resp => {
      console.log(resp);
      if (resp != null) {
        this.userService.update(resp);
      }
    });

  }

}
