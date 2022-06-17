import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTopRepos, selectUserLoginName } from 'src/app/state/user';
import languageColors from 'src/assets/language-colors.json';

@Component({
  selector: 'app-top-repositories',
  templateUrl: './top-repositories.component.html',
  styleUrls: ['./top-repositories.component.scss'],
})
export class TopRepositoriesComponent {
  username$ = this.store.select(selectUserLoginName);
  repos$ = this.store.select(selectTopRepos);

  constructor(private store: Store) {}

  getColor(language: string): string {
    return languageColors[language] ?? '#000';
  }
}
