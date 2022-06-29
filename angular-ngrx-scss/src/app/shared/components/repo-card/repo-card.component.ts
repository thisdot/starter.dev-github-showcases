import { Component, Input } from '@angular/core';
import { UserReposState } from 'src/app/state/profile/profile.state';
import languageColors from 'src/assets/language-colors.json';

const DEFAULT_COLOR = '#000';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
})
export class RepoCardComponent {
  @Input()
  repo?: UserReposState;

  get href(): string {
    return this.repo ? `/${this.repo.owner.login}/${this.repo.name}` : '#';
  }

  get visibility(): string {
    if (this.repo) {
      return this.repo.private ? 'Private' : 'Public';
    } else {
      return '';
    }
  }

  get languageColor(): string {
    if (this.repo?.language) {
      return languageColors[this.repo.language] ?? DEFAULT_COLOR;
    } else {
      return DEFAULT_COLOR;
    }
  }
}
