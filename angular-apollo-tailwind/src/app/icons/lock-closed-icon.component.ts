import { Component } from '@angular/core';

@Component({
  selector: 'app-lock-closed-icon',
  template: `<svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    version="1.1"
    class="icon"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width=2
  >
    <path
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    ></path>
  </svg>`,
      styleUrls: ['./icon.component.css']
})
export class LockClosedIconComponent {}
