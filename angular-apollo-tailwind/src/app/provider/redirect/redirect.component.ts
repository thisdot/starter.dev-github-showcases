import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-redirect',
  template: `<div>Redirecting...</div>`,
})
export class RedirectComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService
      .getToken()
      .pipe(
        tap(() => {
          this.router.navigate(['/']);
        }),
      )
      .subscribe();
  }
}
