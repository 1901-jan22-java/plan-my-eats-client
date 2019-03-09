import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestApiComponent } from './components/test-api/test-api.component';
import { PreferencesProfileComponent } from './components/preferences-profile/preferences-profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'test', component: TestApiComponent},
  {path: 'profile', component: PreferencesProfileComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
