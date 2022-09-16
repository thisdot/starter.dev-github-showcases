import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchAuthenticatedUserData, signOutUser } from 'src/app/state/auth';
import { selectAuthUserName, selectAuthUserAvatar } from '../../state/auth';

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
export class NavBarComponent implements OnInit {
  dropdownMenuIsOpen = false;
  userAvatar$ = this.store.select(selectAuthUserAvatar);
  username$ = this.store.select(selectAuthUserName);

  constructor(private store: Store) {}

  ngOnInit() {
    this.username$.subscribe((user) => {
      if (!user) {
        this.store.dispatch(fetchAuthenticatedUserData());
      }
    });
  }

  toggleMenu() {
    this.dropdownMenuIsOpen = !this.dropdownMenuIsOpen;
  }

  closeDropdown() {
    this.dropdownMenuIsOpen = false;
  }

  signOut() {
    this.closeDropdown();
    this.store.dispatch(signOutUser());
  }
}
