import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topics',
  template: `<div>
    <ng-container *ngIf="topics">
      <span *ngFor="let topic of topics" class="topic">{{ topic }}</span>
    </ng-container>
  </div>`,
  styleUrls: ['./topics.component.css'],
})
export class TopicsComponent {
  @Input() topics?: string[];
}
