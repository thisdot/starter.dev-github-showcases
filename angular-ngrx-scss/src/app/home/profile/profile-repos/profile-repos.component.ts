import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UserReposState } from 'src/app/state/profile/profile.state';
import languageColors from 'src/assets/language-colors.json';

@Component({
  selector: 'app-profile-repos',
  templateUrl: './profile-repos.component.html',
  styleUrls: ['./profile-repos.component.scss'],
})
export class ProfileReposComponent {
  @Input()
  repos$?: Observable<UserReposState[]>;

  getColor(language: string): string {
    return languageColors[language] ?? '#000';
  }
}
