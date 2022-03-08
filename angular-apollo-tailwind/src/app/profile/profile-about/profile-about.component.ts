import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProfileDetails, UserProfile, UserProfileGQL } from '../../gql';
import { parseUserQuery } from './parse-profile';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.css'],
})
export class ProfileAboutComponent implements OnInit {
  @Input() profile!: ProfileDetails;

  user$!: Observable<UserProfile | undefined>;

  constructor(private userProfileGQL: UserProfileGQL) {}

  ngOnInit(): void {
    this.user$ = this.userProfileGQL
      .watch({
        username: this.profile.owner,
      })
      .valueChanges.pipe(map((res) => parseUserQuery(res.data)));
  }
}
