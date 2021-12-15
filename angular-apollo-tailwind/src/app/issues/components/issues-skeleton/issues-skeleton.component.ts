import { Component } from '@angular/core';

@Component({
  selector: 'app-issues-skeleton',
  template: `<div
    *ngFor="let empty of emptyArray"
    class="p-4 border-b animate-pulse space-y-2"
    data-testid="skeleton"
  >
    <div class="ml-6 max-w-3xl w-full h-5 bg-gray-200 rounded"></div>
    <div class="ml-6 w-48 h-3.5 bg-gray-200 rounded"></div>
  </div>`,
})
export class IssuesSkeletonComponent {
  emptyArray = Array.from({ length: 3 });
}
