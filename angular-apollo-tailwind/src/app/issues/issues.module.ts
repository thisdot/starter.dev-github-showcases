import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from './issues.component';
import { IssuesRoutingModule } from './issues-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { IssuesFiltersComponent } from './components/issues-filters/issues-filters.component';
import { IssuesEmptyComponent } from './components/issues-empty/issues-empty.component';
import { IssuesSkeletonComponent } from './components/issues-skeleton/issues-skeleton.component';

@NgModule({
  declarations: [
    IssuesComponent,
    IssuesListComponent,
    IssuesFiltersComponent,
    IssuesEmptyComponent,
    IssuesSkeletonComponent,
  ],
  imports: [CommonModule, SharedModule, IssuesRoutingModule],
  exports: [IssuesComponent],
})
export class IssuesModule {}
