import { Component, Input, OnInit } from '@angular/core';
import { ResolvedRepoDetails } from 'src/app/gql';

// TODO: swap to real data
@Component({
  selector: 'app-repo-heading',
  templateUrl: './repo-heading.component.html',
})
export class RepoHeadingComponent implements OnInit {
  constructor() {}

  owner = 'Morgnism';
  name = 'Dotfiles';
  data = {
    isPrivate: false,
    watcherCount: 1,
    stargazerCount: 1,
    forkCount: 0,
  };

  @Input() detail: ResolvedRepoDetails | undefined;
  ngOnInit(): void {}
}
