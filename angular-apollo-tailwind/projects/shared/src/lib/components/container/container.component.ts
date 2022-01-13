import { Component, Input } from '@angular/core';

@Component({
  selector: 'sd-container',
  template: ` <div class="py-8 border-t border-b">
    <h3 class="font-semibold">{{ title }}</h3>
    <ng-content></ng-content>
  </div>`,
})
export class ContainerComponent {
  @Input() title = '';
}
