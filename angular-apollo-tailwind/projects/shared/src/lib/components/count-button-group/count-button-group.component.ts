import { Component, Input } from '@angular/core';

@Component({
  selector: 'sd-count-button-group',
  templateUrl: './count-button-group.component.html',
})
export class CountButtonGroupComponent {
  @Input() count = 0;
}
