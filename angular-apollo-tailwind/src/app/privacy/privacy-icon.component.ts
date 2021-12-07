import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-privacy-icon',
  templateUrl: './privacy-icon.component.html',
})
export class PrivacyIconComponent implements OnInit {
  constructor() {
  }
  isPrivate?: boolean;
  ngOnInit(): void {}
}
