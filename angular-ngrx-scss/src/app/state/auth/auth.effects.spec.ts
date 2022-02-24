import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';

import { AuthEffects } from './auth.effects';

describe('AuthEffects', () => {
  let actions$: Actions;
  let effects: AuthEffects;
  let mockHttpClient;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('http', ['get', 'put']);
    TestBed.configureTestingModule({
      // the name ('http') goes as the first argument and an array of public methods you want to spyOn
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        { provide: HttpClient, useValue: mockHttpClient },
      ],
    });

    actions$ = TestBed.inject(Actions);
    effects = TestBed.inject(AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
