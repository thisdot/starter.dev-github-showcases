import { Component } from '@angular/core';

@Component({
  selector: 'app-pull-request-empty',
  template: `<div
    class="pull-request-empty-container"
    data-testid="pull-request-empty"
  >
    <hero-icon
      name="minus-circle"
      type="outline"
      class="icon"
      aria-hidden="true"
    ></hero-icon>
    <h3 class="heading">No results matched your search.</h3>
  </div>`,
  styleUrls: ['./pull-requests-empty.component.css'],
})
export class PullRequestsEmptyComponent {}
