import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SelectionComponent } from './components/selection/selection.component';
import { EatoutComponent } from './components/eatout/eatout.component';
import { EatinComponent } from './components/eatin/eatin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectionComponent,
    EatoutComponent,
    EatinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
