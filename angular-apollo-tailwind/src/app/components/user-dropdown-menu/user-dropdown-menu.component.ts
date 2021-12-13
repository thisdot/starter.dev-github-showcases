import { trigger, transition, style, animate } from '@angular/animations';
import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { CurrentUser } from 'src/app/gql';

@Component({
	selector: 'app-user-dropdown-menu',
	templateUrl: './user-dropdown-menu.component.html',
	animations: [
		trigger('openClose', [
			transition(':enter', [
				style({ opacity: 0, transform: 'scale(0.95)' }),
				animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
			]),
			transition(':leave', [
				animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' })),
			]),
		]),
	],
})
export class UserDropdownMenuComponent {
	@Input() user: CurrentUser | null = null;

	isOpen = false;

	constructor(private elRef: ElementRef) {
		console.log(this.user);
	}

	toggleMenu() {
		this.isOpen = !this.isOpen;
	}

	signOut() {
		// TODO: make this work
		console.log('sign out clicked', this.user);
	}

	// TODO: maybe convert to directive
	@HostListener('document:click')
	onClick(event: PointerEvent) {
		if (!this.elRef.nativeElement.contains(event.target)) {
			this.isOpen = false;
		}
	}
}
