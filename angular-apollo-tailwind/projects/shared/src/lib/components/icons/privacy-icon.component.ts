import { Component, Input } from '@angular/core';
@Component({
  selector: 'sd-privacy-icon',
  template: `<ng-template
      *ngIf="isPrivate === undefined; then thenBlock; else elseBlock"
    >
      <div class="w-6 h-6 bg-gray-200 opacity-25 rounded-lg"></div>
    </ng-template>
    <ng-template #thenBlock>
      <ng-icon
        name="heroCodeBracket"
        size="1.25rem"
        borderWidth="2"
        class="-ml-1 mr-1 h-6 w-6 text-gray-600"
      ></ng-icon>
    </ng-template>
    <ng-template #elseBlock
      ><sd-git-repo-icon></sd-git-repo-icon
    ></ng-template>`,
})
export class PrivacyIconComponent {
  @Input() isPrivate?: boolean;
}
