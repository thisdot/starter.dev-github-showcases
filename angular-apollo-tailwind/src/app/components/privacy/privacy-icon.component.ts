import { Component, Input } from '@angular/core';
@Component({
	selector: 'app-privacy-icon',
	templateUrl: './privacy-icon.component.html',
})
export class PrivacyIconComponent {
	@Input() isPrivate?: boolean;
}
