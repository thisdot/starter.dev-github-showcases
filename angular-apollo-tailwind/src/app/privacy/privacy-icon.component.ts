import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-privacy-icon',
  templateUrl: './privacy-icon.component.html',
})
export class PrivacyIconComponent implements OnInit {
  @Input() isPrivate?: boolean;

  constructor() {
  }

  ngOnInit(): void {}
}
