import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sd-code-icon',
  template: `<svg
    viewBox="0 0 24 24"
    version="1.1"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
  >
    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>`,
  encapsulation: ViewEncapsulation.None,
})
export class CodeIconComponent {}
