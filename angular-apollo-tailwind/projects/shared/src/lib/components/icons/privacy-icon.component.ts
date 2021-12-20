import { Component, Input, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'sd-privacy-icon',
  template: `<ng-template
      *ngIf="isPrivate === undefined; then thenBlock; else elseBlock"
    >
      <div class="w-6 h-6 bg-gray-200 opacity-25 rounded-lg"></div>
    </ng-template>
    <ng-template #thenBlock>
      <hero-icon
        name="code"
        type="outline"
        class="-ml-1 mr-1 h-4 w-4 text-gray-600"
      ></hero-icon>
    </ng-template>
    <ng-template #elseBlock
      ><sd-git-repo-icon></sd-git-repo-icon
    ></ng-template>`,
  styleUrls: ['../../styles.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PrivacyIconComponent {
  @Input() isPrivate?: boolean;
}
