import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesHeaderComponent } from './components/issues-header/issues-header.component';
import { IssuesComponent } from './components/issues.component';
import { SharedModule } from '../shared/shared.module';
import { IssuesListComponent } from './components/issues-list/issues-list.component';

@NgModule({
  declarations: [IssuesComponent, IssuesHeaderComponent, IssuesListComponent],
  imports: [CommonModule, IssuesRoutingModule, SharedModule],
})
export class IssuesModule {}
