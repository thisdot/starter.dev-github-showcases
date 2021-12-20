import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PullRequestsComponent } from './pull-requests.component';
import { PullRequestsRoutingModule } from './pull-requests-routing.module';
import { PullRequestsListComponent } from './components/pull-requests-list/pull-requests-list.component';
import { PullRequestFiltersComponent } from './components/pull-requests-filters/pull-requests-filters.component';
import { PullRequestsEmptyComponent } from './components/pull-requests-empty/pull-requests-empty.component';
import { PullRequestsSkeletonComponent } from './components/pull-requests-skeleton/pull-requests-skeleton.component';
import { PaginationModule } from '../components/pagination/pagination.module';
import { FilterDropdownModule } from '../components/filter-dropdown/filter-dropdown.module';
import { IconsModule, PipesModule } from '@shared';

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
    PullRequestsRoutingModule,
    IconsModule,
    FilterDropdownModule,
    PaginationModule,
    PipesModule,
  ],
  exports: [PullRequestsComponent],
})
export class PullRequestsModule {}
