import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sd-count-button-group',
  templateUrl: './count-button-group.component.html',
  styleUrls: ['../../styles.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CountButtonGroupComponent {
  @Input() count = 0;
}
