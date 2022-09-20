import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PullRequestsRoutingModule } from './pull-requests-routing.module';
import { PullRequestsComponent } from './pull-requests.component';
import { PullRequestsListComponent } from './components/pull-requests-list/pull-requests-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PullRequestsComponent, PullRequestsListComponent],
  imports: [CommonModule, PullRequestsRoutingModule, SharedModule],
})
export class PullRequestsModule {}
