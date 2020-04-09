import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, shareReplay, share } from 'rxjs/operators';

import { environment } from '../environments/environment';


import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

    private api = 'http://localhost:3000/token'

    constructor(private http: HttpClient) {}

    isLoggedIn() {
        return this.getToken()
    }

    getToken() {
        return localStorage.getItem('token')
    }

    login(email: string, password: string) {
        return this.http.post(
            this.api.concat('/auth'),
            { email, password }
        )/*.pipe(
            .tap(response => this.setSession(response)),
            shareReplay()
        )*/
    }

    setToken(res) {
        localStorage.setItem('token', res.token)
    }

    teste(email: string, password: string) {
        
        return this.http.get(this.api)
            .subscribe(res => this.setToken(res))
        
        /*.pipe(
            .tap(response => this.setSession(response)),
            shareReplay()
        )*/
    }

}