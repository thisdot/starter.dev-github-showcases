import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-page-url',
  template: `<div *ngIf="homepageUrl" class="linkContainer">
    <hero-icon
      name="link"
      type="outline"
      class="linkIcon"
      aria-hidden="true"
    ></hero-icon>
    <a [href]="homepageUrl" class="link" target="_blank">
      {{ homepageUrl }}
    </a>
  </div>`,
  styleUrls: ['./home-page-url.component.css'],
})
export class HomePageUrlComponent {
  @Input() homepageUrl = '';
}
