import { Component } from '@angular/core';

@Component({
  selector: 'sd-git-repo-icon',
  template: `<svg
    viewBox="0 0 24 24"
    version="1.1"
    class="privacyIcon"
    fill="currentColor"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z"
    />
  </svg>`,
  styleUrls: ['./icon.component.css'],
})
export class GitRepoIconComponent {}
