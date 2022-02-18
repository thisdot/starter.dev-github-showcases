import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  signInGroup = new FormGroup({
    csrfToken: new FormControl(''),
    callbackUrl: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.signIn();
  }
}
