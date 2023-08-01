import { Component } from '@angular/core';

@Component({
  selector: 'app-pull-request-empty',
  template: `<div
    class="pull-request-empty-container"
    data-testid="issues-empty"
  >
    <ng-icon
      name="heroMinusCircle"
      size="2rem"
      strokeWidth="2"
      class="icon"
      aria-hidden="true"
    ></ng-icon>
    <h3 class="heading">No results matched your search.</h3>
  </div>`,
  styleUrls: ['./pull-requests-empty.component.css'],
})
export class PullRequestsEmptyComponent {}
