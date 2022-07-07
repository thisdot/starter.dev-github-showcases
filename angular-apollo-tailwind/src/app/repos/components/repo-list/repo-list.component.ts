import { Component, Input } from '@angular/core';
import { TopRepo } from 'src/app/gql';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
})
export class RepoListComponent {
  @Input() repos?: TopRepo[];
  @Input() login = '';
  @Input() skeletonsCount = 3;

  private get skeletons(): undefined[] {
    return Array(this.skeletonsCount).fill(undefined);
  }

  get displayItems(): Array<TopRepo | undefined> {
    return this.repos || this.skeletons;
  }
}
