import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-badge',
  template: `<ng-container *ngIf="{{isPrivate === undefined}}; else elseBlock">
      <div class="w-8 h-6 bg-gray-200 opacity-25 rounded-xl"></div>
    </ng-container>
    <ng-container #elseBlock>
      <span
        class="py-0.5 px-2 text-xs rounded-xl text-gray-600 border border-gray-300 font-medium"
      >
        {isPrivate ? 'Private' : 'Public'}
      </span>
    </ng-container>`,
})
export class PrivacyBadgeComponent {}
