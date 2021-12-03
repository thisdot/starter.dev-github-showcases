import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-tab-navigation',
  templateUrl: './repo-tab-navigation.component.html',
  styleUrls: ['./repo-tab-navigation.component.css'],
})
export class RepoTabNavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

// import { useRepo } from '@context/RepoContext';

// const { asPath } = useRouter();
// const { owner, name } = useRepo();

// const isCurrentTab = (path?: string) =>
//   typeof path === 'string' ? asPath.includes(path) : false;
