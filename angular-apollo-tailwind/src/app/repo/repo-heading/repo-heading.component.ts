import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-heading',
  templateUrl: './repo-heading.component.html',
})
export class RepoHeadingComponent implements OnInit {
  constructor() {}
  // const { owner, name, data } = useRepo();
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
