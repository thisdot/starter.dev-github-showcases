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
  @Input() isLoading!: boolean;
  @Input() error: any;
  @Input() data: any;
  @Input() gists?: GistItem[];
}
