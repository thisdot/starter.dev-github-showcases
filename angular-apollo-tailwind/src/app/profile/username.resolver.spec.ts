import { TestBed } from '@angular/core/testing';

import { UsernameResolver } from './username.resolver';

describe('ProfileDataResolver', () => {
  let resolver: UsernameResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UsernameResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
