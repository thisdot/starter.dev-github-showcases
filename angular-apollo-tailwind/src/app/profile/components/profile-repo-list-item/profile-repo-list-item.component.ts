import { Component, Input } from '@angular/core';
import { Repo } from 'src/app/gql';

@Component({
  selector: 'app-profile-repo-list-item',
  templateUrl: './profile-repo-list-item.component.html',
})
export class ProfileRepoListItemComponent {
  @Input() item!: Repo;
}
