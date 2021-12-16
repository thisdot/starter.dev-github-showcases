import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PullRequestsComponent } from './pull-requests.component';
import { PullRequestsRoutingModule } from './pull-requests-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PullRequestsListComponent } from './components/pull-requests-list/pull-requests-list.component';
import { PullRequestFiltersComponent } from './components/pull-requests-filters/pull-requests-filters.component';
import { PullRequestsEmptyComponent } from './components/pull-requests-empty/pull-requests-empty.component';
import { PullRequestsSkeletonComponent } from './components/pull-requests-skeleton/pull-requests-skeleton.component';
import { IconsModule } from '../components/icons/icons.module';
import { PaginationModule } from '../components/pagination/pagination.module';
import { FilterDropdownModule } from '../components/filter-dropdown/filter-dropdown.module';

@NgModule({
  declarations: [
    PullRequestsComponent,
    PullRequestsListComponent,
    PullRequestFiltersComponent,
    PullRequestsEmptyComponent,
    PullRequestsSkeletonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    IconsModule,
    PullRequestsRoutingModule,
    FilterDropdownModule,
    PaginationModule,
  ],
  exports: [PullRequestsComponent],
})
export class PullRequestsModule {}
