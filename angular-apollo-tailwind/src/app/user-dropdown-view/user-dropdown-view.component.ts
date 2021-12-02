import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { Component, ElementRef, Input } from '@angular/core';

@Component({
  host: {
    '(document:click)': 'onClick($event)',
  },
  selector: 'app-user-dropdown-view',
  templateUrl: './user-dropdown-view.component.html',
  styleUrls: ['./user-dropdown-view.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({ opacity: 1, transform: 'scale(1)' })),
      state('close', style({ opacity: 0, transform: 'scale(0.95)' })),
      transition('open => close', [animate('75ms ease-in')]),
      transition('close => open', [animate('100ms ease-out')]),
    ]),
  ],
})
export class UserDropdownViewComponent {
  @Input() user: any = null;

  isOpen = false;

  constructor(private elRef: ElementRef) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  signOut() {
    // TODO: make this work
    console.log('sign out clicked');
  }

  // TODO: maybe convert to directive
  onClick(event: PointerEvent) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
