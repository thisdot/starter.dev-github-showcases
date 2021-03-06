import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css'],
})
export class ProviderComponent {
  signinGroup = new FormGroup({
    csrfToken: new FormControl(''),
    callbackUrl: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.signin();
  }
}
