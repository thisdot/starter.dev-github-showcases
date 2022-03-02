import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { loadUserToken, selectIsAuthenticated } from 'src/app/state/auth';
@Component({
  selector: 'app-redirect',
  template: `<div>Redirecting...</div>`,
})
export class RedirectComponent implements OnInit {
  isAuthenticated$ = this.store.select(selectIsAuthenticated);
  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadUserToken());
    this.isAuthenticated$.pipe(take(2)).subscribe((val) => {
      if (val) {
        this.router.navigate(['/']);
      }
    });
  }
}
