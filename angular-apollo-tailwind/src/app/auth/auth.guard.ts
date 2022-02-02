import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // TODO: Possible possible strategy
    // this.authService.getToken(code).pipe(
    //   tap((token) => {
    //     if(!token) {
    //       // call endpoint to get token as a poll
    //     }
    //   }),
    //   filter(token => token),
    //   take(1)
    // )
    if (this.authService.isAuthenticated()) {
      return true;
    }

    return this.router.createUrlTree(['/signin']);
  }
}
