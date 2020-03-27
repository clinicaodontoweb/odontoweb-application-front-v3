import { Component } from '@angular/core';
import { MyErrorStateMatcher } from './../input/MyErrorStateMatcher'
import {FormControl, Validators, FormGroup} from '@angular/forms'
import { AuthService } from './../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  authService: AuthService

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ])

  exampleForm = new FormGroup({
    emailFormControl: new FormControl(),
    passwordFormControl: new FormControl()
  });

  matcher = new MyErrorStateMatcher();

  /*
  login(email: string, password: string) {
    this.authService.login(email, password)
  }
  */

}
