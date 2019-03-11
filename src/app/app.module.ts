// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

// COMPONENTS
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavOptionsComponent } from './components/navbar/nav-options/nav-options.component';

import { HomeComponent } from './components/home/home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

import { EatInComponent } from './components/user-home/eat-in/eat-in.component';
import { EatOutComponent } from './components/user-home/eat-out/eat-out.component';
import { MapComponent } from './components/user-home/map/map.component';

import { ModalComponent } from './components/modal/modal.component';
import { LoginFormComponent } from './components/modal/login-form/login-form.component';
import { RegisterFormComponent } from './components/modal/register-form/register-form.component';

// I don't know what to do with these yet
import { PreferencesComponent } from './components/user-home/preferences/preferences.component';
import { SelectionComponent } from './components/selection/selection.component';

// SERVICES
import { ModalService } from './services/modal/modal.service';
import { LoginService } from './services/login/login.service';
import { RegisterService } from './services/register/register.service';
import { MapService } from './services/map/map.service';
import { AlertComponent } from './components/alert/alert.component'

// NOT PART OF THE APP
import { TestApiComponent } from './components/test-api/test-api.component';
import { TestApiService } from './services/testapi/test-api.service';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    NavbarComponent,

    NavOptionsComponent,

    UserHomeComponent,
    EatInComponent,
    EatOutComponent,
    MapComponent,
    PreferencesComponent,

    SelectionComponent,

    ModalComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AlertComponent,

    // NOT PART OF THE APP
    TestApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: ""
    }),
  ],
  providers: [
    LoginService,
    MapService,
    ModalService,
    RegisterService,

    // NOT PART OF THE APP!
    TestApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
