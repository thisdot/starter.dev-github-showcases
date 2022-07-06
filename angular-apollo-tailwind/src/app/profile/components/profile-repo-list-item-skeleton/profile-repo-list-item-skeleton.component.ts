import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-repo-list-item-skeleton',
  template: `<div class="grid grid-cols-12 gap-x-4 animate-pulse space-y-2">
    <div class="col-span-12 md:col-span-7">
      <div class="mb-2">
        <div class="relative bottom-0.5">
          <div class="inline-block w-48 h-6 bg-gray-200 rounded mr-3"></div>
          <div class="inline-block w-16 h-6 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div class="w-80 h-5 bg-gray-200 rounded"></div>
    </div>
    <div class="col-span-12 md:col-span-5 flex items-start justify-end">
      <div class="w-20 h-7 bg-gray-200 rounded"></div>
    </div>
  </div>`,
})
export class ProfileRepoListItemSkeletonComponent {}
