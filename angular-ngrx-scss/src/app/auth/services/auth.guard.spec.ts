import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { selectIsAuthenticated } from 'src/app/state/auth';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let store: MockStore<unknown>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        provideMockStore({}),
        // other providers
      ],
    });

    router = TestBed.inject(Router);
    store = TestBed.inject(MockStore);
    guard = TestBed.inject(AuthGuard);
  });

  it(
    'should return true if the user state is logged in',
    waitForAsync(() => {
      store.overrideSelector(selectIsAuthenticated, true);
      guard.canActivate().subscribe((value) => expect(value).toBeTrue());
    }),
  );

  it(
    'should return false if the user state is not logged in',
    waitForAsync(() => {
      store.overrideSelector(selectIsAuthenticated, false);
      const expectation = router.createUrlTree(['/signin']);
      guard
        .canActivate()
        .subscribe((value) => expect(value).toEqual(expectation));
    }),
  );
});
