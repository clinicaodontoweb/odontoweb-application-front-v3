import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule, ShowOnDirtyErrorStateMatcher, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './login/login.component';

import { MyErrorStateMatcher } from './input/MyErrorStateMatcher';
import { ButtonComponent } from './button/button.component'

import { AuthService } from './auth.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: MyErrorStateMatcher,
      useClass: ShowOnDirtyErrorStateMatcher
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
