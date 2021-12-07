import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { RepoDetailsViewComponent } from '../repos/repo-details-view/repo-details-view.component';
import { ReposComponent } from '../repos/repos.component';
import { RedirectComponent } from '../provider/redirect/redirect.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ReposComponent,
      },
      {
        path: ':owner/:repo',
        component: RepoDetailsViewComponent,
        children: [
          // TODO: add file viewer route
          // TODO: add issues route
          // TODO: add pull requests route
        ],
      },
    ],
  },
  {
    path: 'redirect',
    component: RedirectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
