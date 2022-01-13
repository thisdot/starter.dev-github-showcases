import { Component } from '@angular/core';
import { RouteConfigService } from '@this-dot/route-config';
import { ProfileDetails } from './profile.resolver';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  profile$ = this.routeConfigService.getLeafConfig<ProfileDetails>('profile');

  constructor(
    private routeConfigService: RouteConfigService<string, 'profile'>,
  ) {}
}
