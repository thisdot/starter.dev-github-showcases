import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  template: `<ng-container *ngIf="description; else noDescription">
      <span>{{ description }}</span>
    </ng-container>

    <ng-template #noDescription>
      <span className="italic"
        >No description, website, or topics provided.</span
      >
    </ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {
  @Input() description: string = '';
}
