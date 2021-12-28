import { TestBed } from '@angular/core/testing';

import { RepoPageResolver } from './repo-page.resolver';

describe('RepoDataResolver', () => {
  let resolver: RepoPageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RepoPageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
