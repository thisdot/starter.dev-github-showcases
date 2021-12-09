import { Component, Input, OnInit } from '@angular/core';
import { ResolvedRepoDetails } from 'src/app/gql';
// import { TabItem } from '../repo-tab-navigation/repo-tab-navigation.component';

// TODO: import added icons
// This doesn't work in Angular, need a different approach
@Component({
  selector: 'app-repo-header',
  templateUrl: './repo-header.component.html',
})
export class RepoHeaderComponent implements OnInit {
  @Input() details: ResolvedRepoDetails | undefined;

  constructor() {
    // console.log(this.details);
  }

  // tabList: TabItem[] = [
  //   {
  //     title: 'Code',
  //     path: '',
  //     Icon: CodeIcon,
  //   },
  //   {
  //     title: 'Issues',
  //     Icon: InformationCircleIcon,
  //   },
  //   {
  //     title: 'Pull Requests',
  //     Icon: PullRequestIcon,
  //   },
  // ];

  ngOnInit(): void {}
}
