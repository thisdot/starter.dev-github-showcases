import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RepositoryEffects } from './repository.effects';

describe('RepositoryEffects', () => {
  let actions$: Observable<any>;
  let effects: RepositoryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RepositoryEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(RepositoryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
