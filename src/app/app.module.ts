import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { Dialogbox } from './components/dialogbox/dialog.component';
import { ConfirmAccountComponent } from './components/auth/confirmaccount/confirm-account.component';
import { ForgetPasswordComponent } from './components/auth/forgetpassword/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './components/navigation/header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';  //ngForm
import { ReactiveFormsModule } from '@angular/forms';
import { AlertService } from './services/alert-service';
import { ApiService } from './services/api-service';
import { HttpService } from './services/http-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    Dialogbox,
    ForgetPasswordComponent,
    ConfirmAccountComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [HttpService, ApiService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
