import { Component, Input, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'sd-privacy-badge',
  template: `<ng-template *ngIf="isPrivate === undefined; else elseBlock">
      <div class="w-8 h-6 bg-gray-200 opacity-25 rounded-xl"></div>
    </ng-template>

    <ng-template #elseBlock>
      <span
        class="py-0.5 px-2 text-xs rounded-xl text-gray-600 border border-gray-300 font-medium"
      >
        {{ isPrivate ? 'Private' : 'Public' }}
      </span>
    </ng-template>`,
  styleUrls: ['../../styles.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PrivacyBadgeComponent {
  @Input() isPrivate?: boolean;
}
