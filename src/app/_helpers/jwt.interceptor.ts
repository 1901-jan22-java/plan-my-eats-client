import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserService } from '../services/user/user.service';
import { User } from '../models/user.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    user: User = new User();

    constructor(private userService: UserService) {
        this.userService.user$.subscribe(resp => this.user = resp);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.user;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}