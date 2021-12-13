import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-welcome-user',
	templateUrl: './welcome-user.component.html',
})
export class WelcomeUserComponent {
	@Input() name: string | null = '';
}
