import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS WE USE
import { HomeComponent } from './components/home/home.component';
import { PreferencesProfileComponent } from './components/preferences-profile/preferences-profile.component';
import { EatInComponent } from './components/eat-in/eat-in.component';
import { EatOutComponent } from './components/eat-out/eat-out.component';
import { SelectionComponent } from './components/selection/selection.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

// NOT PART OF THE APP
import { TestApiComponent } from './components/test-api/test-api.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'user-home', component: UserHomeComponent},
  {path: 'profile', component: PreferencesProfileComponent},
  {path: 'eat-in', component: EatInComponent},
  {path: 'eat-out', component: EatOutComponent},
  {path: 'selection', component: SelectionComponent},
  
  // NOT PART OF THE APP
  {path: 'test', component: TestApiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
