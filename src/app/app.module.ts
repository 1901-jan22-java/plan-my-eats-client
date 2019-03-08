import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SelectionComponent } from './components/selection/selection.component';
import { EatOutComponent } from './components/eat-out/eat-out.component';
import { EatInComponent } from './components/eat-in/eat-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginRegModalComponent } from './components/login-reg-modal/login-reg-modal.component';
import { NavLoginComponent } from './components/nav-login/nav-login.component';
import { MapComponent } from './components/map/map.component';
import { LoginService } from './services/login/login.service';
import { MapService } from './services/map/map.service';
import { ModalService } from './services/modal/modal.service';
import { AgmCoreModule } from '@agm/core';
import { RegisterService } from './services/register/register.service';


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
    NavLoginComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: ""
    }),
  ],
  providers: [
    LoginService,
    MapService,
    ModalService,
    RegisterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
