import { Component, Input, OnInit } from '@angular/core';
import { ResolvedRepoDetails } from 'src/app/gql';

@Component({
  selector: 'app-repo-action-buttons',
  templateUrl: './repo-action-buttons.component.html',
})
export class RepoActionButtonsComponent implements OnInit {
  constructor() {}
  // owner = 'Morgnism';
  // name = 'Dotfiles';
  // data = {
  //   isPrivate: false,
  //   watcherCount: 1,
  //   stargazerCount: 1,
  //   forkCount: 0,
  // }
  @Input() detail: ResolvedRepoDetails | undefined;

  ngOnInit(): void {}
}
// const { data } = useRepo();
