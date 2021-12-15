import { Component } from '@angular/core';

@Component({
  selector: 'app-issues-empty',
  template: `<div class="issues-empty-container" data-testid="issues-empty">
    <hero-icon
      name="minus-circle"
      type="outline"
      class="icon"
      aria-hidden="true"
    ></hero-icon>
    <h3 class="heading">No results matched your search.</h3>
  </div>`,
  styleUrls: ['./issues-empty.component.css'],
})
export class IssuesEmptyComponent {}
