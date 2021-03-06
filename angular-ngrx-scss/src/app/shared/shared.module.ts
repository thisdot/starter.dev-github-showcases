import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { RouterModule } from '@angular/router';
import { OcticonsDirective } from './directives/octicons.directive';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { MarkdownPipe } from './pipes/markdown.pipe';

@NgModule({
  declarations: [
    RepoCardComponent,
    RelativeTimePipe,
    MarkdownPipe,
    OcticonsDirective,
    FilterDropdownComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    RepoCardComponent,
    RelativeTimePipe,
    MarkdownPipe,
    OcticonsDirective,
    FilterDropdownComponent,
  ],
})
export class SharedModule {}
