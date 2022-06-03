import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileState } from 'src/app/state/profile/profile.state';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss'],
})
export class ProfileNavComponent {
  @Input()
  profile$?: Observable<ProfileState>;
}
