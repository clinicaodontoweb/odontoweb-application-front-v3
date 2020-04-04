import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, shareReplay, share } from 'rxjs/operators';

import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';

import { environment } from '../environments/environment';

import { JWTPayload } from './jwtpayload'

import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

    private api = 'http://localhost:3000/token'

    constructor(private http: HttpClient) {}

    setSession(authResult) {
        const token = authResult.token;
        const payload = <JWTPayload> jwtDecode(token)
        console.log('payload', payload)
        const expiresAt = moment.unix(payload.exp)

        localStorage.setItem('token', authResult.token)
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()))
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

    teste(email: string, password: string) {
        
        return this.http.get(this.api)
            .subscribe(res => this.setSession(res))
        
        /*.pipe(
            .tap(response => this.setSession(response)),
            shareReplay()
        )*/
    }

    /*
    get token(): string {
        return localStorage.getItem('token')
    }
    
    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('expires_at')
    }

    //isLoggedIn() {
    //    return moment().isBefore(expiration())
    //}

    isLoggedOut(){
    //    return !this.isLoggedIn()
    }
    */

}