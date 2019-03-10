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
import { NavOptionsComponent } from './components/nav-options/nav-options.component';
import { MapComponent } from './components/map/map.component';
import { LoginService } from './services/login/login.service';
import { MapService } from './services/map/map.service';
import { ModalService } from './services/modal/modal.service';
import { AgmCoreModule } from '@agm/core';
import { RegisterService } from './services/register/register.service';
import { TestApiService } from './services/testapi/test-api.service'
import { TestApiComponent } from './components/test-api/test-api.component';
import { PreferencesProfileComponent } from './components/preferences-profile/preferences-profile.component'
import { LogInViewComponent } from './components/log-in-view/log-in-view.component'


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
    TestApiComponent,
    NavOptionsComponent,
    LoginRegModalComponent,
    MapComponent,
    PreferencesProfileComponent,
    LogInViewComponent,
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
    TestApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
