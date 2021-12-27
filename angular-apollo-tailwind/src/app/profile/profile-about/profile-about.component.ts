import { Component } from '@angular/core';
import { RouteConfigService } from '@this-dot/route-config';
import { Apollo } from 'apollo-angular';
import { Observable, switchMap, map } from 'rxjs';
import {
  UserProfileDetails,
  UserProfileData,
  UserProfileVars,
  USER_PROFILE_QUERY,
} from 'src/app/gql';
import { ProfileDetails } from '../profile.resolver';
import { parseQuery } from './parse-profile';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.css'],
})
export class ProfileAboutComponent {
  profileDetails$: Observable<UserProfileDetails> = this.routeConfigService
    .getLeafConfig<ProfileDetails>('profile')
    .pipe(
      switchMap(({ owner, isOrg }: ProfileDetails) =>
        this.apollo
          .watchQuery<UserProfileData, UserProfileVars>({
            // TODO: add wuery for org profile
            query: isOrg ? USER_PROFILE_QUERY : USER_PROFILE_QUERY,
            variables: {
              username: owner,
            },
          })
          .valueChanges.pipe(
            map((res) => ({
              ...res,
              ...parseQuery(res.data),
            })),
          ),
      ),
    );

  constructor(
    private routeConfigService: RouteConfigService<string, 'profile'>,
    private apollo: Apollo,
  ) {}
}
