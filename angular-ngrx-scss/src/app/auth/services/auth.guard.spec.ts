import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { selectIsAuthenticated } from 'src/app/state/auth';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenService } from './token.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let store: MockStore<unknown>;
  let tokenServiceMock: jasmine.SpyObj<TokenService>;

  beforeEach(() => {
    tokenServiceMock = jasmine.createSpyObj('TokenService', ['getToken']);
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

  it('should return true if the user is logged in', waitForAsync(() => {
    const mockAccessToken = tokenServiceMock.getToken.and.returnValue('exists');
    spyOn(window.sessionStorage, 'getItem').and.callFake(mockAccessToken);
    guard.userIsAuthenticated();
    expect(guard.canActivate()).toBeTrue();
  }));

  it('should return a url tree if the user is not logged in', waitForAsync(() => {
    store.overrideSelector(selectIsAuthenticated, false);
    const expectation = router.createUrlTree(['/signin']);
    expect(guard.canActivate()).toEqual(expectation);
  }));
});
