import { Component, Input } from '@angular/core';
@Component({
  selector: 'sd-privacy-icon',
  template: `<ng-template
      *ngIf="isPrivate === undefined; then thenBlock; else elseBlock"
    >
      <div class="iconPlaceholder"></div>
    </ng-template>
    <ng-template #thenBlock>
      <hero-icon
        name="code"
        type="outline"
        class="iconInactive icon"
      ></hero-icon>
    </ng-template>
    <ng-template #elseBlock
      ><sd-git-repo-icon></sd-git-repo-icon
    ></ng-template>`,
})
export class PrivacyIconComponent {
  @Input() isPrivate?: boolean;
}
