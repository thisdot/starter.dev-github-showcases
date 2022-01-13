import { Component, Input, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import {
  UserProfileDetails,
  UserProfileData,
  UserProfileVars,
  USER_PROFILE_QUERY,
} from 'src/app/gql';
import { ProfileDetails } from '../profile.resolver';
import { parseUserQuery } from './parse-profile';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.css'],
})
export class ProfileAboutComponent implements OnInit {
  @Input() profile!: ProfileDetails;

  user$!: Observable<UserProfileDetails>;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.user$ = this.apollo
      .watchQuery<UserProfileData, UserProfileVars>({
        query: USER_PROFILE_QUERY,
        variables: {
          username: this.profile.owner,
        },
      })
      .valueChanges.pipe(
        map((res) => ({
          ...res,
          ...parseUserQuery(res.data),
        })),
      );
  }
}
