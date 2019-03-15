// MODULES
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatTableModule, MatPaginatorModule } from '@angular/material';

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

// SERVICES
import { ModalService } from './services/modal/modal.service';
import { UserService } from './services/user/user.service';
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

    ModalComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AlertComponent,

    // NOT PART OF THE APP
    TestApiComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatPaginatorModule,

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
export class AppModule { }
