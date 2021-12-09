import { TestBed } from '@angular/core/testing';

import { RepoDataResolver } from './repo-data.resolver';

describe('RepoDataResolver', () => {
  let resolver: RepoDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RepoDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
