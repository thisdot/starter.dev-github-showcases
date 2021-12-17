import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: [
    '../../repos/repo-header/repo-tab-navigation/repo-tab-navigation.component.css',
  ],
})
export class ProfileNavComponent {
  @Input() basePath = '';
  @Input() path = '';

  setPath(path?: string) {
    return path ? `${this.basePath}/${path}` : this.basePath;
  }
}
