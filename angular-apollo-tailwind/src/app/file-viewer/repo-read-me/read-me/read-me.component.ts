import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-read-me',
  template: `<span [innerHTML]="text | markdown"></span>`,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ReadMeComponent {
  @Input() text = '';
}
