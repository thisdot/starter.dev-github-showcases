import { Component, Input, OnInit } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
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
  private _userError?: unknown;
  get userError(): unknown | undefined {
    return this._userError;
  }

  constructor(private userProfileGQL: UserProfileGQL) {}

  ngOnInit(): void {
    this.user$ = this.userProfileGQL
      .watch({
        username: this.profile.owner,
      })
      .valueChanges.pipe(
        tap(() => (this._userError = undefined)),
        map((res) => parseUserQuery(res.data)),
        catchError((err: unknown) => {
          this._userError = err;
          throw err;
        }),
      );
  }
}
