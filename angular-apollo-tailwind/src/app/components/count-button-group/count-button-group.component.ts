import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-button-group',
  templateUrl: './count-button-group.component.html',
})
export class CountButtonGroupComponent {
  @Input() count?: number;
}
