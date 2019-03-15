import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS WE USE
import { HomeComponent } from './components/home/home.component';
import { PreferencesComponent } from './components/user-home/preferences/preferences.component';
import { EatInComponent } from './components/user-home/eat-in/eat-in.component';
import { EatOutComponent } from './components/user-home/eat-out/eat-out.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

// NOT PART OF THE APP
import { TestApiComponent } from './components/test-api/test-api.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'user-home', component: UserHomeComponent},
  {path: 'preferences', component: PreferencesComponent},
  {path: 'eat-in', component: EatInComponent},
  {path: 'eat-out', component: EatOutComponent},
  
  // NOT PART OF THE APP
  {path: 'test', component: TestApiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
