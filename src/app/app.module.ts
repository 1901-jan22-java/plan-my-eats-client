import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavOptionsComponent } from './components/nav-options/nav-options.component';
import { HomeComponent } from './components/home/home.component';
import { LoginRegModalComponent } from './components/login-reg-modal/login-reg-modal.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { PreferencesProfileComponent } from './components/preferences-profile/preferences-profile.component';
import { MapComponent } from './components/map/map.component';
import { EatInComponent } from './components/eat-in/eat-in.component';
import { EatOutComponent } from './components/eat-out/eat-out.component';
import { SelectionComponent } from './components/selection/selection.component';

import { LoginService } from './services/login/login.service';
import { MapService } from './services/map/map.service';
import { ModalService } from './services/modal/modal.service';
import { RegisterService } from './services/register/register.service';

// NOT PART OF THE APP
import { TestApiComponent } from './components/test-api/test-api.component';
import { TestApiService } from './services/testapi/test-api.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectionComponent,
    EatOutComponent,
    EatInComponent,
    LoginRegModalComponent,
    NavbarComponent,
    LoginRegModalComponent,
    SelectionComponent,
    NavOptionsComponent,
    LoginRegModalComponent,
    MapComponent,
    PreferencesProfileComponent,
    UserHomeComponent,
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
