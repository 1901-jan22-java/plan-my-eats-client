import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SelectionComponent } from './components/selection/selection.component';
import { EatOutComponent } from './components/eat-out/eat-out.component';
import { EatInComponent } from './components/eat-in/eat-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginRegModalComponent } from './components/login-reg-modal/login-reg-modal.component';
import { NavLoginComponent } from './components/nav-login/nav-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectionComponent,
    EatOutComponent,
    EatInComponent,
    LoginRegModalComponent,
    NavbarComponent,
    NavLoginComponent,
    LoginRegModalComponent,
    NavLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
