import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS WE USE
import { HomeComponent } from './components/home/home.component';

// NOT PART OF THE APP
import { TestApiComponent } from './components/test-api/test-api.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { EatInComponent } from './components/eat-in/eat-in.component';
import { EatOutComponent } from './components/eat-out/eat-out.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
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
