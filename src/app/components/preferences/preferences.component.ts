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

  preferences = [
    { prefId: 1, type: 'health', name: 'alcohol-free', selected: false },
    { prefId: 2, type: 'health', name: 'celery-free', selected: false },
    { prefId: 3, type: 'health', name: 'crustacean-free', selected: false },
    { prefId: 4, type: 'health', name: 'dairy-free', selected: false },
    { prefId: 5, type: 'health', name: 'egg-free', selected: false },
    { prefId: 6, type: 'health', name: 'fish-free', selected: false },
    { prefId: 7, type: 'health', name: 'gluten-free', selected: false },
    { prefId: 8, type: 'health', name: 'kidney-friendly', selected: false },
    { prefId: 9, type: 'health', name: 'kosher', selected: false },
    { prefId: 10, type: 'health', name: 'low-potassium', selected: false },
    { prefId: 11, type: 'health', name: 'lupine-free', selected: false },
    { prefId: 12, type: 'health', name: 'mustard-free', selected: false },
    { prefId: 13, type: 'health', name: 'No-oil-added', selected: false },
    { prefId: 14, type: 'health', name: 'low-sugar', selected: false },
    { prefId: 15, type: 'health', name: 'paleo', selected: false },
    { prefId: 16, type: 'health', name: 'peanut-free', selected: false },
    { prefId: 17, type: 'health', name: 'pescatarian', selected: false },
    { prefId: 18, type: 'health', name: 'pork-free', selected: false },
    { prefId: 19, type: 'health', name: 'red-meat-free', selected: false },
    { prefId: 20, type: 'health', name: 'sesame-free', selected: false },
    { prefId: 21, type: 'health', name: 'shellfish-free', selected: false },
    { prefId: 22, type: 'health', name: 'soy-free', selected: false },
    { prefId: 23, type: 'health', name: 'sugar-conscious', selected: false },
    { prefId: 24, type: 'health', name: 'tree-nut-free', selected: false },
    { prefId: 25, type: 'health', name: 'vegan', selected: false },
    { prefId: 26, type: 'health', name: 'vegetarian', selected: false },
    { prefId: 27, type: 'health', name: 'wheat-free', selected: false },

    { prefId: 28, name: 'chinese', type: 'cuisine', selected: false },
    { prefId: 29, name: 'mexican', type: 'cuisine', selected: false },
    { prefId: 30, name: 'italian', type: 'cuisine', selected: false },
    { prefId: 31, name: 'japanese', type: 'cuisine', selected: false },
    { prefId: 32, name: 'greek', type: 'cuisine', selected: false },
    { prefId: 33, name: 'french', type: 'cuisine', selected: false },
    { prefId: 34, name: 'thai', type: 'cuisine', selected: false },
    { prefId: 35, name: 'spanish', type: 'cuisine', selected: false },
    { prefId: 36, name: 'indian', type: 'cuisine', selected: false },
    { prefId: 37, name: 'mediterranean', type: 'cuisine', selected: false },
    
    { prefId: 38, type: 'diet', name: 'balanced', selected: false},
    { prefId: 39, type: 'diet', name: 'high-protein', selected: false},
    { prefId: 40, type: 'diet', name: 'high-fiber', selected: false},
    { prefId: 41, type: 'diet', name: 'low-carb', selected: false},
    { prefId: 42, type: 'diet', name: 'low-fat', selected: false},
    { prefId: 43, type: 'diet', name: 'low-sodium', selected: false},
  ];


  constructor(private userService: UserService, private prefService: PreferenceService) {

  }

  ngOnInit() {
    this.userService.user$.subscribe(resp => this.user = resp);

    if (this.user != undefined) {
      for (let p of this.user.preferences) {
        for (let hp of this.preferences) {
          if (hp.prefId === p.prefId) {
            hp.selected = true;
            break;
          }
        }
      }
    }

  }

  updatePreferences() {
    var prefs: Preference[] = [];

    for (let p of this.preferences) {
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
