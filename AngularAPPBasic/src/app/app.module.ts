import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import {UserAuthModule} from './user-auth/user-auth.module';
import { CounterComponent } from './counter/counter.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { ForloopComponent } from './forloop/forloop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StudentListComponent,
    CounterComponent,
    IfelseComponent,
    SwitchCaseComponent,
    ForloopComponent,
    StyleBindingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
