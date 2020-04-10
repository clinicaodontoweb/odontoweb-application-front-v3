import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service'
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.authService.getToken) {
            request = this.addToken(request, this.authService.getToken())
        }

    }

    addToken(request: HttpRequest<any>, token: String) {
        return request.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        })
    }

}