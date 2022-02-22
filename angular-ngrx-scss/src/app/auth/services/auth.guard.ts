import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { selectIsAuthenticated } from 'src/app/state/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userIsAuthenticated().pipe(
      map((authValue) => {
        if (authValue) {
          return true;
        }
        return this.router.createUrlTree(['/signin']);
      }),
    );
  }

  userIsAuthenticated() {
    return this.store.select(selectIsAuthenticated).pipe(take(1));
  }
}
