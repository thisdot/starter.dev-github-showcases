import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { userTokenExists } from 'src/app/state/auth';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private tokenService: TokenService,
    private router: Router,
  ) {}

  canActivate(): boolean | UrlTree {
    return this.userIsAuthenticated()
      ? true
      : this.router.createUrlTree(['/signin']);
  }

  userIsAuthenticated(): boolean {
    const accessTokenExists = !!this.tokenService.getToken();
    if (accessTokenExists) {
      this.store.dispatch(userTokenExists({ isAuthenticated: true }));
      return true;
    } else {
      return false;
    }
  }
}
