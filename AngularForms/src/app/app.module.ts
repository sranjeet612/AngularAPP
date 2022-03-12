import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestBootstrapComponent } from './test-bootstrap/test-bootstrap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestMaterialUiComponent } from './test-material-ui/test-material-ui.component';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    TestBootstrapComponent,
    TestMaterialUiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }