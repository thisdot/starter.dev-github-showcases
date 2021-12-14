import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-gists',
  templateUrl: './user-gists.component.html',
})
export class UserGistsComponent {
  @Input() isLoading: boolean | undefined;
  @Input() error: any;
  @Input() data: boolean | undefined;
}
