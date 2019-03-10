import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestApiComponent } from './components/test-api/test-api.component';
import { SelectionComponent } from './components/selection/selection.component';
import { LogInViewComponent } from './components/log-in-view/log-in-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'test', component: TestApiComponent},
  {path: 'selection', component: SelectionComponent},
  {path: 'logged', component: LogInViewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
