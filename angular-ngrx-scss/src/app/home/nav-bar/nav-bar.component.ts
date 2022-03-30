import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserAvatar, selectUserLoginName } from '../../state/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
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
export class NavBarComponent {
  dropdownMenuIsOpen = false;
  userAvatar$ = this.store.select(selectUserAvatar);
  username$ = this.store.select(selectUserLoginName);

  constructor(private store: Store) {}

  toggleMenu() {
    this.dropdownMenuIsOpen = !this.dropdownMenuIsOpen;
  }

  closeDropdown() {
    this.dropdownMenuIsOpen = false;
  }
}
