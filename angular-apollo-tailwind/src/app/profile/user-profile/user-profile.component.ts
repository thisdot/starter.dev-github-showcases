import { Component, Input } from '@angular/core';
import { ProfileDetails } from '../../gql';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  @Input() profile!: ProfileDetails;
}
