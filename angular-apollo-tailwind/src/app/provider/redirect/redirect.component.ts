import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, filter, tap } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-redirect',
  template: `<div>Redirecting...</div>`,
})
export class RedirectComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // ActivatedRoute is destroyed when Router destoys the component
    // and doesn't need to be unsubscribed.
    // https://angular.io/guide/router-tutorial-toh#observable-parammap-and-component-reuse
    this.route.queryParamMap
      .pipe(
        filter((params) => params.has('code')),
        concatMap((params) => {
          const code = params.get('code') as string;
          return this.authService.getToken(code).pipe(
            tap(() => {
              this.router.navigate(['/']);
            })
          );
        })
      )
      .subscribe();
  }
}
