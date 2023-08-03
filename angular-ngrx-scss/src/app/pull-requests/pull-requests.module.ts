import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PullRequestsRoutingModule } from './pull-requests-routing.module';
import { PullRequestsComponent } from './pull-requests.component';
import { PullRequestsListComponent } from './components/pull-requests-list/pull-requests-list.component';
import { SharedModule } from '../shared/shared.module';
import { PullRequestsHeaderComponent } from './components/pull-requests-header/pull-requests-header.component';
import { PullRequestCardComponent } from './components/pull-request-card/pull-request-card.component';

@NgModule({
  declarations: [
    PullRequestsComponent,
    PullRequestsListComponent,
    PullRequestsHeaderComponent,
    PullRequestCardComponent,
  ],
  imports: [CommonModule, PullRequestsRoutingModule, SharedModule],
})
export class PullRequestsModule {}
