import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileResolver } from '../profile/profile.resolver';
import { RepoPageResolver } from './repo-page.resolver';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { ReposComponent } from './repos.component';
const routes: Routes = [
  {
    path: '',
    component: ReposComponent,
  },
  {
    path: 'orgs/:owner',
    resolve: {
      profile: ProfileResolver,
    },
    loadChildren: () =>
      import('../profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: ':owner/:repo',
    component: RepoDetailsComponent,
    resolve: {
      repoPageData: RepoPageResolver,
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../file-viewer/file-explorer.module').then(
            (m) => m.FileExplorerModule,
          ),
      },
      {
        path: 'issues',
        loadChildren: () =>
          import('../issues/issues.module').then((m) => m.IssuesModule),
      },
      {
        path: 'pull-requests',
        loadChildren: () =>
          import('../pull-requests/pull-requests.module').then(
            (m) => m.PullRequestsModule,
          ),
      },
      {
        path: 'code',
        redirectTo: '',
      },
    ],
  },
  {
    path: ':owner',
    resolve: {
      profile: ProfileResolver,
    },
    loadChildren: () =>
      import('../profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepoRoutingModule {}
