import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './../auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  logoff() {
    this.authService.logoff()
    return this.router.navigate(['/login'])
  }

  canActivate() {
    console.log('home component')
    if (this.authService.isLoggedIn()) {
      return this.router.navigate(['/home'])
    }
    return !this.authService.isLoggedIn()
  }

}
