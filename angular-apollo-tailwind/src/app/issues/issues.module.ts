import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from './issues.component';
import { IssuesRoutingModule } from './issues-routing.module';

@NgModule({
  declarations: [IssuesComponent],
  imports: [CommonModule, IssuesRoutingModule],
  exports: [IssuesComponent],
})
export class IssuesModule {}
