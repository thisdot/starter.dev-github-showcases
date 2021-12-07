import { Component, OnInit } from '@angular/core';
import { TabItem } from '../repo-tab-navigation/repo-tab-navigation.component';

// TODO: add icons
@Component({
  selector: 'app-repo-header',
  templateUrl: './repo-header.component.html',
})
export class RepoHeaderComponent implements OnInit {
  constructor() {}

  tabList: TabItem[] = [
    {
      title: 'Code',
      path: '',
      Icon: CodeIcon,
    },
    {
      title: 'Issues',
      Icon: InformationCircleIcon,
    },
    {
      title: 'Pull Requests',
      Icon: PullRequestIcon,
    },
  ];

  ngOnInit(): void {}
}
