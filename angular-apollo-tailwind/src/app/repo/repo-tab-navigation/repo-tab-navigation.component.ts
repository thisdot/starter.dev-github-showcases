import { Component, OnInit } from '@angular/core';

export interface TabItem {
  title: string;
  path?: string;
  Icon: string;
}
@Component({
  selector: 'app-repo-tab-navigation',
  templateUrl: './repo-tab-navigation.component.html',
})
export class RepoTabNavigationComponent implements OnInit {
  constructor() {}
  tabs!: TabItem[];

  ngOnInit(): void {}
}

// const { pathname, asPath, query } = useRouter();

// const asPathBase = basePath
//   .replaceAll('[', '')
//   .replaceAll(']', '')
//   .split('/')
//   .map((part) => query[part])
//   .filter((queryPart) => typeof queryPart === 'string')
//   .join('/');

//   const isCurrentTab = (path?: string) => {
//     const matchPath = path === '' ? basePath : `${basePath}/${path}`;
//     return typeof path === undefined ? false : pathname.includes(matchPath);
//   };