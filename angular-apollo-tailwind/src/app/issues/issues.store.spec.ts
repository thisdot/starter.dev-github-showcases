import { TestBed } from '@angular/core/testing';

import { IssuesStore } from './issues.store';
import { ReposFilterStore } from '../components/filters/repos-filter.store';
import { RouteConfigService } from '@this-dot/route-config';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('IssuesComponentStoreService', () => {
  let service: IssuesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      providers: [IssuesStore, ReposFilterStore, RouteConfigService],
    });
    service = TestBed.inject(IssuesStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
