import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileState } from 'src/app/state/profile/profile.state';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss'],
})
export class TabNavComponent {
  @Input()
  profile$?: Observable<ProfileState>;
}
