import { Component, Input } from '@angular/core';
import { ProfileDetails } from '../profile.resolver';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  @Input() profile!: ProfileDetails;
}
