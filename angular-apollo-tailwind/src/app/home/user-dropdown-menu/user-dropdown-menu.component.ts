import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { CurrentUserQuery } from 'src/app/gql';
import { AuthService } from '../../auth/auth.service';

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
  @Input() user!: CurrentUserQuery['viewer'];

  isOpen = false;

  constructor(
    private elRef: ElementRef,
    private authService: AuthService,
    private router: Router,
  ) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  signOut() {
    this.authService
      .signout()
      .pipe(
        tap(() => {
          this.router.navigate(['/signin']);
        }),
      )
      .subscribe();
    this.closeDropdown();
  }

  // TODO: maybe convert to directive
  @HostListener('document:click', ['$event'])
  onClick(event: PointerEvent) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }
}
