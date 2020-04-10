import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';

import { catchError, mapTo, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    private api = 'http://localhost:3000/token'

    constructor(private http: HttpClient) {}

    isLoggedIn() {
        return localStorage.getItem('token')
    }

    setToken(res) {
        localStorage.setItem('token', res.token)
    }

    login(email: string, password: string): Observable<boolean> {
        return this.http.get(this.api)
            .pipe(
                tap(res => this.setToken(res)),
                mapTo(true),
            )
    }

    logoff() {
        localStorage.removeItem('token')
    }

}