import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { RouterModule } from '@angular/router';
import { OcticonsDirective } from './directives/octicons.directive';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RepoIssuePullCardComponent } from './components/repo-issue-pull-card/repo-issue-pull-card.component';
import { ClickAwayDirective } from './directives/click-away.directive';
import { ClearFiltersButtonComponent } from './components/clear-filters-button/clear-filters-button.component';

@NgModule({
  declarations: [
    RepoCardComponent,
    RelativeTimePipe,
    MarkdownPipe,
    OcticonsDirective,
    FilterDropdownComponent,
    PaginationComponent,
    RepoIssuePullCardComponent,
    ClickAwayDirective,
    ClearFiltersButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    RepoCardComponent,
    RelativeTimePipe,
    MarkdownPipe,
    OcticonsDirective,
    FilterDropdownComponent,
    PaginationComponent,
    RepoIssuePullCardComponent,
    ClickAwayDirective,
    ClearFiltersButtonComponent,
  ],
})
export class SharedModule {}
