import { Component, Input } from '@angular/core';
import { UserReposState } from 'src/app/state/profile/profile.state';
import languageColors from 'src/assets/language-colors.json';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
})
export class RepoCardComponent {
  @Input()
  repo?: UserReposState;

  getColor(language: string): string {
    return languageColors[language] ?? '#000';
  }
}
