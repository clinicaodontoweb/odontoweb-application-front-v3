import { Component } from '@angular/core';
import { MyErrorStateMatcher } from './../input/MyErrorStateMatcher'
import {FormControl, Validators, FormGroup} from '@angular/forms'
import { AuthService } from './../auth.service'
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

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

  login(email: string, password: string) {
    this.authService.teste(email, password)
  }

}
