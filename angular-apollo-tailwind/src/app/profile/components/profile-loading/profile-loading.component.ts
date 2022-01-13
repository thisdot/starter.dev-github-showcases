import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-loading',
  template: `<content-loader
    [style]="{ width: '260px', height: '480px' }"
    viewBox="0 0 260 480"
    class="relative z-30"
  >
    <svg:circle cx="130" cy="130" r="130" />
    <svg:rect x="5" y="280" rx="5" ry="5" width="180" height="10" />
    <svg:rect x="5" y="300" rx="5" ry="5" width="125" height="10" />
    <svg:rect x="5" y="335" rx="5" ry="5" width="260" height="30" />
    <svg:rect x="5" y="390" rx="5" ry="5" width="225" height="8" />
    <svg:rect x="5" y="430" rx="5" ry="5" width="225" height="10" />
    <svg:rect x="5" y="450" rx="5" ry="5" width="225" height="10" />
    <svg:rect x="5" y="470" rx="5" ry="5" width="225" height="10" />
  </content-loader>`,
})
export class ProfileLoadingComponent {}
