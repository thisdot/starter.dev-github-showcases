import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-text-line',
  template: `<content-loader
    [speed]="2"
    [style]="{ width: '400px', height: '20px' }"
    viewBox="0 0 400 20"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <svg:rect x="0" y="3" rx="5" ry="5" width="220" height="10" />
  </content-loader>`,
})
export class LoadingTextLineComponent {}
