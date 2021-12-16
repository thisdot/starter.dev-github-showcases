import { Component, Input } from '@angular/core';

interface GistItem {
  id: string;
  description?: string | null;
  name: string;
  url: string;
}
@Component({
  selector: 'app-user-gists',
  templateUrl: './user-gists.component.html',
})
export class UserGistsComponent {
  @Input() isLoading: boolean | undefined;
  @Input() error: any;
  @Input() data: boolean | undefined;
  @Input() gists?: GistItem[];
  // implement array loop with array length 3 variable and then for loop with ng container?
}
