import { Component } from '@angular/core';

@Component({
  selector: 'app-pull-request-icon',
  template: `<svg
    viewBox="0 0 24 24"
    version="1.1"
    class="class || 'w-6 h-6'"
    fill="currentColor"
  >
  <path fill="none" d="M0 0h24v24H0z" />
      <path d="M15 5h2a2 2 0 0 1 2 2v8.17a3.001 3.001 0 1 1-2 0V7h-2v3l-4.5-4L15 2v3zM5 8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0V8.83zM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>`,
})
export class PullRequestIconComponent {}
