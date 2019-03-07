import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { SelectionComponent } from './components/selection/selection.component';
import { EatoutComponent } from './components/eatout/eatout.component';
import { EatinComponent } from './components/eatin/eatin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
=======
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginRegModalComponent } from './components/login-reg-modal/login-reg-modal.component';
>>>>>>> Edwin

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
    SelectionComponent,
    EatoutComponent,
    EatinComponent,
    NavbarComponent
=======
    NavbarComponent,
    LoginRegModalComponent
>>>>>>> Edwin
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
