import { Component, Input } from '@angular/core';
import { Repo } from 'src/app/gql';

@Component({
  selector: 'app-profile-repo-list',
  templateUrl: './profile-repo-list.component.html',
})
export class ProfileRepoListComponent {
  @Input() items?: Repo[] | null;
  @Input() skeletonsCount = 5;

  private get skeletons(): undefined[] {
    return Array(this.skeletonsCount).fill(undefined);
  }

  get displayItems(): Array<Repo | undefined> {
    return this.items || this.skeletons;
  }
}
