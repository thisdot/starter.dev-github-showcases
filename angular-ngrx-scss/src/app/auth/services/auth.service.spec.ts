import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { SignInResponse, AuthResponse } from '../interfaces/auth';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

describe('AuthService', () => {
  let tokenService: TokenService;
  let authService: AuthService;
  let httpController: HttpTestingController;
  let token: string | null = 'hello';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: TokenService,
          useValue: {
            getToken() {
              return token;
            },
            saveToken(token: string) {
              return;
            },
            removeToken() {
              return;
            },
            removeRefreshToken() {
              return;
            },
          },
        },
      ],
    });
    tokenService = TestBed.inject(TokenService);
    authService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
    token = 'hello';
  });

  it('should redirect the user to the sign in link', () => {
    const expectedSignInResponse = {
      redirectUrl: `${environment.apiUrl}/auth/signin`,
    };

    authService.signIn().subscribe((res) => {
      expect(res).toEqual(expectedSignInResponse as SignInResponse);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: expectedSignInResponse.redirectUrl,
    });

    req.flush(expectedSignInResponse);
  });

  it('should get an access token', () => {
    const expectedAuthResponse = {
      access_token: '12345',
      bearer: '',
      scope: '',
    };
    const expectedPostUrl = `${environment.apiUrl}/auth/signin/callback`;

    authService.getToken('code').subscribe((res) => {
      expect(res).toEqual(expectedAuthResponse as AuthResponse);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: expectedPostUrl,
    });

    req.flush(expectedAuthResponse);
  });

  it('checks if a user is authenticated', () => {
    const isAuthenticated = authService.isAuthenticated();
    expect(isAuthenticated).toBeTrue();
  });

  it('checks if a user is not authenticated', () => {
    token = null;

    const isNotAuthenticated = authService.isAuthenticated();
    expect(isNotAuthenticated).toBeFalse();
  });
});
