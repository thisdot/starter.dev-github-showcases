import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

describe('AuthGuard', () => {
  let routerSpy: jasmine.SpyObj<Router>;
  let authService: AuthService;
  let tokenService: jasmine.SpyObj<TokenService>;
  let httpClient: jasmine.SpyObj<HttpClient>;
  let guard: AuthGuard;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['createUrlTree']);
    tokenService = jasmine.createSpyObj('TokenService', ['getToken']);
    authService = new AuthService(httpClient, tokenService);
    guard = new AuthGuard(authService, routerSpy);
  });

  describe('if user is successfully authenticated', () => {
    beforeEach(() => {
      tokenService.getToken.and.returnValue('1234');
    });

    it('grants route access to home page', () => {
      const canActivate = guard.canActivate();

      expect(canActivate).toBeTrue();
    });
  });

  describe('if user is not authenticated', () => {
    beforeEach(() => {
      tokenService.getToken.and.returnValue(null);
    });

    it('routes the user to the sign in page', () => {
      const routeSpy = routerSpy.createUrlTree as jasmine.Spy;

      guard.canActivate();
      const navArgs = routeSpy.calls.first().args[0];
      expect(navArgs)
        .withContext('should navigate to sign in page')
        .toContain('/signin');
    });
  });
});
