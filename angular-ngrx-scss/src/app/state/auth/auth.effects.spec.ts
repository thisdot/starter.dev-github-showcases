import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import {
  saveUserToken,
  saveUserTokenSuccess,
  signOutUser,
  signInUser,
} from './auth.actions';

import { AuthEffects } from './auth.effects';

describe('AuthEffects', () => {
  let actions$: Actions;
  let effects: AuthEffects;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', {
      signIn: () => {
        return of();
      },
      signOut: () => {
        return of();
      },
      saveUserToken: () => {
        return of();
      },
      getRedirectUrl: () => {
        return of();
      },
    });
    // the name ('http') goes as the first argument and an array of public methods you want to spyOn
    mockHttpClient = jasmine.createSpyObj('http', ['get', 'put']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'signin', redirectTo: '' }]),
      ],
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        { provide: HttpClient, useValue: mockHttpClient },
        {
          provide: AuthService,
          useValue: authService,
        },
      ],
    });

    actions$ = TestBed.inject(Actions);
    effects = TestBed.inject(AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should initiate the signIn process for the user', () => {
    actions$ = of(signInUser());
    effects.signIn$.subscribe();
    expect(authService.signIn).toHaveBeenCalled();
  });

  it('should call the signOut method to initiate the signout process', () => {
    actions$ = of(signOutUser());
    effects.signOut$.subscribe();
    expect(authService.signOut).toHaveBeenCalled();
  });

  it('should save the access_Token for the user', (done) => {
    actions$ = of(saveUserToken());

    authService.saveUserToken.and.returnValue(of('access_token_valid'));

    effects.saveUserToken$.subscribe((action) => {
      expect(action).toEqual(saveUserTokenSuccess({ isAuthenticated: true }));
      done();
    });
  });
});
