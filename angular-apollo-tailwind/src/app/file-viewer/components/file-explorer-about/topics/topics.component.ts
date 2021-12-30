import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topics',
  template: `<div>
    <span *ngFor="let topic of topics" class="topic">{{ topic }}</span>
  </div>`,
  styleUrls: ['./topics.component.css'],
})
export class TopicsComponent {
  @Input() topics: string[] = [];
}
