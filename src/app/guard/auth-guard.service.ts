import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if(currentUser) {
      return true;
    }

    this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
