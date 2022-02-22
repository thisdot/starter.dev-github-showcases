import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUserToken } from 'src/app/state/auth';
import { selectIsAuthenticated } from 'src/app/state/auth';
@Component({
  selector: 'app-redirect',
  template: `<div>Redirecting...</div>`,
})
export class RedirectComponent implements OnInit {
  isAuthenticated$ = this.store.select(selectIsAuthenticated);
  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadUserToken());
    this.isAuthenticated$.subscribe((val) => {
      if (val) {
        this.router.navigate(['/']);
      }
    });
  }
}
