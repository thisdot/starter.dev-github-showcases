import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-privacy-badge',
  templateUrl: './privacy-badge.component.html',
})
export class PrivacyBadgeComponent {
  @Input() isPrivate?: boolean;
}
