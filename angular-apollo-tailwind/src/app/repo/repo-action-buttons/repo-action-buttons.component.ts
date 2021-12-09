import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-action-buttons',
  templateUrl: './repo-action-buttons.component.html',
})
export class RepoActionButtonsComponent implements OnInit {
  constructor() {}
  owner = 'Morgnism';
  name = 'Dotfiles';
  data = { 
    isPrivate: false,
    watcherCount: 1,
    stargazerCount: 1,
    forkCount: 0,
  }

  ngOnInit(): void {}
}
// const { data } = useRepo();