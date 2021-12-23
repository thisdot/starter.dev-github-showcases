import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-repos-loading',
  template: `<content-loader
    [style]="{ width: '260px', height: '480px' }"
    viewBox="0 0 325 125"
  >
    <svg:rect x="5" y="5" rx="5" ry="5" width="200" height="15" />
    <svg:rect x="215" y="5" rx="5" ry="5" width="50" height="15" />
    <svg:rect x="5" y="40" rx="5" ry="5" width="320" height="50" />
    <svg:rect x="5" y="110" rx="5" ry="5" width="75" height="10" />
    <svg:rect x="90" y="110" rx="5" ry="5" width="75" height="10" />
  </content-loader>`,
})
export class ProfileReposLoadingComponent {}
