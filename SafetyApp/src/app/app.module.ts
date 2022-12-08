import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterModule, RoutesRecognized } from '@angular/router';
import * as path from 'path';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot([
     {path :'welcome',component:WelcomeComponent},
     {path :'register',component:RegisterComponent},
     {path :'login',component:LoginComponent},


     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
