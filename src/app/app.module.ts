// MODULES
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatTableModule, MatPaginatorModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';

// COMPONENTS
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavOptionsComponent } from './components/navbar/nav-options/nav-options.component';

import { HomeComponent } from './components/home/home.component';
import { GeneralHomeComponent } from './components/home/general-home/general-home.component';
import { UserHomeComponent } from './components/home/user-home/user-home.component';

import { EatOutComponent } from './components/eat-out/eat-out.component';
import { EatInComponent } from './components/eat-in/eat-in.component';
import { PreferencesComponent } from './components/preferences/preferences.component';

import { MapComponent } from './components/map/map.component';

import { ModalComponent } from './components/modal/modal.component';
import { AlertComponent } from './components/modal/alert/alert.component';
import { LoginFormComponent } from './components/modal/login-form/login-form.component';
import { RegisterFormComponent } from './components/modal/register-form/register-form.component';

// I don't know what to do with these yet

// SERVICES
import { ModalService } from './services/modal/modal.service';
import { UserService } from './services/user/user.service';
import { MapService } from './services/map/map.service';

// NOT PART OF THE APP
import { TestApiComponent } from './components/test-api/test-api.component';
import { TestApiService } from './services/testapi/test-api.service';
import { UserNavOptionsComponent } from './components/navbar/user-nav-options/user-nav-options.component';

@NgModule({

  declarations: [
    AppComponent,

    NavbarComponent,
    NavOptionsComponent,

    HomeComponent,
    GeneralHomeComponent,
    UserHomeComponent,

    EatInComponent,
    EatOutComponent,
    MapComponent,
    PreferencesComponent,

    ModalComponent,
    AlertComponent,
    LoginFormComponent,
    RegisterFormComponent,

    // NOT PART OF THE APP
    TestApiComponent,

    UserNavOptionsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatPaginatorModule,

    BrowserAnimationsModule,
    NoopAnimationsModule,

    AgmCoreModule.forRoot({
      apiKey: ""
    }),

  ],

  providers: [
    ModalService,
    UserService,
    MapService,

    // NOT PART OF THE APP!
    TestApiService
  ],

  bootstrap: [AppComponent]

})
export class AppModule {

}
