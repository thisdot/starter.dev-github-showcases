import { Component } from '@angular/core';

@Component({
  selector: 'app-issues-empty',
  template: `<div class="container" data-testid="issues-empty">
    <!-- {MinusCircleIcon && <MinusCircleIcon class="icon" />} -->
    <h3 class="heading">No results matched your search.</h3>
  </div>`,
  styleUrls: ['./issues-empty.component.css'],
})
export class IssuesEmptyComponent {}
