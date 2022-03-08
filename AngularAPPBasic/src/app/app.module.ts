import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserLoginComponent } from './User-Auth/user-login/user-login.component';
import { UserRegisterComponent } from './User-Auth/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserAuthComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
