import { Component, Input } from '@angular/core';
import { TopRepo } from 'src/app/gql';

@Component({
  selector: 'app-repo-list-item',
  templateUrl: './repo-list-item.component.html',
})
export class RepoListItemComponent {
  @Input() repo!: TopRepo;
}
