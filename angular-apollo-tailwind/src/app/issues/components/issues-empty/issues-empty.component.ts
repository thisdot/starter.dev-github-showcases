import { Component } from '@angular/core';

@Component({
  selector: 'app-issues-empty',
  template: `<div class="issues-empty-container" data-testid="issues-empty">
    <ng-icon
      name="heroMinus-circle"
      class="icon"
      aria-hidden="true"
      strokeWidth="2"
      size="1.5rem"
    ></ng-icon>
    <h3 class="heading">No results matched your search.</h3>
  </div>`,
  styleUrls: ['./issues-empty.component.css'],
})
export class IssuesEmptyComponent {}
