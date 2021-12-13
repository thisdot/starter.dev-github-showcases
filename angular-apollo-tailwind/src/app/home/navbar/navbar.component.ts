import { Component, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CurrentUser } from '../../gql';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
})
export class NavbarComponent {
	@Input() user: CurrentUser | null = null;

	constructor(private authService: AuthService) {}

	signin() {
		// Http calls complete and don't need to be unsubscribed.
		this.authService.signin().subscribe();
	}
}
