import { Component, Input, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import {
  OrgProfileData,
  OrgProfileDetails,
  OrgProfileVars,
  ORG_PROFILE_QUERY,
} from 'src/app/gql';
import { parseOrgQuery } from '../profile-about/parse-profile';
import { ProfileDetails } from '../profile.resolver';

@Component({
  selector: 'app-org-profile-about',
  templateUrl: './org-about.component.html',
})
export class OrgProfileAboutComponent implements OnInit {
  @Input() profile!: ProfileDetails;

  org$!: Observable<OrgProfileDetails>;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.org$ = this.apollo
      .watchQuery<OrgProfileData, OrgProfileVars>({
        query: ORG_PROFILE_QUERY,
        variables: {
          orgname: this.profile.owner,
        },
      })
      .valueChanges.pipe(
        map((res) => ({ ...res, ...parseOrgQuery(res.data) })),
      );
  }
}
