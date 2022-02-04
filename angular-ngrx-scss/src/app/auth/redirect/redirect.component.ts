import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, filter, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-redirect',
  template: `<div>Redirecting...</div>`,
})
export class RedirectComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    /**
     * When we get the code from GitHub, pass it to the authService and redirect the user to the home page
     */
    this.route.queryParamMap
      .pipe(
        filter((params) => params.has('code')),
        concatMap((params) => {
          const code = params.get('code') as string;
          return this.authService.getToken(code).pipe(
            tap(() => {
              this.router.navigate(['/']);
            }),
          );
        }),
      )
      .subscribe();
  }
}
