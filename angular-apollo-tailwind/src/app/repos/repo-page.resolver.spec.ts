import { TestBed } from '@angular/core/testing';

import { RepoPageResolver } from './repo-page.resolver';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('RepoDataResolver', () => {
  let resolver: RepoPageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
    });
    resolver = TestBed.inject(RepoPageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
