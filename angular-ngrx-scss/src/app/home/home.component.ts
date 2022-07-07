import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserLoginName } from '../state/user';
import { fetchUserData } from '../state/user/user.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user$ = this.store.select(selectUserLoginName);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(fetchUserData());
  }
}
