import { TestBed } from '@angular/core/testing';

import { ProfileReposStore } from './profile-repos.store';
import { RouteConfigService } from '@this-dot/route-config';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileReposFilterStore } from '../../components/filters/profile-repos-filter-store';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('ProfileReposStore', () => {
  let service: ProfileReposStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      providers: [
        ProfileReposStore,
        ProfileReposFilterStore,
        RouteConfigService,
      ],
    });
    service = TestBed.inject(ProfileReposStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
