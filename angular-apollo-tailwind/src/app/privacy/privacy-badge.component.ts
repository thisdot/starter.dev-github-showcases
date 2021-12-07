import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-privacy-badge',
  templateUrl: './privacy-badge.component.html',
})
export class PrivacyBadgeComponent implements OnInit {
  constructor() {
  }
  isPrivate?: boolean;
  ngOnInit(): void {}
}
