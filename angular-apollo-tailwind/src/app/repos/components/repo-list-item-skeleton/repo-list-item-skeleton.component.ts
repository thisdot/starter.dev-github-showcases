import { Component } from '@angular/core';

@Component({
  selector: 'app-repo-list-item-skeleton',
  template: `<div class="animate-pulse space-y-2" data-testid="skeleton">
    <div>
      <div class="inline-block w-48 h-6 bg-gray-200 rounded mr-3"></div>
      <div class="inline-block w-14 h-6 bg-gray-200 rounded-full"></div>
    </div>
    <div class="w-80 h-5 bg-gray-200 rounded"></div>
  </div>`,
})
export class RepoListItemSkeletonComponent {}
