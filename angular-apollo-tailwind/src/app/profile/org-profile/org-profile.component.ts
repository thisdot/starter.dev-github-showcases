import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-org-profile',
  templateUrl: './org-profile.component.html',
})
export class OrgProfileComponent extends UserProfileComponent {}
