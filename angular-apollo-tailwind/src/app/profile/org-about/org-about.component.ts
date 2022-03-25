import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrgProfileGQL, OrgProfileQuery, ProfileDetails } from '../../gql';

@Component({
  selector: 'app-org-profile-about',
  templateUrl: './org-about.component.html',
})
export class OrgProfileAboutComponent implements OnInit {
  @Input() profile!: ProfileDetails;

  org$!: Observable<OrgProfileQuery['organization']>;

  constructor(private orgProfileGQL: OrgProfileGQL) {}

  ngOnInit(): void {
    this.org$ = this.orgProfileGQL
      .watch({
        orgname: this.profile.owner,
      })
      .valueChanges.pipe(map((res) => res.data.organization));
  }
}
