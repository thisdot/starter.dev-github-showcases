import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileState } from 'src/app/state/profile/profile.state';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss'],
})
export class ProfileAboutComponent {
  @Input()
  profile$?: Observable<ProfileState>;
}
