import { Component, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CurrentUserQuery } from '../../gql';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() user!: CurrentUserQuery['viewer'];

  constructor(private authService: AuthService) {}

  signin() {
    this.authService.signin();
  }
}
