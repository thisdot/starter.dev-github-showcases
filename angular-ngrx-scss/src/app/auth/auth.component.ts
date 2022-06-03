import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { startSignIn } from '../state/auth/auth.actions';

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

  constructor(private store: Store) {}

  onSubmit() {
    this.store.dispatch(startSignIn());
  }
}
