import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-privacy-badge',
  templateUrl: './privacy-badge.component.html',
})
export class PrivacyBadgeComponent implements OnInit {
  @Input() isPrivate?: boolean;
  constructor() {
  }

  ngOnInit(): void {}
}
