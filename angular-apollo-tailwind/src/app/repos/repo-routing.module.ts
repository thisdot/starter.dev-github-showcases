import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoDataResolver } from './repo-data.resolver';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { ReposComponent } from './repos.component';

const routes: Routes = [
  {
    path: '',
    component: ReposComponent,
  },
  {
    path: ':owner/:repo',
    component: RepoDetailsComponent,
    resolve: {
      userDetails: RepoDataResolver,
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
      // TODO: add pull requests route
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepoRoutingModule {}
