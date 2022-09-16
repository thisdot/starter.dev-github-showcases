import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, tap } from 'rxjs';
import { selectAuthUserName } from '../state/auth';
import { fetchUserData } from '../state/user/user.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user$ = this.store.select(selectAuthUserName);

  constructor(private store: Store) {}

  ngOnInit() {
    this.user$.subscribe((user) => {
      this.store.dispatch(fetchUserData({ username: user }));
    });
  }
}
