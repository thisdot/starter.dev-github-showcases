import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PullRequestsComponent } from './pull-requests.component';

const routes: Routes = [
  {
    path: '',
    component: PullRequestsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PullRequestsRoutingModule {}
