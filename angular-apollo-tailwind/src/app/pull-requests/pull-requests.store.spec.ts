import { TestBed } from '@angular/core/testing';

import { PullRequestsStore } from './pull-requests.store';
import { RouteConfigService } from '@this-dot/route-config';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('PullRequestsStore', () => {
  let service: PullRequestsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      providers: [PullRequestsStore, RouteConfigService],
    });
    service = TestBed.inject(PullRequestsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
