import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
})
export class WelcomeUserComponent implements OnInit {
  @Input() name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
